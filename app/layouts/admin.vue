<template>
    <div>
        <h2>Admin Dashboard</h2>
        <nav>
            <NuxtLink to="/admin">Dashboard</NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
        </nav>
        <div style="margin-top: top 20px;">
            <slot></slot>
        </div>
    </div>
</template>