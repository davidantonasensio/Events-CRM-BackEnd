<template>
  <header class="header">
    <h1>Customers Administration</h1>
    <div id="nav">
      <router-link to="/">Costumers List</router-link> |
      <router-link to="/new">New Couple</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

}
</script>

<style scoped>
  .header {
    background: rgb(155, 155, 155);
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>


