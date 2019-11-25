function addDelay(ms, promise) {

    if (promise === undefined) {
        // In this case, only one param was specified.  Since you don't have
        // the promise yet, return a function with the promise as a param and
        // call addDelay() recursively with two params
        return promise => addDelay(ms, promise);
    }

    // if you reached this far, there were two parameters

    return Promise.resolve(promise).then(returnVal =>
        new Promise(resolve =>
            setTimeout(() => resolve(returnVal), ms)
        )
    );
}

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/1/";
const nextEventUrl = BASE_URL + "eventsnextleague.php?id=4328";

(async () => {
    let p1 = use1();
    let p2 = use2();
    let p3 = use3();

    await p1;
    await p2;
    await p3;

    console.log("All done!");
})();

async function use1() {
    let response = await addDelay(3000, fetch(nextEventUrl));
    let nextEvents = await response.json();
    console.log("Use case 1: " + nextEvents.events[0].strEvent);
}

async function use2() {
    let response = await fetch(nextEventUrl);
    await addDelay(1000);
    let nextEvents = await response.json();
    console.log("Use case 2: " + nextEvents.events[1].strEvent);
}

async function use3() {
    let result = await addDelay(2000, "This is a passed in value");
    console.log("Use case 3: " + result);
}
