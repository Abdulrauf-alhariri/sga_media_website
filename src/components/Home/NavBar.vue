<script>
export default {
  name: "NavBar",
  props: {
    logo_path: String,
    call_link: String,
  },

  data() {
    // Creating some global variables for the header component
    return {
      toggleNav: false,
    };
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
              <router-link to="/">Hem</router-link>
            </li>
            <li>
              <router-link to="/blogs">Blogg</router-link>
            </li>
            <li><a href="#about">Om oss</a></li>
            <li>
              <a href="#footer">Kontakta oss</a>
            </li>
            <li>
              <a :href="call_link" id="sign-up" target="_blank"
                >Boka ett samtal</a
              >
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
  min-height: 9rem;
  position: relative;
  width: 100%;
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
nav a {
  display: block;
  padding: 1rem 2rem;
  color: var(--headers-color);
  font-size: 1.8rem;
  font-weight: normal;
}

nav a#sign-up {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
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

@media (max-width: 1200px) {
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
</style>
