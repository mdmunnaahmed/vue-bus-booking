import { createStore } from "vuex";
import bannerModule from "./modules/banner/index.js";
import processModule from "./modules/working-process/index.js";
import routeModule from "./modules/route/index.js";
import aminitiesModule from "./modules/aminities/index.js";
import packagesModule from "./modules/packages/index.js";
import postsModule from "./modules/posts/index.js";
import footerModule from "./modules/footer/index.js";
import aboutModule from "./modules/about/index.js";
import faqsModule from "./modules/faq/index.js";
import contactModule from "./modules/contact/index.js";
import ticketModule from './modules/ticket/index.js'
import reserveModule from "./modules/reserve/index.js";
import authModule from './modules/auth/index.js'

const store = createStore({
  modules: {
    banner: bannerModule,
    process: processModule,
    route: routeModule,
    aminities: aminitiesModule,
    packages: packagesModule,
    posts: postsModule,
    footer: footerModule,
    about: aboutModule,
    faqs: faqsModule,
    contact: contactModule,
    ticket: ticketModule,
    reserve: reserveModule,
    auth: authModule
  },
});

export default store;
