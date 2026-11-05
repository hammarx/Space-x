<script setup>
import AppNavbar from "./components/layout/AppNavbar.vue";
import MissionSection from "./components/sections/MissionSection.vue";
import FleetGallery from "./components/sections/FleetGallery.vue";
import StatsCounter from "./components/sections/StatsCounter.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import {
  navLinks,
  missions,
  galleryItems,
  telemetryStats,
} from "./data/missions";
</script>

<template>
  <div class="app-wrapper">
    <AppNavbar :links="navLinks" />

    <main>
      <MissionSection
        v-for="(mission, index) in missions"
        :key="mission.id"
        :mission="mission"
        :show-scroll-arrow="index < missions.length - 1"
      />

      <div id="telemetry">
        <StatsCounter :stats="telemetryStats" />
      </div>

      <FleetGallery :items="galleryItems" />
    </main>

    <AppFooter />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  background-color: #000000;
  color: #ffffff;
  font-family:
    "D-DIN",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
</style>
