<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["🍪","🍪","🍪","🍪","🍪"];

    function handleShowLove(message) {
        console.log(message);
    }

    function handleAskForAllowance(message) {
        console.log(message);
        niblings.forEach(nibling => {
            nibling.money += 100;
            console.log(`${nibling.name} just recieved 100 $$. ${nibling.name} now has ${nibling.money} on the account`);
        });

    }

    function handleEatCookie(){
        if (cookies.length === 0) {
            console.log("Aaaaw, no more cookies left.")
        } else {
            cookies.pop();
            // sends a message that cookies have changed - is done like this by assigning cookies to cookies
            cookies = cookies;
            console.log(`Have a cookie my child 🍪.`)
        }
    }
</script>

<h2>{name}</h2>

<p>Cookie Jar {cookies}</p>

{#each niblings as nibling (nibling.id)}
<!-- Passing data/references to Nibling from Pibling, because Nibling requires them in functions in Nibling -->
    <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name} onAskForAllowance={handleAskForAllowance} onEatCookie={handleEatCookie}/>
{/each}