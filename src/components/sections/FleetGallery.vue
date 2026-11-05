<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const selectedCategory = ref("ALL");
const activeLightbox = ref(null);

const categories = computed(() => {
  const unique = new Set(
    props.items.map((item) => item.category.toUpperCase()),
  );
  return ["ALL", ...unique];
});

const filteredItems = computed(() => {
  if (selectedCategory.value === "ALL") return props.items;
  return props.items.filter(
    (item) => item.category.toUpperCase() === selectedCategory.value,
  );
});
</script>

<template>
  <section id="fleet-gallery" class="gallery-section">
    <div class="gallery-header">
      <p class="gallery-eyebrow">ORBITAL ARCHIVE & FLEET IMAGERY</p>
      <h2 class="gallery-title">SPACEX MISSION GALLERY</h2>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="filter-btn"
          :class="{ 'is-active': selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Multi-Image Grid -->
    <div class="gallery-grid">
      <article
        v-for="item in filteredItems"
        :key="item.id"
        class="gallery-card"
        @click="activeLightbox = item"
      >
        <img :src="item.image" :alt="item.title" loading="lazy" />
        <div class="card-overlay">
          <span class="card-category">{{ item.category }}</span>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-location">{{ item.location }}</p>
        </div>
      </article>
    </div>

    <!-- Fullscreen Image Lightbox -->
    <div
      v-if="activeLightbox"
      class="lightbox"
      @click.self="activeLightbox = null"
    >
      <button class="lightbox-close" @click="activeLightbox = null">✕</button>
      <div class="lightbox-inner">
        <img :src="activeLightbox.image" :alt="activeLightbox.title" />
        <div class="lightbox-caption">
          <span
            >{{ activeLightbox.category }} • {{ activeLightbox.location }}</span
          >
          <h4>{{ activeLightbox.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background-color: #000000;
  color: #ffffff;
  padding: 110px 6% 90px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.gallery-header {
  max-width: 1400px;
  margin: 0 auto 48px;
  text-align: center;
}

.gallery-eyebrow {
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  color: #9a9a9a;
  margin-bottom: 10px;
}

.gallery-title {
  font-size: clamp(1.8rem, 3.5vw, 2.75rem);
  letter-spacing: 0.06em;
  margin-bottom: 30px;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  padding: 10px 22px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover,
.filter-btn.is-active {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
}

.gallery-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
}

.gallery-card {
  position: relative;
  height: 310px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-card:hover img {
  transform: scale(1.08);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.88) 0%,
    rgba(0, 0, 0, 0.1) 65%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 26px;
}

.card-category {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #bbbbbb;
  margin-bottom: 6px;
}

.card-title {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.card-location {
  font-size: 0.8rem;
  color: #999999;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 250;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.lightbox-close {
  position: absolute;
  top: 28px;
  right: 36px;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;
}

.lightbox-inner {
  max-width: 1050px;
  width: 100%;
}

.lightbox-inner img {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.lightbox-caption {
  margin-top: 16px;
  text-align: left;
}

.lightbox-caption span {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: #9e9e9e;
  text-transform: uppercase;
}

.lightbox-caption h4 {
  font-size: 1.3rem;
  margin-top: 4px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
