<template>

  <div class="container">
    <h1>New contact Info to event</h1>
    <div class="create-post">  

        <h2>ID:  {{ post2[0].ownID }}</h2> 

        <label>Event Date: </label> <strong>{{ moment(posts[0].EventInfo.DateWedding).format('DD.MM.YYYY') }}</strong>
        <br><br>
        <label>Who: </label>  <input type="text" v-model="post2[0].ContactPerson" placeholder="Name">
        <br>     
        <label>Info Date</label><br>
        <date-picker v-model="post2[0].DateInfo" type='datetime' value-type='date' :first-day-of-week="1" :lang="lang" placeholder="Introduce the communication Date"></date-picker>
        <br><br>
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
        }
       },
      error: '',    
      // custom lang
      lang: 'en'
      // custom range shortcuts


    }
  },
  async created() {
    if(this.$route.query.id){
        this.id = this.$route.query.id;
    } else {
        this.$router.push(`/`);
    }  
    
    if(this.id){
        try {
            this.posts = await PostService.getPosts(this.id);
            this.post2[0].id = this.id;
            this.post2[0].ownID = this.posts[0].ownID;
            //this.post2.id = 'asdfasdf';
            console.log(this.post2);
        } catch(err) {
            this.error = err.message;
        }
    }

  },
  methods: {
    async createPost() {
        let data = '';
        
        data = await PostService.insertPost(
            'insertinfo',
            this.post2
        );

        this.$router.push(`ViewCostumer?id=${this.id}`);
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
