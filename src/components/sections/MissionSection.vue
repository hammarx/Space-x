<script setup>
import { ref } from "vue";
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

const { targetRef, isVisible } = useScrollReveal(0.25);
const showSpecsModal = ref(false);
</script>

<template>
  <section :id="mission.id" ref="targetRef" class="mission-section">
    <!-- Background Video or High-Res Image -->
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

    <!-- Bottom-Left SpaceX Content Block -->
    <div class="mission-content" :class="{ 'is-visible': isVisible }">
      <p class="mission-tagline">{{ mission.tagline }}</p>
      <h2 class="mission-title">{{ mission.title }}</h2>

      <!-- Quick Specs Strip -->
      <div v-if="mission.specs" class="specs-strip">
        <div v-for="spec in mission.specs" :key="spec.label" class="spec-pill">
          <span class="spec-label">{{ spec.label }}</span>
          <span class="spec-value">{{ spec.value }}</span>
        </div>
      </div>

      <button type="button" class="spacex-btn" @click="showSpecsModal = true">
        <span class="btn-hover-bg"></span>
        <span class="btn-text">{{ mission.ctaText }}</span>
      </button>
    </div>

    <!-- Interactive Technical Brief Modal -->
    <Transition name="fade">
      <div
        v-if="showSpecsModal"
        class="specs-modal-backdrop"
        @click.self="showSpecsModal = false"
      >
        <div class="specs-modal">
          <button
            class="modal-close"
            aria-label="Close"
            @click="showSpecsModal = false"
          >
            ✕
          </button>
          <p class="modal-tagline">{{ mission.tagline }}</p>
          <h3 class="modal-title">{{ mission.title }} — TECHNICAL OVERVIEW</h3>
          <p class="modal-subtitle">{{ mission.subtitle }}</p>

          <div class="modal-specs-grid">
            <div
              v-for="spec in mission.specs"
              :key="spec.label"
              class="modal-spec-row"
            >
              <span class="modal-spec-label">{{ spec.label }}</span>
              <span class="modal-spec-val">{{ spec.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Down Scroll Chevron -->
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
  transform: scale(1.02);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.22) 50%,
    rgba(0, 0, 0, 0.45) 100%
  );
}

.mission-content {
  position: relative;
  z-index: 2;
  max-width: 650px;
  margin-left: 8%;
  margin-bottom: 105px;
  color: #ffffff;
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
}

.mission-content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.mission-tagline {
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;
  color: #d8d8d8;
}

.mission-title {
  font-size: clamp(2.2rem, 4.5vw, 3.35rem);
  font-weight: 700;
  line-height: 1.08;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
}

.specs-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 1.8rem;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.spec-pill {
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: #a8a8a8;
  text-transform: uppercase;
}

.spec-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 2px;
}

.spacex-btn {
  position: relative;
  display: inline-block;
  padding: 16px 48px;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.12em;
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

/* Modal Styling */
.specs-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.specs-modal {
  position: relative;
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 620px;
  width: 100%;
  padding: 44px;
  color: #ffffff;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.3rem;
  cursor: pointer;
}

.modal-tagline {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  color: #9e9e9e;
  margin-bottom: 6px;
}

.modal-title {
  font-size: 1.65rem;
  margin-bottom: 16px;
  letter-spacing: 0.04em;
}

.modal-subtitle {
  font-size: 0.96rem;
  line-height: 1.65;
  color: #cccccc;
  margin-bottom: 28px;
}

.modal-specs-grid {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.modal-spec-row {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.88rem;
}

.modal-spec-label {
  color: #999999;
  letter-spacing: 0.08em;
}

.modal-spec-val {
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 28px;
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
    margin-bottom: 85px;
  }
}
</style>
