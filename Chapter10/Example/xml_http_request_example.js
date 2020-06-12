const url = "https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=441613";

var xhttp = new XMLHttpRequest();
xhttp.open('GET', url);
xhttp.setRequestHeader('Accept', 'application/json');
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
	  
      
      const game = data.events[0];

	  
        document.getElementById("game_date").innerHTML = game.dateEvent;

        document.getElementById("away_team").innerHTML = game.strAwayTeam;

        document.getElementById("home_team").innerHTML = game.strHomeTeam;
        document.getElementById("away_score").innerHTML = lastGame.intAwayScore;
        document.getElementById("home_score").innerHTML = lastGame.intHomeScore;
	  
        document.getElementById("game_table").style.display = 'block';
    }
}
xhttp.send();