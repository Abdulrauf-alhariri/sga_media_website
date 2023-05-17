<script>
export default {
  name: "CallToAction",
  props: {
    call_link: String,
  },
};
</script>

<template>
  <div class="container cta-container">
    <div class="content">
      <h1>
        Vi hjälper e-commerce att producera bättre ROAI via betald annonsering
      </h1>
      <p>
        Sluta slösa tid och pengar på felaktiga och ineffektiva annonskampanjer.
        Det är dags att spåra din annonsbudget, skala din verksamhet och öka din
        försäljning
      </p>
      <a
        href="https://calendly.com/abdullrauf-alhariri-yjc/45-min-meeting"
        class="btn"
        target="_blank"
        >Boka ett samtal nu!</a
      >
    </div>
    <img src="../../assets/images/e-commerce-isometric.png" alt="" />
  </div>
</template>

<style scoped>
.cta-container {
  display: flex;
  align-items: center;
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.cta-container .content {
  text-align: center;
}
.content h1 {
  color: var(--headers-color);
  font-size: 3.5rem;
}

.content .btn {
  border-radius: 5rem;
  padding: 1.5rem 8rem;
  margin: 4.5rem auto;
}

img {
  height: 70vh;
  display: none;
}

@media (min-width: 992px) {
  .cta-container .content {
    text-align: left;
  }

  .content .btn {
    margin: 4.5rem 0;
  }
  img {
    display: inline-block;
  }
}
</style>
