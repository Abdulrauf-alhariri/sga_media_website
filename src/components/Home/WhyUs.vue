<script>
export default {
  name: "WhyUs",
  props: {
    path: String,
    className: String,
    bcColor: String,
    video_cover: String,
    call_link: String,
    en: Boolean,
  },
  data() {
    return {
      play_video: false,
    };
  },
  methods: {
    play() {
      this.play_video = !this.play_video;
    },
  },
};
</script>

<template>
  <div class="our-work-section" :style="bcColor">
    <div class="container" :class="className">
      <div class="video-container">
        <div v-if="!play_video" class="video-cover">
          <fa id="icon" icon="fa-solid fa-play" @click="play" />
          <img class="cover" :src="video_cover" alt="" />
        </div>
        <iframe
          v-if="play_video"
          class="video"
          frameborder="0"
          :src="path"
          allow="autoplay"
        ></iframe>
      </div>

      <div v-if="!en" class="content sv">
        <h3>Vem är vi?</h3>
        <p>
          Vi är experter inom onlineförsäljning och erbjuder skräddarsydda
          lösningar för att maximera din framgång på nätet. Med vår expertis och
          dedikation hjälper vi dig att nå dina försäljningsmål och växa online
        </p>
        <a :href="call_link" class="btn" target="_blank" :class="bcColor"
          >Boka ett samtal nu!</a
        >
      </div>
      <div v-if="en" class="content en">
        <h3>Who are we?</h3>
        <p>
          We are experts in online sales and offer tailored solutions to
          maximize your success on the internet. With our expertise and
          dedication, we help you achieve your sales goals and grow online.
        </p>
        <a :href="call_link" class="btn" target="_blank" :class="bcColor"
          >Book a meeting now!</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-work-section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
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

.video-container {
  width: 100%;
  margin: 4rem;
  flex-basis: 50%;
  height: 278px;
}
.video-container .video {
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.video-cover {
  position: relative;
}

.video-cover #icon {
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  top: 50%;
  font-size: 4rem;
  color: white;
  opacity: 0.75;
  cursor: pointer;
}
.cover {
  width: 100%;
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
