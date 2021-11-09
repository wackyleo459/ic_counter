<script>
  import { counter } from "../../declarations/counter";
  document.getElementById("clickMeBtn").addEventListener("click", async () => {
    let name = document.getElementById("name").value.toString();
    console.log(name);
    const greeting = await counter.read();
    document.getElementById("greeting").innerText = greeting;
  });
  export const count = 2;
  export let greeting = async () => {
    await counter.read();
  };
</script>

<p>{greeting().resolve()}</p>
<h3>Reset count is {count}</h3>
