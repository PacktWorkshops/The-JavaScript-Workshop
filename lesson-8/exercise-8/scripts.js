// scripts.js

document.addEventListener('DOMContentLoaded', () => { // wait for page load
  let socket = new WebSocket("wss://echo.websocket.org"); // create new socket connection
  let dmInput = document.getElementById('dm-id'); // get the DM text input
  let groupInput = document.getElementById('group-input'); // get the group text input
  let dmList = document.getElementById('dm-list'); // get the dm messages list
  let groupList = document.getElementById('group-list'); // get the group messages list

  socket.onopen = event => {
    document.getElementById('socket-status').innerText = "Socket is open"; // set the status on open
  };

  socket.onclose = event => {
    document.getElementById('socket-status').innerText = "Socket is closed"; // set the status on close
  };

  socket.onmessage = event => { // prepare to receive socket messages
    let messageData = JSON.parse(event.data); // parse the data
    let newMessage = document.createElement('li'); // create a new HTML <li> element
    newMessage.innerText = messageData.message; // set the <li> element's innerText to the messag text
    if (messageData.action === 'group') { // if it's a group message
      groupList.append(newMessage); // append to the group list
    } else {
      dmList.append(newMessage); // append to the dm list
    };
  };

  Array.from(document.getElementsByTagName('input')).forEach(input => { // For each input element
    input.addEventListener('keydown', event => { // add a keydown event listenr
      if (event.keyCode === 13) { // if it's keyCode 13 (the enter key)
        let messageData = { // declare the message data object
          message: event.target.value
        };
        if (event.target.id === 'group-input') { // check the message type by looking at the input element's ID
          messageData.action = 'group'
        } else {
          messageData.action = 'dm'
        }
        socket.send(JSON.stringify(messageData)); // stringify the message and send it through the socket connection
        event.target.value = ''; // clear the input element
      };
    });
  });
});
