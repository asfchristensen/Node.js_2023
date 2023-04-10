<script>
    import { refrigeratorMessages } from "../../store/refrigeratorMessages";

    // logs three methods: set, update and subscribe (we don't use subscribe)
    // | set: just sets the value and then the value is whatever have been set
    // | update: callback function that gets the current value and updates it
    console.log(refrigeratorMessages);

    function eraseFridgeMessages() {
        refrigeratorMessages.set([]);
    }
</script>

<!--$ = Gives the value-->
<h5>{$refrigeratorMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>

<slot></slot>

<p>---------------------------------</p>
<p>|        HELLO, WELCOME       |</p>
<p>---------------------------------</p>