<script setup lang="ts">
import SeccionPrincipal from '../components/HomeViewComponents/SeccionPrincipal.vue'
import Description1 from '@/components/HomeViewComponents/Description1.vue'
import Description3 from '@/components/HomeViewComponents/Description3.vue'
import Description2 from '@/components/HomeViewComponents/Description2.vue'
import EndingParagraph from '@/components/HomeViewComponents/EndingParagraph.vue'
</script>

<template>
  <SeccionPrincipal />
  <Description1 class="descripciones" />
  <Description2 class="descripciones" />
  <Description3 class="descripciones" />
  <EndingParagraph />
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.descripciones {
  margin: 5% 0px 10%;
}
</style>
