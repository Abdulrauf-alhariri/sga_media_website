<script>
import CallToAction from "../components/Home/CallToAction.vue";
import About from "../components/Home/About.vue";
import WhyUs from "../components/Home/WhyUs.vue";

export default {
  name: "Home-page",
  components: {
    CallToAction,
    About,
    WhyUs,
  },
  data() {
    return {
      video: require("../assets/videos/video.mp4"),
      video_cover: require("../assets/images/video_cover.jpg"),
      img_2: require("../assets/images/rectangle_2.png"),
      logo: require("../assets/logo_white.png"),
      call_link: "https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting",
    };
  },
};
</script>

<template>
  <div>
    <div class="header-section">
      <CallToAction :call_link="call_link" />
    </div>
    <About :call_link="call_link" />
    <WhyUs
      title="Vem är vi?"
      text="Vi är experter inom onlineförsäljning och erbjuder skräddarsydda lösningar för att maximera din framgång på nätet. Med vår expertis och dedikation hjälper vi dig att nå dina försäljningsmål och växa online"
      :path="video"
      :video_cover="video_cover"
      :call_link="call_link"
    />
  </div>
</template>

<style>
.content {
  text-align: left;
}
</style>
