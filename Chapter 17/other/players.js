// hard coded data for purposes of illustration
const LEAGUE_NAME = "English Premier League";
const TEAM_NAME = "Arsenal";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/1/";
const ALL_LEAGUES_URL = BASE_URL + "all_leagues.php";
const ALL_TEAMS_URL = BASE_URL + "lookup_all_teams.php";
const ALL_PLAYERS_URL = BASE_URL + "lookup_all_players.php";
const PLAYER_HONORS_URL = BASE_URL + "lookuphonors.php";

function myFetch(url, params) {
    if (params) {
        url += "?" + encodeParams(params);
    }
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        }
    );
}

function encodeParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function findLeagueId(leagueData, leagueName) {
    const league = leagueData.leagues.find(l => l.strLeague === leagueName);
    return league ? league.idLeague : null;
}

function findTeamId(teamData, teamName) {
    const team = teamData.teams.find(t => t.strTeam === teamName);
    return team ? team.idTeam : null;
}

function printHonors(honorData) {
    if (honorData.honors != null) {
        var playerLI = document.createElement("li");
        document.getElementById("honorsList").append(playerLI);

        var playerName =
            document.createTextNode(honorData.honors[0].strPlayer);
        playerLI.appendChild(playerName);

        var honorsUL= document.createElement("ul");
        playerLI.appendChild(honorsUL);

        honorData.honors.forEach(honor => {
            var honorLI = document.createElement("li");
            honorsUL.appendChild(honorLI);

            var honorText = document.createTextNode(
                `${honor.strHonour} - ${honor.strSeason}`);
            honorLI.appendChild(honorText);
        });
    }
}