<script>
export default {
  name: "Blog-block",
  props: {
    caption: String,
    desc: String,
    img_path: String,
    blog_content_sv: Object,
    blog_content_en: Object,
    btn_text: String,
  },
  data() {
    return {
      s: {
        caption: "hello",
      },
    };
  },
  methods: {
    passParams() {
      this.$router.push({
        name: "Blog",
        query: {
          caption: [this.blog_content_sv.caption, this.blog_content_en.caption],
          author_info: this.blog_content_sv.author_info,
          intro: [this.blog_content_sv.intro, this.blog_content_en.intro],
          paragraphs_sv: this.blog_content_sv.paragraphs,
          paragraphs_en: this.blog_content_en.paragraphs,
          img_path: this.img_path,
        },
      });
    },
  },
};
</script>

<template>
  <div class="blog-block-section" :style="bcColor">
    <div class="container" :class="className">
      <div class="image-container">
        <img class="image" :src="img_path" alt="blogg image" />
      </div>

      <div class="content">
        <h3>{{ caption }}</h3>
        <p>{{ desc }}</p>
        <button class="btn" v-on:click="passParams">{{ btn_text }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-block-section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  box-shadow: 10px 5px 5px rgb(243, 242, 242);
}

.container {
  display: flex;
  align-items: center;
}

.container.revers {
  flex-direction: row-reverse;
}
.content {
  margin: 4rem;
  flex-basis: 50%;
}
.content h3 {
  color: var(--headers-color);
  font-size: 2rem;
  margin-bottom: 1rem;
}
.content p {
  margin-bottom: 2rem;
}

.content a {
  margin: 0 0 0 auto;
  border-radius: 15px;
  padding: 1rem 4rem;
}

.image-container {
  width: 100%;
  margin: 4rem;
  flex-basis: 50%;
  height: 278px;
}
.image-container .image {
  width: 100%;
  overflow: auto;
  height: 100%;
}

@media (max-width: 991px) {
  .container {
    flex-direction: column;
  }

  .container.revers {
    flex-direction: column;
  }
}
</style>
