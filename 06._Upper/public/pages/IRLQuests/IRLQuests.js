// https://www.boredapi.com/api/activity
// task fetch from boredapi and console log it

function fetchQuest(activityQueryString="") {
    fetch("https://www.boredapi.com/api/activity" + activityQueryString)
    .then(response => response.json())
    .then(result => {

        /* console.log(result.activity) */

        // task make the activity visible in the quest tag
        const insertActivity = document.getElementById('quest');
        insertActivity.innerText = result.activity;
    });
}
fetchQuest(); // should still show a 'starter' quest to begin with


function getNewQuest() {
    const dropdown = document.getElementById('activity-dropdown');
    // you don't need await here because the value is not needed somewhere else
    fetchQuest(`?type=${dropdown.value}`);
}

// this is the same as the one below, but by writing it like this you wrap it and it takes up more memory 
// | you are here avoiding the function being executed with () => because the it's a function(). 
/*document.getElementById("fecth-new-quest-btn").addEventListener("click", () => getNewQuest());*/

// getNewQuest is a function reference 
document.getElementById("fecth-new-quest-btn").addEventListener("click", getNewQuest);

