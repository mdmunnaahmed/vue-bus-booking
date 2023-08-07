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
          v-for="(post, index) in posts"
          :key="index"
        >
          <div class="post-item">
            <div class="post-thumb">
              <img :src="require(`@/assets/blog/${post.thumb}`)" alt="blog" />
            </div>
            <div class="post-content">
              <span class="date"
                ><i class="las la-calendar-check"></i> {{ post.date }}</span
              >
              <h4 class="title">
                <a href="blog-details.html">{{ post.title }}</a>
              </h4>
              <p>
                {{ post.pera }}
              </p>
              <ul class="post-meta">
                <li>
                  <div>
                    <i class="las la-comments"></i>
                    {{ post.comments }}
                  </div>
                  <div>
                    <i class="las la-eye"></i>
                    {{ post.seen }}
                  </div>
                </li>
                <li>
                  <a href="#0"><i class="las la-share"></i>Share</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Section Ends Here -->
</template>


<script>
import SectionHeader from './SectionHeader.vue';
export default {
  components: {
    SectionHeader,
  },

  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    section() {
      return this.$store.getters["posts/section"];
    },
  },
};
</script>


<style scoped>
.post-item:hover .post-thumb img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.post-item:hover .post-meta {
  border-top-color: rgba(14, 158, 77, 0.3);
}

.post-thumb {
  overflow: hidden;
}

.post-thumb img {
  width: 100%;
}

.post-content {
  padding: 25px 20px;
  -webkit-box-shadow: 0 0 10px 1px rgba(27, 39, 61, 0.1);
  box-shadow: 0 0 10px 1px rgba(27, 39, 61, 0.1);
  border-radius: 0 0 5px 5px;
}

.post-content .date {
  margin-bottom: 10px;
  font-size: 14px;
}

.post-content .date i {
  font-size: 16px;
  color: #0e9e4d;
  margin-right: 4px;
}

.post-content .title {
  margin-bottom: 10px;
}

.post-content .title a {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.post-content p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
}

.post-content .post-meta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top: 1px solid rgba(27, 39, 61, 0.1);
  margin-top: 15px;
  padding-top: 5px;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.post-content .post-meta li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.post-content .post-meta li div {
  margin-right: 25px;
}

.post-content .post-meta li i {
  margin-right: 5px;
  color: #0e9e4d;
}
</style>