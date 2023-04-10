console.log("Thank you for visiting");

// assignment redirect a user to /visitors after they've been to the museum for 3 seconds...
// | write everything in this file

// CLIENT SIDE REDIRECTION 
window.setTimeout( () => {
    window.location.href= "/visitors";
    // another way: window.location.replace("/visitors")
}, 3000);




