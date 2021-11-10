<script>
  export let count;
  import { counter } from "../../declarations/counter";
  document.getElementById("clickMeBtn").addEventListener("click", async () => {
    count = await counter.read();
    // document.getElementById("greeting").innerText = greeting;
  });

  export const reset = document.getElementById("name").value.toString();
</script>

<p>Current count is {count}</p>
<h3>Reset count is {reset}</h3>
