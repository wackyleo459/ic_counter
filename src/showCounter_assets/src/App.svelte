<script>
  export let count;
  import { counter } from "../../declarations/counter";
  counter.read().then((r) => ((count = r), (currentCount = r)));
  function incrementCount() {
    counter
      .inc()
      .then((e) => checkCount())
      .catch((err) => console.log(err));
    count++;
  }
  function resetCount() {
    reset = Number(document.getElementById("resetCount").value.toString());
    counter.write(reset).then((e) => checkCount());
    count = reset;
  }
  export let reset;
  export let currentCount;
  let checkCount = () =>
    counter
      .read()
      .then((result) => {
        currentCount = result;
      })
      .catch((err) => console.log(err));
</script>

<section>
  <p id="count">Current count is {currentCount}</p>
  <button on:click|preventDefault={incrementCount}>Increment Count!</button>
  <p>Local state count is {count}</p>
  <label for="name">Start from count: &nbsp;</label>
  <input id="resetCount" alt="count" type="text" />
  <button on:click|preventDefault={resetCount}>reset count</button>
</section>
<section id="greeting" />
