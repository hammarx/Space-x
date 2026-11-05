<script setup>
import { useScrollReveal } from "../../composables/useScrollReveal";

defineProps({
  mission: {
    type: Object,
    required: true,
  },
  showScrollArrow: {
    type: Boolean,
    default: true,
  },
});

const { targetRef, isVisible } = useScrollReveal(0.3);
</script>

<template>
  <section :id="mission.id" ref="targetRef" class="mission-section">
    <!-- Background Media (Video or Image) -->
    <div class="media-container">
      <video
        v-if="mission.mediaType === 'video'"
        class="bg-media"
        :src="mission.mediaSrc"
        :poster="mission.posterSrc"
        autoplay
        muted
        loop
        playsinline
      ></video>
      <img
        v-else
        class="bg-media"
        :src="mission.mediaSrc"
        :alt="mission.title"
        loading="lazy"
      />
      <div class="media-overlay"></div>
    </div>

    <!-- Animated Content Box -->
    <div class="mission-content" :class="{ 'is-visible': isVisible }">
      <p class="mission-tagline">{{ mission.tagline }}</p>
      <h2 class="mission-title">{{ mission.title }}</h2>
      <a :href="mission.ctaLink" class="spacex-btn">
        <span class="btn-hover-bg"></span>
        <span class="btn-text">{{ mission.ctaText }}</span>
      </a>
    </div>

    <!-- Animated Down Arrow -->
    <div v-if="showScrollArrow" class="scroll-indicator" aria-hidden="true">
      <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
        <path
          d="M2 2L15 15L28 2"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.media-container {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.bg-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.15) 45%,
    rgba(0, 0, 0, 0.35) 100%
  );
}

.mission-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  margin-left: 10%;
  margin-bottom: 120px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(45px);
  transition:
    opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.mission-content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.mission-tagline {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.mission-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

/* Signature SpaceX Sliding Fill Button */
.spacex-btn {
  position: relative;
  display: inline-block;
  padding: 16px 48px;
  border: 2px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-hover-bg {
  position: absolute;
  inset: 0;
  background-color: #ffffff;
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.spacex-btn:hover {
  color: #000000;
}

.spacex-btn:hover .btn-hover-bg {
  transform: translateY(0);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounceFade 2.2s infinite;
}

@keyframes bounceFade {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
    opacity: 0.8;
  }
  40% {
    transform: translate(-50%, -10px);
    opacity: 1;
  }
  60% {
    transform: translate(-50%, -5px);
    opacity: 0.6;
  }
}

@media (max-width: 768px) {
  .mission-content {
    margin-left: 6%;
    margin-right: 6%;
    margin-bottom: 90px;
  }
}
</style>
