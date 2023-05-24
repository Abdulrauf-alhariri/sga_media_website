<script>
export default {
  name: "NavBar",
  props: {
    logo_path: String,
    call_link: String,
    sv_flag: String,
    en_flag: String,
  },

  data() {
    // Creating some global variables for the header component
    return {
      toggleNav: false,
      selected: "english",
      hover: false,
      lang: ["EN", "SV"],
      links: ["Hem", "Blogg", "Om oss", "Kontakta oss", "Boka ett samtal"],
    };
  },
  computed: {
    currentLang() {
      let current_option = this.$store.getters.getCurrentOpt;

      let current_lang = this.$store.getters.getCurrentLang;

      if (current_option == 0) {
        return [this.sv_flag, current_lang];
      }

      return [this.en_flag, current_lang];
    },
    secondaryLang() {
      let current_option = this.$store.getters.getCurrentOpt;

      let secondary_lang = this.$store.getters.getSecondaryLang;

      if (current_option == 0) {
        return [this.en_flag, secondary_lang];
      }

      return [this.sv_flag, secondary_lang];
    },
  },
  methods: {
    changeLang() {
      let links_sv = [
        "Hem",
        "Blogg",
        "Om oss",
        "Kontakta oss",
        "Boka ett samtal",
      ];
      let links_en = [
        "Home",
        "Blog",
        "About us",
        "Contact us",
        "Book a meeting",
      ];

      // Changing the current language
      this.$store.commit("changeLang");
      let opt = this.$store.getters.getCurrentOpt;

      if (opt == 0) {
        this.links = links_sv;
      } else {
        this.links = links_en;
      }

      this.$emit("changeLang");
    },
  },
};
</script>

<template>
  <div>
    <header>
      <div class="container">
        <router-link to="/">
          <div class="logo">
            <!-- <div class="logo-container">
              <img :src="logo_path" alt="" />
            </div> -->
            <p><span>SGA</span> Media</p>
          </div>
        </router-link>
        <!-- Toggling class name when clicking on the nav menu -->
        <nav
          :class="{ 'toggle--expanded': toggleNav }"
          @click="toggleNav = !toggleNav"
        >
          <span class="toggle-menu" :class="{ open: toggleNav }"
            ><span></span><span></span><span></span
          ></span>
          <ul class="nav-list">
            <li>
              <router-link to="/">{{ links[0] }}</router-link>
            </li>
            <li>
              <router-link to="/blogs">{{ links[1] }}</router-link>
            </li>
            <li>
              <a href="#about">{{ links[2] }}</a>
            </li>
            <li>
              <a href="#footer">{{ links[3] }}</a>
            </li>
            <li class="lang-menu-container">
              <span class="lang-menu">
                <span class="lang primary"
                  ><img :src="currentLang[0]" alt="" />
                  {{ currentLang[1] }}</span
                >
                <fa class="icon" icon="fa-solid fa-chevron-right" />
                <span class="lang option" @click="changeLang"
                  ><img :src="secondaryLang[0]" alt="" />
                  {{ secondaryLang[1] }}</span
                >
              </span>
            </li>
            <li>
              <a :href="call_link" id="sign-up" target="_blank">{{
                links[4]
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  border: 1px var(--border-color) solid;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 9rem;
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo .logo-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

header .logo img {
  width: 100%;
  height: 100%;
}

header .logo p {
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #2c2c2c;
}

header .logo p span {
  color: var(--primary-color);
}

nav {
  display: flex;
  align-items: center;
}

nav .nav-list {
  display: flex;
  flex-direction: row;
  align-items: center;
}
nav a,
nav .lang.primary {
  display: block;
  padding: 3rem 2rem;
  color: var(--headers-color);
  font-size: 1.8rem;
  font-weight: normal;
}

nav a#sign-up {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
}
nav .toggle-menu {
  display: none;
  width: 3rem;
  cursor: pointer;
}

nav .toggle-menu span {
  width: 100%;
  height: 5px;
  margin-top: 5px;
  background-color: black;
  transition: 0.3s all;
}

nav .toggle-menu.open {
  position: relative;
}
nav .toggle-menu.open span {
  position: absolute;
}

nav .toggle-menu.open span:nth-child(1) {
  transform: rotate(45deg);
  margin: 0;
}
nav .toggle-menu.open span:nth-child(2) {
  display: none;
}
nav .toggle-menu.open span:nth-child(3) {
  transform: rotate(-45deg);
  margin: 0;
}

.lang-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.lang-menu .lang {
  cursor: pointer;
  align-items: center;
}

.lang-menu img {
  width: 10px;
  height: 10px;
}

@media (max-width: 1200px) {
  .lang-menu {
    display: flex;
    flex-direction: row;
  }

  .lang-menu .lang {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .lang-menu .option {
    display: flex;
    background: none;
    width: normal;
    box-shadow: none;
  }
  nav .nav-list {
    display: none;
  }

  .toggle--expanded .nav-list {
    text-align: left;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    align-items: flex-start;
    background-color: white;
    z-index: 2;
  }
  nav .nav-list li {
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }
  nav a#sign-up {
    background-color: white;
    color: var(--primary-color);
  }
  nav .toggle-menu {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1201px) {
  .lang-menu {
    flex-direction: column;
  }

  .lang-menu .icon {
    display: none;
  }

  .lang-menu .option {
    background: white;
    border: 1px solid none;
    box-shadow: 5px 5px 5px #c4c4c4;
    display: none;
    flex-direction: row;
    gap: 10px;
    justify-content: left;
    padding: 5px;
    position: absolute;
    top: 60px;
    width: 100px;
    align-items: center;
  }

  .lang-menu-container:hover .option {
    display: flex;
  }
}
</style>
