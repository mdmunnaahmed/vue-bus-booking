<!-- components/BlogDetails.vue -->
<template>
  <div v-for="(post, index) in posts" :key="index">
    <h2>{{ post.title }}</h2>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>
export default {
  props: ["thumb", "title", "date", "pera", "comments", "seen",],
  data() {
    return {
      selectedBlog: null,
      id: '',
    };
  },
  computed: {
    // posts() {
    //   const posts = this.$store.getters["posts/posts"];
    // },
  },
  created() {
    this.selectedBlog = this.$store.getters["posts/posts"].find(
      (post) => post.id === this.id
    );
  },
};
</script>


<style scoped>
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