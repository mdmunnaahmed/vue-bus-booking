import { createStore } from "vuex";
import bannerModule from "./modules/banner/index.js";
import processModule from "./modules/working-process/index.js";
import routeModule from './modules/route/index.js'
import aminitiesModule from "./modules/aminities/index.js";
import packagesModule from "./modules/packages/index.js";

const store = createStore({
  modules: {
    banner: bannerModule,
    process: processModule,
    route: routeModule,
    aminities: aminitiesModule,
    packages: packagesModule,
  },
});

export default store;
