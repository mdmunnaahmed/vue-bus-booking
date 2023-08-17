<template>
  <!-- Blog Section Starts Here -->
  <section class="blog-section padding-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <section-header
            class="text-center"
            v-for="sec in section"
            :key="sec.title"
            :title="sec.title"
            :pera="sec.pera"
          ></section-header>
        </div>
      </div>
      <div class="row justify-content-center g-4">
        <div
          class="col-lg-4 col-md-6 col-sm-10"
          v-for="(post, index) in paginatedItems"
          :key="index"
        >
          <blog-item
            :postLink="'blog/' + post.id"
            :thumb="post.thumb"
            :title="post.title"
            :pera="post.pera"
            :date="post.date"
            :comments="post.comments"
            :seen="post.seen"
          ></blog-item>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Section Ends Here -->
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import BlogItem from "./BlogItem.vue";
export default {
  data() {
    return {
      itemsPerPage: 3, // Set the number of items per page
      currentPage: 1,
    };
  },
  components: {
    SectionHeader,
    BlogItem,
  },

  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    section() {
      return this.$store.getters["posts/section"];
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
  },
};
</script>
