<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const isHeaderHidden = ref(false);
const isScrolled = ref(false);
const activeHash = ref("#starship");
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrolled.value = currentScrollY > 60;

  if (
    currentScrollY > lastScrollY &&
    currentScrollY > 140 &&
    !isMenuOpen.value
  ) {
    isHeaderHidden.value = true;
  } else {
    isHeaderHidden.value = false;
  }
  lastScrollY = currentScrollY;

  for (const link of props.links) {
    const el = document.querySelector(link.href);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 260 && rect.bottom >= 260) {
        activeHash.value = link.href;
        break;
      }
    }
  }
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
      <!-- Authentic SpaceX Vector SVG Logo -->
      <a
        href="#starship"
        class="logo-link"
        aria-label="SpaceX Home"
        @click="activeHash = '#starship'"
      >
        <svg
          class="spacex-svg"
          viewBox="0 0 400 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.5 32.6H9.8V28.4H33.5C36.8 28.4 38.6 26.8 38.6 23.8V16.8C38.6 13.8 36.8 12.2 33.5 12.2H4.2V16.4H31.8V20.4H8.2C4.9 20.4 3.1 22 3.1 25V32C3.1 35 4.9 36.8 8.2 36.8H37.5V32.6Z"
            fill="white"
          />
          <path
            d="M56.4 12.2V36.8H63.2V27.6H84.7C88.2 27.6 90.1 25.9 90.1 22.8V17C90.1 13.9 88.2 12.2 84.7 12.2H56.4ZM83.3 23.4H63.2V16.4H83.3V23.4Z"
            fill="white"
          />
          <path
            d="M119.5 12.2L101.4 36.8H109.2L113.3 31H131.6L135.7 36.8H143.6L125.5 12.2H119.5ZM116.3 26.8L122.5 18L128.6 26.8H116.3Z"
            fill="white"
          />
          <path
            d="M166.4 16.4H194.2V12.2H164.5C160.7 12.2 158.8 14.1 158.8 17.4V31.6C158.8 34.9 160.7 36.8 164.5 36.8H194.2V32.6H166.4V16.4Z"
            fill="white"
          />
          <path
            d="M212.5 12.2V36.8H247.3V32.6H219.3V26.4H243.4V22.2H219.3V16.4H247.3V12.2H212.5Z"
            fill="white"
          />
          <path
            d="M266.2 12.2L284.4 25.1L290.1 21.1L274.9 12.2H266.2Z"
            fill="white"
          />
          <path
            d="M294.5 27.6L288.7 31.6L296.2 36.8H305.1L294.5 27.6Z"
            fill="white"
          />
          <path
            d="M265.4 36.8H275.6C305.4 18.2 346.8 7.5 396.5 4.2C342.4 4.8 297.2 16.4 265.4 36.8Z"
            fill="white"
          />
        </svg>
      </a>

      <!-- Center Desktop Links matching spacex.com -->
      <nav class="nav-desktop">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="nav-link"
          :class="{ 'is-active': activeHash === link.href }"
          @click="activeHash = link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Actions: Gallery Link + Hamburger -->
      <div class="nav-right">
        <a href="#fleet-gallery" class="nav-link gallery-pill">GALLERY</a>
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
    </div>

    <!-- Backdrop & Side Drawer -->
    <div
      class="drawer-backdrop"
      :class="{ 'is-open': isMenuOpen }"
      @click="isMenuOpen = false"
    ></div>

    <aside class="side-drawer" :class="{ 'is-open': isMenuOpen }">
      <ul class="drawer-list">
        <li v-for="link in links" :key="link.label" class="drawer-item">
          <a
            :href="link.href"
            @click="
              isMenuOpen = false;
              activeHash = link.href;
            "
          >
            {{ link.label }}
          </a>
        </li>
        <li class="drawer-item">
          <a href="#fleet-gallery" @click="isMenuOpen = false">Fleet Gallery</a>
        </li>
        <li class="drawer-item">
          <a href="#telemetry" @click="isMenuOpen = false">Launch Telemetry</a>
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
  height: 96px;
  z-index: 100;
  transition:
    transform 0.35s ease,
    background-color 0.35s ease;
}

.navbar--scrolled {
  background-color: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar--hidden {
  transform: translateY(-100%);
}

.navbar-inner {
  max-width: 1460px;
  height: 100%;
  margin: 0 auto;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.spacex-svg {
  width: 205px;
  height: auto;
  transition: opacity 0.25s ease;
}

.logo-link:hover .spacex-svg {
  opacity: 0.85;
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-link {
  position: relative;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-bottom: 5px;
  white-space: nowrap;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-link:hover::after,
.nav-link.is-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hamburger {
  position: relative;
  z-index: 110;
  width: 22px;
  height: 15px;
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
  transform: translateY(6.5px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
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
  width: 340px;
  height: 100vh;
  background-color: #000000;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding: 100px 40px;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 105;
  overflow-y: auto;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.drawer-item a {
  display: block;
  padding: 15px 0;
  color: #ffffff;
  text-decoration: none;
  text-align: right;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.drawer-item a:hover {
  color: #a0a0a0;
  transform: translateX(-4px);
}

@media (max-width: 1180px) {
  .nav-desktop,
  .gallery-pill {
    display: none;
  }
}
</style>
