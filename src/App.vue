<!-- src/App.vue -->
<script setup>
import AppNavbar from "./components/layout/AppNavbar.vue";
import MissionSection from "./components/sections/MissionSection.vue";
import StatsCounter from "./components/sections/StatsCounter.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import { navLinks, missions, telemetryStats } from "./data/missions";
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
      <StatsCounter :stats="telemetryStats" />
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
  font-family:
    "D-DIN",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
}
</style>
