console.log("This is a tank sentence");

/* task 
Step 1: fetch tanks 
Step 2: console log tanks 
Bonus: add them to the div: tanks-wrapper 
*/

// 1 + 2 + Bonus
fetch("/api/tanks")
.then(response => response.json())
.then(result => {
    const tanksWrapperDiv = document.getElementById("tanks-wrapper");
    result.data.forEach(tank => {

        const tankDiv = document.createElement("div");

        const tankNameP = document.createElement("p");
        tankNameP.innerText = tank.name || "";
        const tankNationalityP = document.createElement("p");
        tankNationalityP.innerText = tank.nationality || "";

        tankDiv.appendChild(tankNameP);
        tankDiv.appendChild(tankNationalityP);

        tanksWrapperDiv.appendChild(tankDiv);
    });
});
