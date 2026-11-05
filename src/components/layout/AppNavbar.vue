<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const isHeaderHidden = ref(false);
const isScrolled = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrolled.value = currentScrollY > 60;

  if (
    currentScrollY > lastScrollY &&
    currentScrollY > 120 &&
    !isMenuOpen.value
  ) {
    isHeaderHidden.value = true;
  } else {
    isHeaderHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() =>
  window.addEventListener("scroll", handleScroll, { passive: true }),
);
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <header
    class="navbar"
    :class="{
      'navbar--hidden': isHeaderHidden,
      'navbar--scrolled': isScrolled,
    }"
  >
    <div class="navbar-inner">
      <!-- SpaceX SVG Logo or your /assets/logo.png -->
      <a href="#" class="logo" aria-label="SpaceX Home"> SPACEX </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Hamburger Button -->
      <button
        class="hamburger"
        :class="{ 'is-active': isMenuOpen }"
        aria-label="Toggle Menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Backdrop & Side Drawer -->
    <div
      class="drawer-backdrop"
      :class="{ 'is-open': isMenuOpen }"
      @click="isMenuOpen = false"
    ></div>

    <aside class="side-drawer" :class="{ 'is-open': isMenuOpen }">
      <ul class="drawer-list">
        <li
          v-for="link in links"
          :key="link.label"
          class="drawer-item mobile-only"
        >
          <a :href="link.href" @click="isMenuOpen = false">{{ link.label }}</a>
        </li>
        <li class="drawer-item">
          <a href="#mission" @click="isMenuOpen = false">Mission</a>
        </li>
        <li class="drawer-item">
          <a href="#launches" @click="isMenuOpen = false">Launches</a>
        </li>
        <li class="drawer-item">
          <a href="#careers" @click="isMenuOpen = false">Careers</a>
        </li>
        <li class="drawer-item">
          <a href="#updates" @click="isMenuOpen = false">Updates</a>
        </li>
      </ul>
    </aside>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 100;
  transition:
    transform 0.35s ease,
    background-color 0.35s ease;
}

.navbar--scrolled {
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
}

.navbar--hidden {
  transform: translateY(-100%);
}

.navbar-inner {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.35em;
  text-decoration: none;
}

.nav-desktop {
  display: flex;
  gap: 28px;
}

.nav-link {
  position: relative;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding-bottom: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hamburger {
  position: relative;
  z-index: 110;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.drawer-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.side-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background-color: #000000;
  padding: 90px 40px;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 105;
}

.side-drawer.is-open {
  transform: translateX(0);
}

.drawer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.drawer-item a {
  display: block;
  padding: 16px 0;
  color: #ffffff;
  text-decoration: none;
  text-align: right;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  transition: color 0.2s ease;
}

.drawer-item a:hover {
  color: #999999;
}

.mobile-only {
  display: none;
}

@media (max-width: 960px) {
  .nav-desktop {
    display: none;
  }
  .mobile-only {
    display: block;
  }
}
</style>
