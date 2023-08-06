import { createStore } from "vuex";
import bannerModule from "./modules/banner/index.js";
import processModule from "./modules/working-process/index.js";

const store = createStore({
  modules: {
    banner: bannerModule,
    process: processModule,
  },
});

export default store;
