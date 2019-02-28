<template>
  <header class="footer">
    <h1>Footer</h1>
    <div id="nav">
      <ul>
        <li><router-link to="/imprint">Imprint</router-link></li>
        <li><router-link to="/dataprotection">Data Protection</router-link></li>
      </ul>
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
    background: rgb(112, 112, 112);
    color: rgb(160, 160, 160);
    padding: 10px;
    text-align:center;
    height:100%;
  }

  .footer h1{
    font-size: 18px;
  }

  .footer ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;    
    font-weight: 600;
    font-size: 12px;
    /*background-color: #f1f1f1;    */
  }

  .footer li a{
    display: block;
    color: rgb(226, 226, 226);
    padding: 8px 16px;
    text-decoration: none;
    text-align:left;
  }

  .footer li a:hover{
    background-color: #555;
    color: white;
  }

  .footer a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>


