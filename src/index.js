import { createApp } from "vue";
import Home from "@/Home.vue";
import "../sass/style.scss";

function component() {
  const element = document.createElement("div");
  element.id = "app";

  return element;
}

document.body.appendChild(component());

const app = createApp(Home);
app.config.devtools = true;
app.mount("#app");
