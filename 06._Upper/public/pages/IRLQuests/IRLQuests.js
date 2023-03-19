// https://www.boredapi.com/api/activity
// task fetch from boredapi and console log it

fetch("https://www.boredapi.com/api/activity")
.then(response => response.json())
.then(result => {

    /* console.log(result.activity) */

    // task make the activity visible in the quest tag
    const insertActivity = document.getElementById('quest');
    insertActivity.innerText = result.activity;
});


