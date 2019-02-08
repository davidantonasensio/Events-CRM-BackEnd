
<template>

  <div class="container" v-if="!error">    
    <div class="create-post">  
      <h1>ID:  {{ posts[0].ownID }}</h1>
      <button class="btn" v-on:click="EditPost">Edit</button>


<ul>
      <li><label>Already Customer: </label> <span v-if="posts[0].AlreadyCustomer"><strong>Yes</strong></span><span v-else><strong>No</strong></span></li>
      <li><label>Contact Date: </label> <strong>{{ posts[0].DateContact }}</strong></li>
      <li><label>Source: </label> <strong>{{ posts[0].Source }}</strong></li>
      <h2>Wedding Info</h2>      
            <ul>
                <li><label>Date Wedding: </label> <strong>{{ posts[0].WeddingInfo.DateWedding }}</strong></li>
                <li><label>Wedding Location: </label> <strong>{{ posts[0].WeddingInfo.WeddingLocation }}</strong></li>
            </ul>

      <div style="margin:20px 0 20px 0;">
        <div style="float:left; margin-right:100px;">
          <h2>Bride Info</h2>      
                <ul>
                    <li><label>Bride Name: </label> <strong>{{ posts[0].BrideInfo.BrideName }} {{ posts[0].BrideInfo.BrideSurname }}</strong></li>
                    <li><label>Bride Telefon Number: </label> <strong>{{ posts[0].BrideInfo.BrideTel }}</strong></li>
                    <li><label>Bride EMail: </label> <strong>{{ posts[0].BrideInfo.BrideEmail }}</strong></li>
                </ul>
        </div>
        <div style="float:left;">
          <h2>Groom Info</h2>      
                <ul>
                    <li><label>Groom Name: </label> <strong>{{ posts[0].GroomInfo.GroomName }} {{ posts[0].GroomInfo.GroomSurname }}</strong></li>
                    <li><label>Groom Telefon Number: </label> <strong>{{ posts[0].GroomInfo.GroomTel }}</strong></li>
                    <li><label>Groom EMail: </label> <strong>{{ posts[0].GroomInfo.GroomEmail }}</strong></li>
                </ul>
        </div>
        <div style="clear:both; padding-top:20px;">
            <li><label>Couple Address: </label> <strong>{{ posts[0].CoupleAddress }}</strong></li>
        </div>
        
      </div>      
      <div style="clear:both; padding-top:20px;">
        Contract information only visible if signed contract  
      </div>
      <div style="clear:both; margin-top:35px; " v-if="posts[0].AlreadyCustomer"> 
        <h2>Contract Info</h2>      
              <ul>
                  <li><label>Contract Date: </label> <strong>{{ posts[0].ContractInfo.ContractDate }}</strong></li>
                  <li><label>Ordered Services: </label> <strong>{{ posts[0].ContractInfo.OrderedServices }}</strong></li>
                  <li><label>Ordered Products: </label> <strong>{{ posts[0].ContractInfo.OrderedProducts }}</strong></li>
                  <li><label>Number of Hours: </label> <strong>{{ posts[0].ContractInfo.NumberHours }} Hours</strong></li>
                  <li><label>Total Price: </label> <strong>{{ posts[0].ContractInfo.TotalPrice }} €</strong></li>
                  <li><label>Deposit to Pay: </label> <strong>{{ posts[0].ContractInfo.DepositToPay }} €</strong></li>
                  <li><label>Deposit already Payed?: </label> <strong>{{ posts[0].ContractInfo.DepositPayed }}</strong></li>
                  <li><label>Permision to public Fotos: </label> <strong>{{ posts[0].ContractInfo.PermisionPublic }}</strong></li>
                  
              </ul>  
          <br>

        <li><label>Text, Comment: </label> <strong>{{ posts[0].Comments }}</strong></li>
      </div>

</ul>   
<br><br>

      <button class="btn" v-on:click="EditPost">Edit</button><br><br>
      <button class="btn" v-on:click="deletePost">Delete</button>

    </div>
</div>

<div class="container" v-else>
    There is a error
</div>
  
</template>

<script>
import PostService from '../PostService'

export default {
  name: 'ViewCostumer',
  data() {
    return {
      posts: {
        0: {
          WeddingInfo:{
          },
          BrideInfo: {
          },
          GroomInfo: {
          },
          ContractInfo: {
          }
        }
      },
      posts2: [],
      error: '',
      counter: true,
      id: '',
      id2: ''      
    }
  },    
  async created() {
    this.id = this.$route.query.id;
    this.id2 = this.id;

    try {
      this.posts = await PostService.getPosts(this.id);      
    } catch(err) {
      this.error = err.message;
    }
    this.posts2 = await PostService.getPosts(); 
  },
  
  methods: {    
    async EditPost() {
      this.$router.push(`Edit?id=${this.id2}`);
    },
    async deletePost(){
      console.log("ID: ", this.id);
      await PostService.deletePost(this.id);
      this.posts = await PostService.getPosts();
      this.$router.push('\/');
    }

  }
}
</script>

<style scoped>
  h2{
    font-size: 20px;
  }

  h1{
    font-size: 24px;
  }

 div.create-post {
   text-align: left;
   width: 60%;
   /*max-width: 50%;*/
   /*max-width: 50%;*/
   /*max-width: 900px;*/
   margin-left: auto;
   margin-right: auto;   
 }


  div.create-post label {
    color: #919191;
    font-size: 16px;

  }

  div.container {
    max-width: 100%;
    margin: 0 auto;
  }

  p.error {
    border: 1px solid #ff5b5f;
    background-color: #aaa5ee;
    padding: 10px;
    margin-bottom: 15px;
  }

  .btn{
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 18px;
    cursor: pointer;
  }

  .btn:hover{
    background: #666;
  }



/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 1000px) {
  .divTableHead, .divTableCell, .create-post input[type=submit] {
    width: 100%;
    margin-top: 0;
  }

div.create-post {
   text-align: left;
   width: 100%;
   /*max-width: 50%;*/
   /*max-width: 50%;*/
   /*max-width: 900px;*/
   margin-left: auto;
   margin-right: auto;   
 }

}


</style>
