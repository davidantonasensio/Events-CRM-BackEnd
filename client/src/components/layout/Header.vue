<template>
  <header class="header">
    <h1>Customers Administration</h1>
    <div>      
      <ul>
        <li><router-link to="/">Costumers List</router-link></li>
        <li><router-link to="/new">Insert new Event</router-link></li>
      </ul>
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
    background: rgb(112, 112, 112);
    color: rgb(160, 160, 160);
    padding: 10px;
    text-align:center;
    height:100%;
  }

  .header h1{
    font-size: 18px;
  }

  .header ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;    
    font-weight: 600;
    font-size: 12px;
    /*background-color: #f1f1f1;    */
  }

  .header li a{
    display: block;
    color: rgb(194, 194, 194);
    padding: 8px 16px;
    text-decoration: none;
    text-align:left;    
    font-weight: 800;
  }

  .header li a:hover{
    background-color: #555;
    color: white;
  }

  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>


