<script>
export default {
  name: "About-page",
  props: {
    call_link: String,
  },
};
</script>

<template>
  <div class="about-section" id="about">
    <div class="container">
      <div class="sub-header">
        <h2>Varför oss?!</h2>
        <p>Vi hjälper dig skala upp din verksamhet till nya höjder.</p>
      </div>

      <div class="about-boxes">
        <div class="box">
          <div class="icon">
            <img src="../../assets/icons/Chatbot.png" alt="chattbot" />
          </div>
          <h3>innovativa lösning</h3>
          <p>
            Våran lösning hjälper dig öka din försäljning och din nätbutiks
            genomsnittliga beställningsorder.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <img src="../../assets/icons/Mobile_payment.png" alt="chattbot" />
          </div>
          <h3>Flexibla priser</h3>
          <p>Våra priser är flexibla och anpassade just för dig!</p>
        </div>
        <div class="box">
          <div class="icon">
            <img src="../../assets/icons/Multiple_devices.png" alt="chattbot" />
          </div>
          <h3>Resultatorienterad</h3>
          <p>
            Vår fokus ligger på att leverera resultat. Genom noggrann analys och
            optimering ser vi till att våra lösningar ger mätbara förbättringar
            i din försäljningsprestation.
          </p>
        </div>
      </div>
      <a :href="call_link" class="btn" target="_blank">Booka ett samtal nu!</a>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--background-color);
}

.sub-header {
  text-align: center;
}

.sub-header h2 {
  color: var(--headers-color);
  font-size: 3rem;
}

.about-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 5rem;
}

.about-boxes .box {
  text-align: center;
}

.about-boxes .box .icon {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-boxes .box .icon img {
  width: 50px;
}

.about-boxes .box:nth-child(1) .icon {
  background-color: rgb(244, 207, 49, 0.4);
}
.about-boxes .box:nth-child(2) .icon {
  background-color: rgb(3, 218, 50, 0.4);
}
.about-boxes .box:nth-child(3) .icon {
  background-color: rgb(244, 96, 49, 0.4);
}

.about-boxes .box h3 {
  color: var(--headers-color);
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.btn {
  margin: 4rem auto;
  border-radius: 50px;
  padding: 1rem 6rem;
}

@media (max-width: 768px) {
  .about-boxes {
    display: flex;
    flex-direction: column;
  }
}
</style>
