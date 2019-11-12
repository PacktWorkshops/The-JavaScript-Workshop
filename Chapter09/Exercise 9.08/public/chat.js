
$(function(){
   	//make connection
	var socket = io.connect('http://localhost:3000')

	//buttons and inputs
	var message = $("#message")
	var username = $("#username")
	var send_message = $("#send_message")
	var send_username = $("#send_username")
	var chatroom = $("#chatroom")
	var feedback = $("#feedback")

	var typingTimer;                //timer identifier
	var doneTypingInterval = 1000;  //time in ms, 5 second for example

	var temp_usernames = ["Captain America", "Thor", "Hulk", "Agent Fury", "Iron Man", "Ant Man", "Stan Lee", "Black Widow", "Hawkeye", "Spider-man", "Thanos", "Loki"]

	//
	socket.emit('change_username', {username : temp_usernames[Math.floor(Math.random() * temp_usernames.length)]});

	//Emit message
	send_message.click(function(){
		socket.emit('new_message', {message : message.val()})
	})

	//Listen on new_message
	socket.on("new_message", (data) => {
		if(!data.message) return false;
		chatroom.append("<p class='message'><b>" + data.username + "</b>: " + data.message + " <span class='time'> " + getTime() + " </span>" + "</p>")
		// Clear temp info
		feedback.html('');
		message.val('');
	})

	//Emit a username
	send_username.click(function(){
		if(!username.val()) return false;
		socket.emit('change_username', {username : username.val()});
		feedback.html("<p><i> Your identity has changed to <b>" + username.val() + "</b>." + "</i></p>");
	})

	//Emit typing
	message.bind("keypress", (e) => {
		if(e.key === 'Enter') {
			socket.emit('new_message', {message : message.val()});
		} else {
			socket.emit('typing');
			clearTimeout(typingTimer);
			typingTimer = setTimeout(function() {
			  	socket.emit('stop_typing'); //user is finished typing
			}, doneTypingInterval);
		}
	})

	//Listen on typing
	socket.on('typing', (data) => {
		feedback.html("<p><i><b>" + data.username + "</b> is typing a message..." + "</i></p>")
	})

	//Listen on typing
	socket.on('stop_typing', (data) => {
		feedback.html("")
	})

	function getTime(){
		var timeNow = new Date();
		var hours   = timeNow.getHours();
		var minutes = timeNow.getMinutes();
		var seconds = timeNow.getSeconds();
		var timeString = "" + ((hours > 12) ? hours - 12 : hours);
		timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
		timeString  += ((seconds < 10) ? ":0" : ":") + seconds;
		timeString  += (hours >= 12) ? " P.M." : " A.M.";
		return timeString;
	}
});


