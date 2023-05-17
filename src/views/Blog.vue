<script>
import Paragraph from "../components/Blog/Paragraph.vue";
export default {
  name: "Blog-page",
  components: {
    Paragraph,
  },
  data() {
    let blog_content = this.$route.query;
    return {
      caption: blog_content.caption,
      author_info: blog_content.author_info,
      intro: blog_content.intro,
      paragraphs: blog_content.paragraphs,
      img_path: blog_content.img_path,
    };
  },
};
</script>

<template>
  <div class="container blog-container">
    <div class="header">
      <div class="image-container">
        <img :src="img_path" alt="article image" class="image" />
      </div>
      <h1>{{ caption }}</h1>
      <p class="info">
        Av <span>{{ author_info[0] }}</span
        >, Publicerad
        <span>{{ author_info[1] }}</span>
      </p>
    </div>
    <div class="content">
      <p class="intro">{{ intro }}</p>
      <Paragraph v-for="para in paragraphs" :key="para" :content="para" />
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.header {
  margin-bottom: 4rem;
}

.header .image-container {
  width: 100%;
}

.header .image {
  width: 100%;
  height: 450px;
}

.header h1 {
  color: var(--headers-color);
}

.header .info span {
  font-weight: bold;
}
</style>
