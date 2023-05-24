<script>
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Home/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      logo: require("./assets/logo_white.png"),
      call_link: "https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting",
      sv_flag: require("./assets/icons/sweden.jpg"),
      en_flag: require("./assets/icons/usa.jpg"),
    };
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
    />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
