<template>

  <div class="container">
    <h1>New Contact</h1>
    <div class="create-post">   

      <label>Own ID</label><br>
      <input type="text" v-model="posts[0].ownID" placeholder="Introduce you Own costumer Identification "><br>

      <div>

        <div style="float:left;">
          <div class="box-title">
            Client
          </div>
          <div class="box">
            <div>
              <strong>Client Name</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client1Info.Client1Name" placeholder="Name">
              </div>
            </div>
            <div>
              <strong>Client Surname</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client1Info.Client1Surname" placeholder="Surname">
              </div>
            </div>
            <div>
              <strong>Client Telephon Number</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client1Info.Client1Tel" placeholder="Telefon Number">
              </div>
            </div>
            <div>
              <strong>Client Email</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client1Info.Client1Email" placeholder="Email"> 
              </div>
            </div>
            <div>
              <strong>Adress</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Address" placeholder="Address"><br><br>
              </div>
            </div>
          </div>
        </div> 

        <div style="float:left;">
          <div class="box-title">
            Client 2
          </div>
          <div class="box">
            <div>
              <strong>Client 2 Name</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client2Info.Client2Name" placeholder="Name">
              </div>
            </div>
            <div>
              <strong>Client 2 Surname</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client2Info.Client2Surname" placeholder="Surname">
              </div>
            </div>
            <div>
              <strong>Client 2 Telephon Number</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client2Info.Client2Tel" placeholder="Telefon Number">
              </div>
            </div>
            <div>
              <strong>Client 2 Email</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Client2Info.Client2Email" placeholder="Email"> 
              </div>
            </div>
          </div>
        </div> 

        <div style="float:left;">
          <div class="box-title">
            Event Information
          </div>
          <div class="box">
            <div>
              <strong>Contact Date</strong>
              <div class="box03">
                <date-picker v-model="posts[0].DateContact" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker>
              </div>
            </div>
            <div>
              <strong>Event Date</strong>
              <div class="box03">
                <date-picker v-model="posts[0].EventInfo.DateEvent" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker>
              </div>
            </div>
            <div>
              <strong>Event Location</strong>
              <div class="box03"><input type="text" v-model="posts[0].EventInfo.EventLocation" placeholder="Event Location"> </div>
            </div>
          </div>          
        </div> 

        <div style="float:left;">
          <div class="box-title">
            Client Status
          </div>
          <div class="box">
            <div>
              <strong>Actualy Activ</strong>
              <div class="box03">
                Yes<input class="radio" type="radio" name="ActivCustomer" v-model="posts[0].ActivCustomer" v-bind:value=true checked> 
                Not<input class="radio" type="radio" name="ActivCustomer" v-model="posts[0].ActivCustomer" v-bind:value=false>
              </div>
            </div>
            <div>
              <strong>Already Customer</strong>
              <div class="box03">
                <input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].AlreadyCustomer"> 
              </div>
            </div>
            <div>
              <strong>Source</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].Source" placeholder="Introduce the source">
              </div>
            </div>

          </div>          
        </div> 

      </div>


      <div style="clear:both;"></div>

      
      <div id="app" >        
        <div class="barbtn" v-on:click="contractVisible = !contractVisible">
          <span v-if="contractVisible || posts[0].AlreadyCustomer">- View Contract fields?</span>
          <span v-else>+ View Contract fields?</span>            
        </div>
        <transition name="fade">
        <div v-if="contractVisible || posts[0].AlreadyCustomer" >

        <div style="float:left;">
          <div class="box-title">
            Event Information
          </div>
          <div class="box">
            <div>
              <strong>Already Customer</strong>
              <div class="box03">
                <input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].AlreadyCustomer"> 
              </div>
            </div>
            <div>
              <strong>Contract Date</strong>
              <div class="box03">
                <date-picker v-model="posts[0].ContractInfo.ContractDate" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker>
              </div>
            </div>
            <div>
              <strong>Event Date</strong>
              <div class="box03">
                <date-picker v-model="posts[0].EventInfo.DateEvent" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the contact Date"></date-picker>
              </div>
            </div>
            <div>
              <strong>Event Location</strong>
              <div class="box03"><input type="text" v-model="posts[0].EventInfo.EventLocation" placeholder="Event Location"> </div>
            </div>
          </div>          
        </div> 

        <div style="float:left;">
          <div class="box-title">
            Contracted Services
          </div>
          <div class="box">
            <div>
              <strong>Ordered Services</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].ContractInfo.OrderedServices" placeholder="Orderer Services">
              </div>
            </div>
            <div>
              <strong>Ordered Products</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].ContractInfo.OrderedProducts" placeholder="Ordered Products">
              </div>
            </div>
            <div>
              <strong>Number of Hours</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].ContractInfo.NumberHours" placeholder="Number of Hours"><br>
              </div>
            </div>
            <div>
              <strong>Permision to public Fotos</strong>
              <div class="box03">
               <input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].ContractInfo.PermisionPublic">
              </div>
            </div>
          </div>          
        </div> 

        <div style="float:left;">
          <div class="box-title">
            Payment information
          </div>
          <div class="box">
            <div>
              <strong>Total Price</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].ContractInfo.TotalPrice" placeholder="Total Price">
              </div>
            </div>
            <div>
              <strong>Deposit to Pay</strong>
              <div class="box03">
                <input type="text" v-model="posts[0].ContractInfo.DepositToPay" placeholder="Deposit to Pay">
              </div>
            </div>
            <div>
              <strong>Deposit already Payed?</strong>
              <div class="box03">
                <input class="checkbox" type="checkbox" id="checkbox" v-model="posts[0].ContractInfo.DepositPayed">
              </div>
            </div>

          </div>          
        </div> 



        </div>
        </transition>


        <div style="clear:both;">

          <div class="box-title">
            Comment
          </div>

          <div>
            <div class="box-comment">
              <div class="box02">
                <textarea name="comment" form="usrform"  v-model="posts[0].Comments" placeholder="Here some coments">Enter text here...</textarea>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div style="clear:both;"></div>

      <button style="margin:30px 0 50px 0;" class="btn" v-on:click="createPost">Post!</button>
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
          ActivCustomer:true,
          AlreadyCustomer: false,
          EventInfo:{
          },
          Client1Info: {
          },
          Client2Info: {
          },
          ContractInfo: {
          }
        }
      },
      //posts2: [],
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
      console.log("11111111");
      console.log("this.posts: ", this.posts);
      let data = '';
      data = await PostService.insertPost(
        '',
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
    /*height: 25px;
    margin: 5px 0 20px 0;*/
    padding: 5px;
    border: 1px solid #bdbdbd; 
    background-color: #f7f7f7;
    color: #6e6e6e;
    font-size: 16px;
    max-width: 1250px;
     
  }

    div.create-post textarea{
  /*div.create-post {*/
    /*float: left;*/
    width: 95%;
    height: 150px;
    margin: 5px 0 20px 0;
    padding:5px;
    border: 1px solid #d9d9d9;
    background-color: #f7f7f7;
    color: #6e6e6e;
    font-size: 16px;
    max-width: 1250px;    
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

/* Create a custom radio buttom */
div.create-post .radio{
  /*position: absolute;*/  
  /*top: 0;
  left: 0;*/
  height: 0px;
  width: 25px;
  margin-right: 25px;
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
    max-width: 100%;
    margin: 0 ;
    padding: 20px;
    background-color:#f0f0f0;
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
    font-size: 18px;
    width: 100%;
    height: 25px;
    padding:10px;
    display: inline-block;
    border: none;
    background: rgb(214, 133, 133);
    color: #fff;
    cursor: pointer;
    max-width: 1240px;
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

  .box {
    float:left; 
    width:270px; 
    height:100%; 
    border: 2px solid #d9d9d9; 
    background-color:#fff; 
    padding:12px; 
    margin:5px 10px 10px 10px ;
  }

  .box01 {
    margin-top:0px;
  }

  .box02 { 
    padding:5px; 
    width:95%;
  }

  .box03 {
    padding:5px; 
    width:95%;
    height:23px;
    margin-bottom: 20px;
  }

  .box-title {
    margin:30px 0 0 10px;
    color: #919191;
    font-size: 22px;
  }

  .box-comment{
    clear:both;
    float:left;  
    height:100%; 
    border: 2px solid #d9d9d9; 
    background-color:#fff; 
    padding:12px; 
    margin:10px; 
    width:95%;
    max-width: 1225px;
    white-space: pre-line;
  }


/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .divTableHead, .divTableCell, .create-post input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}


</style>
