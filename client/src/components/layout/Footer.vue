<template>
  <header class="footer">
    <h1>Footer</h1>
    <div id="nav">
      <router-link to="/imprint">Imprint</router-link> |
      <router-link to="/dataprotection">Data Protection</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer {
    background: rgb(155, 155, 155);
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: 100px;
  }

  .footer a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>


