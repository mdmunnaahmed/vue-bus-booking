import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import router from "./router.js";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseModal from "./components/ui/BaseModal.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-dialog", BaseDialog);
app.component("base-modal", BaseModal);
app.component("base-spinner", BaseSpinner);

app.mount("#app");
