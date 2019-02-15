<template>

  <div class="container">
    <h1>New Couple</h1>
    <div class="create-post">   

        <label>Own ID</label><br>
        <input type="text" v-model="posts[0].ownID" placeholder="Introduce you Own costumer Identification "><br>

      <label>Contact Date</label><br>
      {{posts[0].DateContact}}<br>
      <date-picker v-model="posts[0].DateContact" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker><br><br>
      <label>Source</label><br>
      <input type="text" v-model="posts[0].Source" placeholder="Introduce the source"><br>

      <label>Wedding Info</label><br>
      <div class="subFields">
        <label>Date</label><br>
        <date-picker v-model="posts[0].WeddingInfo.DateWedding" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker><br><br>
        <label>Location</label>
        <input type="text" v-model="posts[0].WeddingInfo.WeddingLocation" placeholder="Wedding Location">
      </div>
      
      <label>Bride Info</label><br>
      <div class="subFields">
        <label>Bride Name</label><br>
        <input type="text" v-model="posts[0].BrideInfo.BrideName" placeholder="Bride Name"><br> 
        <label>Bride Surname</label><br>
        <input type="text" v-model="posts[0].BrideInfo.BrideSurname" placeholder="Bride Surname"><br>
        <label>Bride Telefon Number</label><br>
        <input type="text" v-model="posts[0].BrideInfo.BrideTel" placeholder="Bride Telefon Number"><br>
        <label>Bride EMail</label><br>
        <input type="text" v-model="posts[0].BrideInfo.BrideEmail" placeholder="Bride Email"><br>
      </div>
      <label>Groom Info</label><br>
      <div class="subFields">
        <label>Groom Name</label><br>
        <input type="text" v-model="posts[0].GroomInfo.GroomName" placeholder="Bride Name"><br> 
        <label>Groom Surname</label><br>
        <input type="text" v-model="posts[0].GroomInfo.GroomSurname" placeholder="Groom Surname"><br>
        <label>Groom Telefon Number</label><br>
        <input type="text" v-model="posts[0].GroomInfo.GroomTel" placeholder="Groom Telefon Number"><br>
        <label>Groom EMail</label><br>
        <input type="text" v-model="posts[0].GroomInfo.GroomEmail" placeholder="Groom Email"><br>
      </div>
      <label>Couple Address</label><br>
      <input type="text" v-model="posts[0].CoupleAddress" placeholder="Couple Address"><br>

      <br><br>
      <div id="app">
        
        <div class="barbtn" v-on:click="contractVisible = !contractVisible">
          <span v-if="contractVisible">- View Contract fields?</span>
          <span v-else>+ View Contract fields?</span>            
        </div>

        <transition name="fade">
        <div v-if="contractVisible">    
          <br>
          <label>Already Customer</label> <input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].AlreadyCustomer"> 
          <br><br>


          <label>Contract Info</label><br>
            <div class="subFields">
              <label>Contract Date</label><br>
              <date-picker v-model="posts[0].ContractInfo.ContractDate" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker><br><br>
              <label>Ordered Services</label><br>
              <input type="text" v-model="posts[0].ContractInfo.OrderedServices" placeholder="Orderer Services"><br>
              <label>Ordered Products</label><br>
              <input type="text" v-model="posts[0].ContractInfo.OrderedProducts" placeholder="Ordered Products"><br>
              <label>Number of Hours</label><br>
              <input type="text" v-model="posts[0].ContractInfo.NumberHours" placeholder="Number of Hours"><br>
              <label>Total Price</label><br>
              <input type="text" v-model="posts[0].ContractInfo.TotalPrice" placeholder="Total Price"><br>
              <label>Deposit to Pay</label><br>
              <input type="text" v-model="posts[0].ContractInfo.DepositToPay" placeholder="Deposit to Pay"><br>
              <label>Deposit already Payed?</label><input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].ContractInfo.DepositPayed"><br>
              <label>Permision to public Fotos</label><input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].ContractInfo.PermisionPublic"><br>
                    
            </div>

        </div>
        </transition>
      </div>
      <br><br>
     
      <label>Text, Comment</label><br>
      <textarea name="comment" form="usrform"  v-model="posts[0].Comments" placeholder="Here some coments">Enter text here...</textarea>


      <button class="btn" v-on:click="createPost">Post!</button>
    </div>
    <p class="error" v-if="error">{{ error }}</p>

  </div>
  
</template>

<script>
import PostService from '../PostService'
import DatePicker from 'vue2-datepicker'

export default {
  name: 'New',
  components: { 
    DatePicker
    //Home
  },
  data() {
    return {
      contractVisible: false,
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
      // custom lang
      lang: 'en'
      // custom range shortcuts


    }
  },
  async created() {
  },
  methods: {
    async createPost() {
      let data = '';
      data = await PostService.insertPost(
        this.posts
        );
        //console.log('Data de return: ', data);
        this.$router.push(`ViewCostumer?id=${data}`);

    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }


  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

 div.create-post {
   text-align: left;
   /*max-width: 900px;*/
   margin-left: auto;
   margin-right: auto;   
 }

  div.create-post input{
  /*div.create-post {*/
    /*float: left;*/
    width: 95%;
    height: 25px;
    margin: 5px 0 20px 0;
    padding:5px;
    border: 1px solid #ff8c8c;
    background-color: #f7f7f7;
    color: #6e6e6e;
    font-size: 16px;
     
  }

    div.create-post textarea{
  /*div.create-post {*/
    /*float: left;*/
    width: 95%;
    height: 150px;
    margin: 5px 0 20px 0;
    padding:5px;
    border: 1px solid #ff8c8c;
    background-color: #f7f7f7;
    color: #6e6e6e;
    font-size: 16px;
     
  }

  div.create-post date-picker{
    width: 95%;
    height: 150px;
    margin: 5px 0 20px 0;
    padding:5px;
    border: 1px solid #ff8c8c;
    background-color: #f7f7f7;
    color: #6e6e6e;
    font-size: 16px;
     
  }

/* Create a custom checkbox */
div.create-post .checkbox {
  /*position: absolute;*/  
  /*top: 0;
  left: 0;*/
  height: 15px;
  width: 15px;
  margin-left: 15px;
  /*background-color: #eee;*/
}

  div.create-post input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(192, 192, 192);
  opacity: 1; /* Firefox */
}

  div.create-post textarea::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(192, 192, 192);
  opacity: 1; /* Firefox */
}

  div.create-post label {
    color: #919191;
    font-size: 18px;

  }

  div.container {
    max-width: 1000px;
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
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover{
    background: #666;
  }


  .barbtn{
    width: 100%;
    height: 25px;
    margin: 0px 0 0px 0;
    padding:10px;
    display: inline-block;
    border: none;
    background: rgb(148, 67, 67);
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .barbtn:hover{
    background: rgb(190, 106, 106);
  }


.subFields{
  margin: 10px 0 10px 25px;
}

div.subFields label{
  font-size: 16px;
  color: #0a009b
}


/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .divTableHead, .divTableCell, .create-post input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}


</style>
