<script setup>
import { ref, watch } from "vue";
import { useScrollReveal } from "../../composables/useScrollReveal";

const props = defineProps({
  stats: {
    type: Array,
    required: true,
  },
});

const { targetRef, isVisible } = useScrollReveal(0.4);
const displayValues = ref(props.stats.map(() => 0));

watch(isVisible, (visible) => {
  if (!visible) return;

  props.stats.forEach((stat, index) => {
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      displayValues.value[index] = Math.floor(progress * stat.value);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  });
});
</script>

<template>
  <section ref="targetRef" class="stats-bar">
    <div v-for="(stat, index) in stats" :key="stat.label" class="stat-item">
      <span class="stat-number">{{ displayValues[index] }}</span>
      <span class="stat-label">{{ stat.label }}</span>
    </div>
  </section>
</template>

<style scoped>
.stats-bar {
  background-color: #000000;
  color: #ffffff;
  max-width: 1000px;
  margin: 0 auto;
  padding: 70px 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  gap: 32px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 1;
}

.stat-label {
  margin-top: 12px;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #cccccc;
}
</style>
