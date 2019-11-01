function addDelay(ms, promise) {
    return promise.then(returnVal =>
        new Promise(resolve =>
            setTimeout(() => resolve(returnVal), ms)
        )
    );
}

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/1/";
const nextEventUrl = BASE_URL + "eventsnextleague.php?id=4328";


addDelay(3000, fetch(nextEventUrl))
  .then(response => response.json())
  .then(nextEvents => console.log(nextEvents.events[0].strEvent));