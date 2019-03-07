
<template>
  <div  class="container" v-if="!error">  
    <v-dialog/>  
    <div class="create-post">  
      <button class="btn" v-on:click="EditPost">Edit</button> 
      <button class="btn" v-on:click="show()">Delete</button>
      <button class="btn" v-on:click="$router.push('insertinfo?id=' + posts[0]._id)">Message</button>
      <br><br>
      <h1>{{ posts[0].ownID }}</h1>


      <div :style="theyaremessages ? 'float:left;' : '' ">

        <div>
           <div class="box-title">
              Contact and person information
           </div>

           <div class="box">
            <div>
              <strong>Client Name</strong>
              <div class="box03">{{ posts[0].Client1Info.Client1Name }} {{ posts[0].Client1Info.Client1Surname }}</div>
            </div>
            <div>
              <strong>Client Telephon Number</strong>
              <div class="box03">{{ posts[0].Client1Info.Client1Tel }} </div>
            </div>
            <div>
              <strong>Email</strong>
              <div class="box03">{{ posts[0].Client1Info.Client1Email }} </div>
            </div>
            <div>
              <strong>Address</strong>
              <div class="box03">{{ posts[0].Address }}</div>
            </div>
          </div>  
          
          <div class="box">
            <div>
              <strong>Client 2 Name</strong>
              <div class="box03">{{ posts[0].Client2Info.Client2Name }} {{ posts[0].Client2Info.Client2Surname }}</div>
            </div>
            <div>
              <strong>Client 2 Telephon Number</strong>
              <div class="box03">{{ posts[0].Client2Info.Client2Tel }} </div>
            </div>
            <div>
              <strong>Client 2 Email</strong>
              <div class="box03">{{ posts[0].Client2Info.Client2Email }} </div>
            </div>
           </div>

           <div style="clear:both;" v-if="theyaremessages"></div>

           <div class="box">
            <div>
              <strong>Event Date</strong>
              <div class="box03">{{ moment(posts[0].EventInfo.DateEvent).format('DD.MM.YYYY') }}</div>
            </div>
            <div class="box01">
              <strong>Event location</strong>
              <div class="box03">{{ posts[0].EventInfo.EventLocation }}</div>
            </div>
            <div>
              <strong>Contact Date</strong>
              <div class="box03">{{  moment(posts[0].DateContact).format('DD.MM.YYYY')  }}</div>
            </div>


          </div>

          <div class="box">
            <div>
              <strong>Already Customer</strong>
              <div class="box03"><span v-if="posts[0].AlreadyCustomer">Yes</span><span v-else>No</span></div>
            </div>
            <div class="box01">
              <strong>Actual Potential Client</strong>
              <div class="box03"><span v-if="posts[0].ActivCustomer">Yes</span><span v-else>No</span></div>
            </div>
            <div class="box01">
              <strong>Source</strong>
              <div class="box03">{{ posts[0].Source }}</div>
            </div>
          </div>

        </div>


        <div style="clear:both;" class="barbtn" v-on:click="contractVisible = !contractVisible">
          <span v-if="contractVisible">- View Contract fields?</span>
          <span v-else>+ View Contract fields?</span>            
        </div>


        <transition name="fade">
        <div style="clear:both;" v-if="contractVisible">

          <div class="box-title">
            Contract information
          </div>

           <div class="box">
            <div>
              <strong>Contract Date</strong>
              <div class="box03">{{ moment(posts[0].ContractInfo.ContractDate).format('DD.MM.YYYY') }}</div>
            </div>
            <div class="box01">
              <strong>Contracted Time</strong>
              <div class="box03">{{ posts[0].ContractInfo.NumberHours }}</div>
            </div>
          </div>

           <div class="box">
            <div>
              <strong>Ordered Services</strong>
              <div class="box03">{{ posts[0].ContractInfo.OrderedServices }}</div>
            </div>
            <div class="box01">
              <strong>Ordered Products</strong>
              <div class="box03">{{ posts[0].ContractInfo.OrderedProducts }}</div>
            </div>
          </div>

          <div style="clear:both;" v-if="theyaremessages"></div>

           <div class="box">
            <div>
              <strong>Total Price</strong>
              <div class="box03">{{ posts[0].ContractInfo.TotalPrice }} €</div>
            </div>
            <div class="box01">
              <strong>Permision to Publish</strong>
              <div class="box03"><span v-if="posts[0].ContractInfo.PermisionPublic">Yes</span><span v-else>No</span></div>
            </div>
          </div>

          <div class="box">
            <div>
              <strong>Deposit to Pay</strong>
              <div class="box03">{{ posts[0].ContractInfo.DepositToPay }} €</div>
            </div>
            <div class="box01">
              <strong>Deposit already payed?</strong>
              <div class="box03"><span v-if="posts[0].ContractInfo.DepositPayed">Yes</span><span v-else>No</span></div>
            </div>
          </div>         

        </div>
        
        </transition>


       
        <div style="clear:both;" v-if="commentVisible">

          <div class="box-title">
            Comment
          </div>

          <div>
            <div class="box-comment" :style="theyaremessages ? 'max-width:588px;' : '' ">
              <div class="box02">{{ posts[0].Comments }}</div>
            </div>
          </div>
        </div>
      

      </div>


      <transition name="fade">
      <div class="boxmessagecollumn" v-if="theyaremessages">
        <div class="box-title">
          Comunication with client
        </div>
        <div 
          v-for="(postsmessage, index) in postsmessages"
          v-bind:item="postsmessage"
          v-bind:index="index"
          v-bind:key="postsmessage._id"         
        >            
            <div>
              <div class="boxmessage">
                <div>
                  <strong>Date</strong>
                  <div class="box03">{{ moment(postsmessage.DateInfo).format('DD.MM.YYYY') }}</div>
                </div>
                <div>
                  <strong>Who</strong>
                  <div class="box03">{{ postsmessage.ContactPerson }}</div>
                </div>
                <div>
                  <strong>Chanel</strong>
                  <div class="box03">{{ postsmessage.ChanelChoosed }}</div>
                </div>
                <div class="boxmessage-comment">
                  <strong>Comment</strong>
                  <div class="box02">{{ postsmessage.CommentsInfo }}</div>
                </div>
                <div style="clear:both;">
                  <button class="btn" v-on:click="EditMessage(postsmessage._id)">Edit Message</button> <button class="btn" v-on:click="show(postsmessage._id)">Delete Message</button>
                </div>
              </div>
              
            </div>
            
        </div>
      </div>
      </transition>


