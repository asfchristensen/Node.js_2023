<script>
    import { onMount } from "svelte";

    import { BASE_URL } from "./store/urlDomain";

    import Home from "./components/Home/Home.svelte";
    import Pibling from "./components/Pibling/Pibling.svelte";

    onMount(async () => {
      const registerURL = `${BASE_URL}/gotham/batman?hobby=catching the bad guys.`;
      const registerResponse = await fetch(registerURL, {
        credentials: "include"
      });
      const batmanRegisteredMessage = await registerResponse.json();
      console.log(batmanRegisteredMessage);

      const registeredResponse = await fetch(`${BASE_URL}/gotham`, {
        credentials: "include"
      });
      const registeredResponseMessage = await registeredResponse.json();
      console.log(registeredResponseMessage);
    });

    const piblings = ["John", "Mark"];
    const niblings = [
      {
        id: 1,
        name: "Ann",
        isGirl: true,
        money: 0,
        cookies: []
      },
      {
        id: 2,
        name: "Amelie",
        isGirl: true,
        blackSheep: "medium-black-sheep",
        money: 0,
        cookies: []
      },
      {
        id: 3,
        name: "Peter",
        blackSheep: "ultra-black-sheep",
        money: 0,
        cookies: []
      }
    ];
</script>

<!-- This is shown in the browser because it says <slot> in the Home.svelte-->
  <!-- Home component is not self-closing because we wanted to inject children in it (h3)-->
<Home>
  <h3>This is the home of the Svelte Family</h3>
  <Pibling name={piblings[0]} niblings={niblings}/>
  <Pibling name={piblings[1]} niblings={niblings}/>
</Home>