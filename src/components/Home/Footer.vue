<script>
export default {
  name: "Footer-page",
  props: {
    en: Boolean,
  },
};
</script>

<template>
  <div class="footer" id="footer">
    <div class="container">
      <div class="info-container">
        <h3 v-if="!en">Kontakt</h3>
        <h3 v-if="en">Contact</h3>
        <ul>
          <li>073-8973571</li>
          <li>
            <a href="mailto:abdullrauf.alhariri@sgamedia.se"
              >abdullrauf.alhariri@sgamedia.se</a
            >
          </li>
          <li>
            <ul class="social-media">
              <li>
                <a href="https://www.instagram.com/_sgamedia/"
                  ><fa class="icon" icon="fa-brands fa-instagram"
                /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/SGA-Media-110774208686614"
                  ><fa class="icon" icon="fa-brands fa-facebook"
                /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="copy-right">
      <p>&copy; SGA MEDIA AB 2023</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding-top: var(--section-padding);

  background-color: var(--primary-color);
  text-align: left;
}

.container {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  color: white;
  margin-bottom: 5rem;
}

h3 {
  margin-bottom: 1.5rem;
}
a {
  color: white;
}

li {
  margin-bottom: 1rem;
}

.social-media {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.social-media .icon {
  font-size: 2rem;
}
.copy-right {
  background: var(--secondary-color);
  text-align: center;
  padding: 1rem 0;
}

.copy-right p {
  color: white;
}
</style>
