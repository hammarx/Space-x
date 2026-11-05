<!-- src/components/layout/AppFooter.vue -->
<template>
  <footer class="footer">
    <span class="copyright">SPACEX © {{ new Date().getFullYear() }}</span>
    <nav class="footer-links">
      <a href="#privacy">Privacy Policy</a>
      <a href="#suppliers">Suppliers</a>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000000;
  color: #979797;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.footer-links {
  display: flex;
  gap: 28px;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #979797;
}
</style>
