<template>

  <div class="container">
    <h1>New contact Info to event</h1>
    <div class="create-post">  

        <h2>ID:  {{ post2[0].ownID }}</h2> 
        
        <label>Who: </label>  <input type="text" v-model="post2[0].ContactPerson" placeholder="Name">
        <br><br>     
        
        <label>Info Date</label><br>
        <date-picker v-model="post2[0].DateInfo" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the communication Date"></date-picker>
        <br><br>

        <label>Chanel: </label>
        <div>
          <span>Email </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Email">
          <span>Telephon </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Telephon">
          <span>Skype </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Skype">
          <span>Whatsapp </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Whatsapp">
          <span>Facebook </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Facebook">
          <span>Instagram </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Instagram">
          <span>Other </span> <input class="radio" type="radio" name="ActivCustomer" v-model="post2[0].ChanelChoosed" value="Other">
        </div>

        <br>
        <label>Text, Comment, Email</label><br>
        <textarea name="comment" form="usrform"  v-model="post2[0].CommentsInfo" placeholder="Here some coments">Enter text here...</textarea>

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
      //contractVisible: false,
      posts: {
        0: {
          ActivCustomer:true,
          AlreadyCustomer: false,
          EventInfo:{
          },
          BrideInfo: {
          },
          GroomInfo: {
          },
          ContractInfo: {
          }
        }
      },
       post2: {
        0: {
          DateInfo: new Date(),
          ChanelChoosed: 'Email',
          ownID: ''
        }
       },
      error: '',    
      lang: 'en',
      ChanelChoosed: '',
      theyaremessages: false



    }
  },
  async created() {
    let idmessage = '';
    if(this.$route.query.idmessage){            
      idmessage = this.$route.query.idmessage;
    } else {
      if(this.$route.query.id){
          this.id = this.$route.query.id;
      } else {
          this.$router.push(`/`);
      }  
    }

    if(this.id && !idmessage){
        try {
            this.posts = await PostService.getPosts(this.id);
            this.post2[0].id = this.id;
            this.post2[0].ownID = this.posts[0].ownID;

        } catch(err) {
            this.error = err.message;
        }
    } else if(idmessage){
        try {
            this.post2 = await PostService.getMessages(idmessage, 1);
            if(this.posts[0])
            { 
              this.theyaremessages = true;
            }

        } catch(err) {
            this.error = err.message;
        }
    }

  },
  methods: {
    async createPost() {
        let data = '';
        //console.log('this.id1: ', this.id);
        //console.log('this.id2: ', this.post2[0].idCustomer);
        let idtransfer = '';


        if(!this.theyaremessages){
          data = await PostService.insertPost(
              'insertinfo',
              this.post2
          );
          idtransfer = this.id;
          //console.log('idtransfer1: ', idtransfer);
        } else {
          data = await PostService.updatePost(
              'updateinfo',
              this.post2
          );
          idtransfer = this.post2[0].idCustomer;
          //console.log('idtransfer2: ', idtransfer);
        }

        //console.log('idtransfer3: ', idtransfer);

        this.$router.push(`ViewCostumer?id=${idtransfer}`);
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
    width: 95%;
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
    border: 1px solid #bdbdbd; 
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


/* Create a custom radio buttom */
div.create-post .radio{
  height: 0px;
  width: 0px;
  margin: 0 25px 0 1px;
  background-color: #eee;
  border: 1px solid #ff8c8c;
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
    margin: 0 auto auto 50px;
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
