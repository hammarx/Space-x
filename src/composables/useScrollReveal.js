import { ref, onMounted, onUnmounted } from "vue";

export function useScrollReveal(threshold = 0.25) {
  const targetRef = ref(null);
  const isVisible = ref(false);
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold },
    );

    if (targetRef.value) {
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value);
    }
  });

  return { targetRef, isVisible };
}
