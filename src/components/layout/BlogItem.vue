<template>
  <div class="post-item">
    <div class="post-thumb">
      <img :src="require(`@/assets/blog/${thumb}`)" alt="blog" />
    </div>
    <div class="post-content">
      <span class="date"><i class="las la-calendar-check"></i> {{ date }}</span>
      <h4 class="title">
        <router-link :to="postLink">{{ title }}</router-link>
      </h4>
      <p>
        {{ pera }}
      </p>
      <ul class="post-meta">
        <li>
          <div>
            <i class="las la-comments"></i>
            {{ comments }}
          </div>
          <div>
            <i class="las la-eye"></i>
            {{ seen }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "thumb",
    "title",
    "date",
    "pera",
    "comments",
    "seen",
    "postLink",
  ],
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
