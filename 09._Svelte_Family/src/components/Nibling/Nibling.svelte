<script>
    // defining the props
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onEatCookie;
    export let onAskForAllowance;

    import { refrigeratorMessages } from "../../store/refrigeratorMessages";

    let fridgeMessage = "";

    function handleWriteFridgeMessage() {
        // update the store 
        // | this will NOT overwrite the past value

        //$refrigeratorMessages.push(fridgeMessage);
        //refrigeratorMessages.set($refrigeratorMessages);

        refrigeratorMessages.update((currentFridgeMessages) => {
            // it's a callback and doesn't need a $ 
            currentFridgeMessages.push(fridgeMessage);
            return currentFridgeMessages;
        });
        
        // clearing the input field
        fridgeMessage = "";
    }
</script>

<!-- 
    If you want to pass data to pibling you have to do it through nibling (data-flow from parent to child)
-->

<!-- 
    When we give the name it follows this order - so if you want to delete the first element with an emoji it will delete the last element
    Important to have something that is unique like an "id" for each element to avoid this problem 
-->

<!-- If you want to apply dynamic styling for specific elements you need to wrap it in a div-->
<div class:is-girl={true} class:is-boy={!nibling.isGirl} class={nibling.blackSheep || "not-a-black-sheep"} > 
{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
{:else}
    <p>Nephew: {nibling.name}</p>
{/if}
</div>

<!-- Always wrap it in a lambda or else it will get invoked immediately-->
<!--If you want to say "Hey ${"pibling name"} either John or Mark"-->
<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name} and I love you.`)}>Show Love</button>

<button on:click={onEatCookie}>Eat a cookie</button>


<!--
    TASK: A nibling should be allowed to ask a pibling for allowance
    A nibling should have a certain amount of money 
    When they ask for allowance all niblings should get 100 of wether currency
-->

<button on:click={() => onAskForAllowance(`Hey ${piblingName}. It's me ${nibling.name}. Can I get some allowance?`)}>Ask for allowance</button>


<p>There are {$refrigeratorMessages.length} messages on the fridge.</p>

<!-- Binding the value allows to change fridegeMessage and bound to the input field-->
<input bind:value={fridgeMessage}>
<button on:click={handleWriteFridgeMessage}>Write a mesage on the fridge</button>


<!-- Dynamic styling with props to define each component -->
<!-- this is called "SCOPED STYLING" and is preffered - this styling relates to this component "Nibling.svelte"-->
<style>
    .is-girl {
        border: 3px solid blue;
    }

    .is-boy {
        border: 3px solid pink;
    }

    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }

    .medium-black-sheep {
        background-color: burlywood;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>