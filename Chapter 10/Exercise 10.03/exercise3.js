$(document).ready(function () {

    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php',
        data: {id: 134862},
        success: function (data) {
        
            // find the most recent game that had a score reported
            const lastGame = data.results.find(g => g.intAwayScore != null && 
                                                    g.intHomeScore != null);
      
            $("#game_date").html(lastGame.dateEvent);

            const homeScore = parseInt(lastGame.intHomeScore);
            const awayScore = parseInt(lastGame.intAwayScore);
            const homeWinner = homeScore > awayScore;
            const tie = homeScore == awayScore;

             $("#home_score").html(homeScore)
                .addClass( (homeWinner || tie) ? "winning_score" : "")  
            $("#away_score").html(awayScore)
                .addClass( (!homeWinner || tie) ? "winning_score" : "");

            getTeamImage(lastGame.idHomeTeam, "#home_img");
            getTeamImage(lastGame.idAwayTeam, "#away_img");
            
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