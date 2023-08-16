<template>
  <inner-banner
    v-for="(blog, index) in blogPage"
    :key="index"
    :title="blog.title"
    :slug="blog.slug"
    :bg="blog.bg"
  ></inner-banner>
  <!-- Blog Section Starts Here -->
  <section class="blog-section padding-bottom padding-top">
    <div class="container">
      <div class="row g-4">
        <div
          class="col-lg-4 col-md-6 col-sm-10"
          v-for="(post, index) in paginatedItems"
          :key="index"
        >
          <blog-item
            :thumb="post.thumb"
            :id="post.id"
            :title="post.title"
            :date="post.date"
            :comments="post.comments"
            :seen="post.seen"
          ></blog-item>
        </div>
      </div>
      <div class="text-center mt-5" v-show="currentPage !== totalPages">
        <button
          class="btn py-2 h-auto px-5 w-auto btn-secondary"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Load More
        </button>
      </div>
    </div>
  </section>
  <!-- Blog Section Ends Here -->
</template>

<script>
import InnerBanner from "@/components/layout/InnerBanner.vue";
import BlogItem from "@/components/layout/BlogItem.vue";
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 12,
    };
  },
  components: {
    BlogItem,
    InnerBanner,
  },

  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    blogTitle() {
      return this.selectedBlog.title;
    },
    totalItems() {
      return this.posts.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.posts.slice(0, endIndex);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
