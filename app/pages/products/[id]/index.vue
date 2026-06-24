<script setup>
const route=useRoute();
</script>
<template>
    <div>
        <h2>
            <p>You are viewing product wih id {{ route.params.id }}</p>
        </h2>
        <NuxtLink to="/products/about">Go To About</NuxtLink>
    </div>
</template>