<br><br><br><br>
    
      <div style="clear:both;">
        <button class="btn" v-on:click="EditPost">Edit</button> 
        <button class="btn" v-on:click="show()">Delete</button>        
        <button class="btn" v-on:click="$router.push('insertinfo?id=' + posts[0]._id)">Message</button>
      </div>



    </div>
</div>

<div class="container" v-else>
    There is a error
</div>
  
</template>

<script>
import PostService from '../PostService'
//import moment from 'moment'
//import VModal from 'vue-js-modal'
//import VueMoment from 'vue-moment'
//import moment from 'moment-timezone'

export default {
  name: 'ViewCostumer',
  data() {
    return {
      contractVisible: false,
      commentVisible: false,
      //moment:moment,
      //VModal:VModal,
      posts: {
        0: {
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
      posts2: [],
      postsmessages: {
        0: {}
      }
          ,
      error: '',
      id: '',
      id2: '',
      fecha: '',
      theyaremessages: false    
    }
  },    
  async created() {
    if(this.$route.query.id){
      this.id = this.$route.query.id;
      this.id2 = this.id;
    } else {
      this.$router.push(`/`);
    } 
    //console.log('333333333');

    try {
      this.posts = await PostService.getPosts(this.id);  
      if (this.posts[0].AlreadyCustomer){
        this.contractVisible = true;
      }

      if (this.posts[0].Comments){
        this.commentVisible = true;
      }    
      this.fecha = Date(this.posts[0].DateContact);
      this.getMessages();
    } catch(err) {
      this.error = err.message;
    }
    //this.posts2 = await PostService.getPosts();
    //console.log(date);
    //if(this.posts){    
    //this.fecha.getDate(this.posts[0].DateContact);
    //}
  },
  
  methods: {
    // change Line Breaks with <br>
    /*
    LBreplace(){
      let LBText;
      LBText = this.posts[0].Comments.replace(/(?:\r\n|\r|\n)/g, '<br />');
      console.log(LBText);
      return LBText;
    },*/

    async getMessages() {
      //console.log('hay mensajes 1: ', this.theyaremessages );
      try {

        this.postsmessages = await PostService.getMessages(this.id);
        //console.log("this.id: ", this.id);
        //console.log("idCustomer: ", this.postsmessages[0].idCustomer);
        if(this.postsmessages[0])
        { 
          this.theyaremessages = true;
        }

        //this.postsmessages.sort();
        this.postsmessages.sort(this.compare);

      } catch(err) {
        this.error = err.message;
      }

    },

    async EditPost() {
      this.$router.push(`Edit?id=${this.id2}`);
    },

    async EditMessage(idmessage) {
      //console.log('idmessage: ', idmessage);
      this.$router.push(`insertinfo?idmessage=${idmessage}`);
    },

    async deletePost(deleteMessage = ''){
      await PostService.deletePost(this.id, deleteMessage);
      if(deleteMessage !== ''){
        this.posts = await PostService.getPosts(this.id);      
        this.getMessages();
        this.hide ();
      } else {
        this.$router.push(`\/`);
      }

      
    },
    //PopUp delete window
    show (deleteMessage = '') {
      this.$modal.show('hello-world');
      //console.log('222222222222: ', deleteMessage);
      let title;
      let text;

      if (deleteMessage === ''){
        title = 'Delete Entry ' + this.posts[0].ownID;
        text = 'Are you sure you want to delete customer and all its messages??? ';
      } else {
        title = 'Delete Message of Client ' + this.posts[0].ownID;
        text = 'Are you sure you want to delete the message??? ';
      }

      this.$modal.show('dialog', {
        title: title,
        text: text ,
        buttons: [
          {
            title: 'Delete',
            //handler: () => { alert('Woot!') }
            handler: () => { this.deletePost(deleteMessage) }
            
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
      ]
      })
    },

    hide () {
      this.$modal.hide('dialog');
    },
    
    compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const DateInfoA = a.DateInfo.toUpperCase();
      const DateInfoB = b.DateInfo.toUpperCase();

      let comparison = 0;
      if (DateInfoA > DateInfoB) {
        comparison = 1;
      } else if (DateInfoA < DateInfoB) {
        comparison = -1;
      }

      return comparison * -1 ;
    },

  }
}
</script>

<style scoped>

  .v--modal-overlay {
    background-color: rgba(255, 0, 0, .5);
  }

  h2{
    font-size: 20px;
  }

  h1{
    font-size: 24px;
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


  div.create-post label {
    color: #919191;
    font-size: 14px;
  }


  div.create-post ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;  
    overflow: hidden;
    /*background-color: #f1f1f1;    */
  }

  div.create-post li {
    float: left;
    margin-right: 10px;
    margin-bottom: 2px;
    /*background-color: #f1f1f1;*/
    border: 1px solid #bdbdbd;
    padding: 7px 8px;
    color: #919191;
    font-size: 14px;
    white-space: pre-line;
    width: 200px;
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
    padding: 7px 18px;
    cursor: pointer;
    margin: 10px 5px 0 0 ;
  }

  .btn:hover{
    background: #666;
  }

  .barbtn{
    font-size: 18px;
    width: 95%;
    height: 20px;
    padding:7px 7px;
    border: none;
    background: rgb(214, 133, 133);
    color: #fff;
    cursor: pointer;
    max-width: 1260px;
    clear:both;
    float:left;
    margin-top:20px;
  }

  .barbtn:hover{
    background: rgb(190, 106, 106);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .create-post {
    text-align: left;
    width: 100%;
    /*max-width: 50%;*/
    /*max-width: 50%;*/
    /*max-width: 900px;*/
    margin-left: auto;
    margin-right: auto; 
  }


  .boxmessagecollumn{
    float:left; 
    margin-left:10px; 
    background: rgb(218, 218, 218); 
    padding: 0 10px 10px 10px;
    max-width: 317px;
  }

  .boxmessage{
    float:left; 
    /*min-width:270px; */
    max-width:450px;
    height:100%; 
    border: 2px solid #d9d9d9; 
    background-color:#fff; 
    padding:12px; 
    margin:5px 10px 10px 10px ;
  }

  .boxmessage-comment{
    clear:both;
    float:left;  
    height:100%;  
    background-color:#fff; 
    white-space: pre-line;
    width: 100%;
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
    margin-top:10px;
  }

  .box02 {
    border: 1px solid #bdbdbd; 
    padding:5px; 
    width:95%;
    max-width: 100%;
  }

  .box03 {
    border: 1px solid #bdbdbd; 
    padding:5px; 
    width:95%;
    height:23px;
    margin-bottom: 10px;
  }

  .box-title {
    clear:both;
    margin:15px 0 0 10px;
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



  /* Responsive layout - when the screen is less than 1000px wide, make the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 1000px) {
    .divTableHead, .divTableCell, .create-post  {
      width: 100%;
      margin-top: 0;
    }

}


</style>
