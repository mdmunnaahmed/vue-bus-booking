<!-- components/BlogDetails.vue -->
<template>
  <!-- Blog Details Section Starts Here -->
  <section class="blog-details padding-top padding-bottom">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-8">
          <div class="post-thumb mb-4">
            <img :src="require(`@/assets/blog/${thumb}`)" alt="thumb">
          </div>
          <div class="post-details-content">
            <div class="content-inner">
              <ul class="meta-post mb-2 gap-4">
                <li>
                  <i class="las la-calendar-check"></i>
                  <span>{{ date }}</span>
                </li>
                <li>
                  <div>
                    <i class="las la-comments"></i>
                    {{ comments }} Comments
                  </div>
                </li>
                <li>
                  <div>
                    <i class="las la-eye"></i>
                    {{ seen }}
                  </div>
                </li>
                <li>
                  <i class="las la-tags"></i>
                  <span><a href="#0">Travel</a></span>
                </li>
              </ul>
              <h3 class="title mb-2 mt-2">{{ detailsTitle }}</h3>
              <p class="blog-details-pera">
                {{ detailsPera }}
              </p>
              <ul class="info mt-4">
                <li><i class="las la-check me-1 text--base"></i> Some people do not understand why you should have to</li>
                <li><i class="las la-check me-1 text--base"></i> tempora repellendus explicabo voluptate labore minus?
                </li>
                <li><i class="las la-check me-1 text--base"></i> A consectetur adipisicing elit. Debitis quidem,</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="blog-sidebar">
            <div class="sidebar-item">
              <div class="latest-post-wrapper item-inner">
                <h5 class="title mb-5">Latest Post</h5>
                <div class="lastest-post-item" v-for="(random, index) in randomItems" :key="index">
                  <div class="thumb">
                    <img :src="require(`@/assets/blog/${random.thumb}`)" alt="blog">
                  </div>
                  <div class="content">
                    <h6 class="title" @click="updateBlog"><router-link :to="random.id">{{ random.title }}
                      </router-link></h6>
                    <ul class="meta-post">
                      <li>
                        <span>Post by</span> Admin
                      </li>
                      <li>
                        <span>{{ random.date }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Details Section Ends Here -->
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedBlog: null,
    };
  },
  computed: {
    thumb() {
      return this.selectedBlog.thumb
    },
    detailsTitle() {
      return this.selectedBlog.title
    },
    detailsPera() {
      return this.selectedBlog.pera
    },
    seen() {
      return this.selectedBlog.seen
    },
    comments() {
      return this.selectedBlog.comments
    },
    date() {
      return this.selectedBlog.date
    },
    blogDetailsLink() {
      return this.$route.path + '/' + this.id
    },

    randomItems() {
      const allItems = Object.values(this.$store.getters["posts/posts"]);
      const randomSubset = [];

      while (randomSubset.length < 4 && allItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * allItems.length);
        randomSubset.push(allItems.splice(randomIndex, 1)[0]);
      }

      return randomSubset;
    },

  },
  methods: {
    updateBlog() {
      this.selectedBlog = this.$store.getters["posts/posts"].find(
        (post) => post.id === this.id
      )
    }
  },

  created() {
    this.selectedBlog = this.$store.getters["posts/posts"].find(
      (post) => post.id === this.id
    );
  },
};
</script>


<style scoped>
.info {
  gap: 5px;
}

.info li {
  padding: 0;
}

.meta-post {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  border-top: 1px solid rgba(27, 39, 61, 0.1);
  margin-top: 15px;
  padding-top: 5px;
  -webkit-transition: all ease .3s;
  transition: all ease .3s;
}

.meta-post li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.meta-post li i {
  margin-right: 5px;
  color: #0e9e4d;
}

.blog-details {
  overflow: initial !important;
}

.blog-sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  padding-left: 10px;
}

@media (max-width: 991px) {
  .blog-sidebar {
    padding-left: 0;
  }
}

.blog-sidebar .sidebar-item {
  background: rgba(27, 39, 61, 0.05);
}

.blog-sidebar .sidebar-item:last-child {
  margin-bottom: 0;
}

.blog-sidebar .sidebar-item .search-bar {
  margin-bottom: 20px;
  position: relative;
}

@media (max-width: 575px) {
  .blog-sidebar .sidebar-item .search-bar {
    margin-bottom: 5px;
  }
}

.blog-sidebar .sidebar-item .search-bar .form--control {
  padding-right: 60px;
}

.blog-sidebar .sidebar-item .search-bar .search-button {
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
  height: 100%;
  padding: 10px 20px;
  font-size: 22px;
  background: #0e9e4d;
  color: #fff;
}

.blog-sidebar .sidebar-item .item-inner {
  padding: 23px 0;
  background: #fff;
}

.blog-sidebar .sidebar-item .item-inner .title {
  margin-bottom: 15px;
}

.blog-sidebar .sidebar-item .lastest-post-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ebebeb;
}

.blog-sidebar .sidebar-item .lastest-post-item:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border: 0;
}

.blog-sidebar .sidebar-item .lastest-post-item .thumb {
  width: 80px;
  height: 80px;
}

@media (max-width: 575px) {
  .blog-sidebar .sidebar-item .lastest-post-item .thumb {
    width: 60px;
    height: 60px;
  }
}

.blog-sidebar .sidebar-item .lastest-post-item .thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.blog-sidebar .sidebar-item .lastest-post-item .content {
  width: calc(100% - 80px);
  padding-left: 15px;
}

.blog-sidebar .sidebar-item .lastest-post-item .content .title {
  font-size: 16px !important;
}

@media (max-width: 575px) {
  .blog-sidebar .sidebar-item .lastest-post-item .content .title {
    margin-bottom: 5px;
  }
}

.blog-sidebar .sidebar-item .lastest-post-item .content .title a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.blog-sidebar .sidebar-item .lastest-post-item .content .meta-post {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 5px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.blog-sidebar .sidebar-item .lastest-post-item .content .meta-post li {
  padding: 1px 0;
  font-size: 13px;
  font-style: italic;
}

.blog-sidebar .sidebar-item .category-wrapper ul .category-item {
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
}

.blog-sidebar .sidebar-item .category-wrapper ul .category-item:last-child {
  border: 0;
}

.blog-sidebar .sidebar-item .category-wrapper ul .category-item a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-weight: 500;
}

.blog-sidebar .sidebar-item .archives {
  padding-bottom: 80px;
}

.blog-sidebar .sidebar-item .news-tags .tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.blog-sidebar .sidebar-item .news-tags .tag-item {
  width: auto;
  padding: 4px;
}

.blog-sidebar .sidebar-item .news-tags .tag-item a {
  padding: 5px 13px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
}

.blog-sidebar .sidebar-item .news-tags .tag-item a:hover {
  border-color: #0e9e4d;
}

.pagination {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 50px;
}

@media (max-width: 991px) {
  .pagination {
    margin-top: 40px;
  }
}

.pagination li a {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(31, 31, 31, 0.12);
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 5px;
  font-weight: 500;
}

.pagination li a.active,
.pagination li a:hover {
  background: #0e9e4d;
  border-color: #0e9e4d;
  color: #fff;
}
</style>