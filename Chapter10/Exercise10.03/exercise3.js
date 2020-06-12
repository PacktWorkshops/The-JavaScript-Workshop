$(document).ready(function () {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://www.thesportsdb.com/api/v1/json/1/lookupevent.php', 
data: {id: 441613},

        success: function (data) {
        
            const game = data.events[0];
  $("#game_date").html(game.dateEvent);

      

            const homeScore = parseInt(game.intHomeScore);
                     const awayScore = parseInt(game.intAwayScore);

            const homeWinner = homeScore > awayScore;
            const tie = homeScore == awayScore;

             $("#home_score").html(homeScore)
                .addClass( (homeWinner || tie) ? "winning_score" : "")  
            $("#away_score").html(awayScore)
                .addClass( (!homeWinner || tie) ? "winning_score" : "");

           getTeamImage(game.idHomeTeam, "#home_img");
            getTeamImage(game.idAwayTeam, "#away_img");

            
            $("#game_table").show();
        }
    });
    
});

function getTeamImage(teamId, imageId) {

    $.getJSON('https://www.thesportsdb.com/api/v1/json/1/lookupteam.php', 
        {id: teamId}, 
        function(data) { 
            const teamData = data.teams[0];   
            $(imageId).attr("src", teamData.strTeamBanner);
        }
    );
}