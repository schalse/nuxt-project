<script setup>
const {count,increment,decrement}=useCounter()
</script>

<template>
    <div>
        <h2>Counter using composables</h2>
        <p>Count:{{ count }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>