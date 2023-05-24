<script>
import CallToAction from "../components/Home/CallToAction.vue";
import About from "../components/Home/About.vue";
import WhyUs from "../components/Home/WhyUs.vue";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer.vue";

export default {
  name: "Home-page",
  components: {
    CallToAction,
    About,
    WhyUs,
    NavBar,
    Footer,
  },
  data() {
    return {
      video: require("../assets/videos/video.mp4"),
      video_cover: require("../assets/images/video_cover.jpg"),
      img_2: require("../assets/images/rectangle_2.png"),
      logo: require("../assets/logo_white.png"),
      call_link: "https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting",
      sv_flag: require("../assets/icons/sweden.jpg"),
      en_flag: require("../assets/icons/usa.jpg"),
      english_status: false,
    };
  },
  methods: {
    change() {
      // Getting the current language, 0 represent swedish and 1 english
      let opt = this.$store.getters.getCurrentOpt;

      if (opt == 0) {
        this.english_status = false;
      } else {
        this.english_status = true;
      }
    },
  },
};
</script>

<template>
  <div>
    <NavBar
      :logo_path="logo"
      :call_link="call_link"
      :sv_flag="sv_flag"
      :en_flag="en_flag"
      @changeLang="change"
    />
    <div class="header-section">
      <CallToAction :call_link="call_link" :en="english_status" />
    </div>
    <About :call_link="call_link" :en="english_status" />
    <WhyUs
      :path="video"
      :video_cover="video_cover"
      :call_link="call_link"
      :en="english_status"
    />
    <Footer :en="english_status" />
  </div>
</template>

<style>
.content {
  text-align: left;
}
</style>
