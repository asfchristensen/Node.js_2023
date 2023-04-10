/* assignment
    1. write a fetch that gets the visitor count and shows it in #visitor-count 
*/

fetch("/api/visitors")
.then(response => response.json())
.then(result => {
    updateVisitorCount(result.data);
});

function updateVisitorCount(visitorCount) {
    const visitorCountDiv = document.getElementById("visitor-count");
    visitorCountDiv.innerText = visitorCount;
}

/* assignment
    1. when a button is clicked, update the visitor count with PUT
    2. and then call updateVisitorCount
*/

function writeInVisitorLog(){
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => updateVisitorCount(result.data));
}
