<script>
import Paragraph from "../components/Blog/Paragraph.vue";
import NavBar from "../components/Home/NavBar.vue";
import Footer from "../components/Home/Footer.vue";
export default {
  name: "Blog-page",
  components: {
    Paragraph,
    NavBar,
    Footer,
  },
  data() {
    let blog_content = this.$route.query;
    let en_status = this.$store.getters.getEnglishStatus;

    console.log(blog_content.paragraphs);
    return {
      caption: en_status ? blog_content.caption[1] : blog_content.caption[0],
      author_info: blog_content.author_info,
      intro: en_status ? blog_content.intro[1] : blog_content.intro[0],
      paragraphs_en: blog_content.paragraphs_en,
      paragraphs_sv: blog_content.paragraphs_sv,
      img_path: blog_content.img_path,
      sv_flag: require("../assets/icons/sweden.jpg"),
      en_flag: require("../assets/icons/usa.jpg"),
      call_link: "https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting",
      english_status: en_status,
    };
  },
  methods: {
    change() {
      // Getting the current language, 0 represent swedish and 1 english
      let status = this.$store.getters.getEnglishStatus;
      this.english_status = status;
      let blog_content = this.$route.query;

      if (this.english_status) {
        this.caption = blog_content.caption[1];
        this.intro = blog_content.intro[1];
      } else {
        this.caption = blog_content.caption[0];
        this.intro = blog_content.intro[0];
      }
    },
  },
};
</script>

<template>
  <NavBar
    :sv_flag="sv_flag"
    :en_flag="en_flag"
    :call_link="call_link"
    @changeLang="change"
  />
  <div class="container blog-container">
    <div class="header">
      <div class="image-container">
        <img :src="img_path" alt="article image" class="image" />
      </div>
      <h1>{{ caption }}</h1>
      <p class="info">
        <span>{{ author_info[0] }}</span
        >,
        <span>{{ author_info[1] }}</span>
      </p>
    </div>
    <div class="content">
      <p class="intro">{{ intro }}</p>
      <div v-if="!english_status" class="div">
        <Paragraph v-for="para in paragraphs_sv" :key="para" :content="para" />
      </div>
      <div v-if="english_status" class="div">
        <Paragraph v-for="para in paragraphs_en" :key="para" :content="para" />
      </div>
    </div>
  </div>
  <Footer :en="english_status" />
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
