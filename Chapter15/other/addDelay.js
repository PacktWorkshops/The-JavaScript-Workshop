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

// use 1: Two params specified, so execute a promise after a delay
let p1 = addDelay(3000, fetch(nextEventUrl))
  .then(response => response.json())
  .then(nextEvents => console.log("Use 1: " + nextEvents.events[0].strEvent));

// use 2: Only one param specified, so return a function that takes 
//        the promise as a parameter with the expectation that the then() 
//        invocation will supply the promise when invoking the function.
let p2 = fetch(nextEventUrl)
  .then(addDelay(1000))
  .then(response => response.json())
  .then(nextEvents => console.log("Use 2: " + nextEvents.events[1].strEvent));

// use 3: just want to return a value after a delay
let p3 = addDelay(2000, "This is a passed in value")
  .then(result => console.log("Use 3: " + result));

// output all done
Promise.all([p1, p2, p3])
  .then(() => console.log("All done!"));