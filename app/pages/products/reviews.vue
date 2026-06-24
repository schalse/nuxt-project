<template>
    <div>
<h3>Products Details</h3>
         <ClientOnly>
    <LazyReviewSection />
  </ClientOnly>

    </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const LazyReviewSection = defineAsyncComponent(() =>
    import('@/components/ReviewSection.vue')
)
</script>