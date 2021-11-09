import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Mary'
  }
});

export default app;

// import { counter } from "../../declarations/counter";

// document.getElementById("clickMeBtn").addEventListener("click", async () => {
//   const name = document.getElementById("name").value.toString();
//   // Interact with counter actor, calling the greet method
//   const greeting = await counter.read();

//   document.getElementById("greeting").innerText = greeting;
// });