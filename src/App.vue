<template>
<nav class="menu">
  <router-link to="/">Books</router-link>
  <router-link to="/quotes">Quotes</router-link>
</nav>
<div class="container">
  <router-view />
</div>
 
 
</template>


<script>
export default {
  name: 'App',
}
 
</script>

<style>
 
</style>