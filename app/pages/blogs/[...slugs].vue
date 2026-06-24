<script setup>
const route=useRoute()
</script>
<template>
    <h2>Page Not Found</h2>
    <p>You tried to access <strong>{{ route.params.slugs.join('/') }}</strong></p>
    <NuxtLink to="/blogs">Go to Blogs</NuxtLink>
</template> 
