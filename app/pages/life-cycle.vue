<script setup>
import { ref,onMounted,onUpdated,onBeforeUnmount } from 'vue';
const count=ref(0);
onMounted(()=>{
    console.log('Component Mounted')
})
onUpdated(()=>{
    console.log("Component Updated")
})
onBeforeUnmount(()=>{
    console.log("Component Unmounted")
})

function increment(){
    count.value++;
}
</script>

<template>
    <div>
        <h2>Life Cycle hooks</h2>
        <p>count:{{ count }}</p>
        <button @click="increment">Increment</button>
    </div>

</template>