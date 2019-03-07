<template>
  <div class="container">
    <v-dialog/>
    <h1>List of Customers</h1>    
    <!--aaaa: {{ windowWidth }} - {{joder}} - {{msg}}-->
      
    
    <div class="search">     
      <div class="search1">
        <p class="error" v-if="error">{{ error }}</p>
        <label>Already Customer</label> <input class="checkbox" type="checkbox" id="checkbox" v-on:change="Paramsschange" v-model="AlreadyCustomer"> | 
        <label>Activ Customer</label> <input class="checkbox" type="checkbox" id="checkbox" v-on:change="Paramsschange" v-model="ActivCustomer">
      </div>
      <div class="search2">
        <label>Select Event Years: </label>
        <span style="margin-right:10px;"
          v-for="(Year, index) in YearsArray"
          v-bind:item="Year"
          v-bind:index="index"
          v-bind:key="Year"
        >
        <span class="checkbox">  {{Year}} </span> <input type="checkbox" v-on:change="Paramsschange" :value="Year" v-model="YearChoosed">  </span>
      </div>
    </div>
    

    <div class="posts-container">
      <div class="divTable blueTable">
        <div class="divTableHeading">
          <div class="divTableRow">
            <div class="divTableHead"></div>
            <div class="divTableHead"></div>
            <div class="divTableHead"></div>
            <div class="divTableHead">ID</div>
            <div class="divTableHead">Event Date</div>
            <div class="divTableHead">Location</div>
            <div class="divTableHead">Contact Person 1</div>
            <div class="divTableHead">Contact Person 2</div>
            <div class="divTableHead">Contact Date</div>
            <div class="divTableHead">Contract Date</div>
            <div class="divTableHead">Hours</div>
            <div class="divTableHead">Total Price</div>
          </div>
        </div>
        <div class="divTableBody post"
          v-for="(post, index) in posts"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"
          v-on:dblclick="viewPost(post._id)"
        >
          
          <div class="divTableRow"> 
            <div class="divTableCell"><button class="btn" v-on:click="show(post._id, post.ownID)">Delete</button></div>         
            <div class="divTableCell"><button class="btn" v-on:click="$router.push('Edit?id=' + post._id)">Edit</button></div>  
            <div class="divTableCell"><button class="btn" v-on:click="$router.push('insertinfo?id=' + post._id)">Message</button></div>        
            <div class="divTableCell">{{ post.ownID }}</div>
            <div class="divTableCell" v-if="moment(post.EventInfo.DateEvent, moment.ISO_8601, true).isValid()">{{ moment(post.EventInfo.DateEvent).format('DD.MM.YYYY') }}</div>
            <div class="divTableCell" v-else>{{ post.EventInfo.DateEvent }}</div>
            <div class="divTableCell">{{ post.EventInfo.EventLocation}}</div>
            <div class="divTableCell">{{ post.Client1Info.Client1Name + ' ' +  post.Client1Info.Client1Surname}}</div>
            <div class="divTableCell">{{ post.Client2Info.Client2Name + ' ' +  post.Client2Info.Client2Surname}}</div>
            <div class="divTableCell" v-if="moment(post.DateContact, moment.ISO_8601, true).isValid()">{{ moment(post.DateContact).format('DD.MM.YYYY') }}</div>
            <div class="divTableCell" v-else>{{ post.DateContact }}</div>
            <div class="divTableCell" v-if="moment(post.ContractInfo.ContractDate, moment.ISO_8601, true).isValid()">{{ moment(post.ContractInfo.ContractDate).format('DD.MM.YYYY') }}</div>
            <div class="divTableCell" v-else>{{ post.ContractInfo.ContractDate }}</div>
            <div class="divTableCell">{{ post.ContractInfo.NumberHours}}</div>
            <div class="divTableCell">{{ post.ContractInfo.TotalPrice}}€</div>
          </div>
        </div>  
      </div>      
    </div>  
  </div>

</template>

<script>
import PostService from '../PostService'
import moment from 'moment'


export default {
  /*props: [ 'windowWidth','windowHeight','msg'],
  props:{
      windowWidth:{
          type:Number,
          default:15
      },
      msg:{
          type:String,
          default:'hola'
      }
  },*/
  name: 'Home',
  /*
  template: `
  	<div>
  		<div>Execute only once '{{name}}', Not initialized again？？？</div>
    	<div>Current route '{{$route.params.name}}'</div>
    </div>`,
    */
  data() {
    return {
      //windowWidth: 0,
      //windowHeight: 0,
      joder:'JODER',
      AlreadyCustomer: false,
      ActivCustomer: false,
      moment:moment,
      name: this.$route.params.home,
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
      posttoview: '',
      error: '',
      ownID: '',
      //bridename: '',
      text: '',
      YearsArray: [],
      //YearChoosed: [new Date().getFullYear()]
      YearChoosed: []
    }
  },
  async created() {
    //this.id = this.$route.query.id;
    //this.windowWidth = 1234;
    try {
      this.posts = await PostService.getPosts(false, this.ActivCustomer, this.AlreadyCustomer, this.year);
      //this. ActivCustomer = true;
      this.Paramsschange();      

      this.posts.sort(this.compare);
      
      let i;
      let ii = 0;
      for (i = 0; i < this.posts.length; i++) {
        //text += cars[i] + "<br>";     
        this.years = this.posts[i].EventInfo.DateEvent.substring(0,4);
        //console.log(this.years);
        if(!this.YearsArray.includes(this.years)){
          this.YearsArray[ii] = this.years;
          ii++;
        }
      }
      this.YearsArray.sort();

    } catch(err) {
      this.error = err.message;
    }

  }
  /*,
  async mounted() {
     try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  }*/,
  
  methods: {

    compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const DateContactA = a.DateContact.toUpperCase();
      const DateContactB = b.DateContact.toUpperCase();

      let comparison = 0;
      if (DateContactA > DateContactB) {
        comparison = 1;
      } else if (DateContactA < DateContactB) {
        comparison = -1;
      }
      return comparison * -1 ;
    },
    /*
    async EditPost(id) {
      this.$router.push(`Edit?id=${id}`);
      
    },
    */

    async deletePost(id){
      await PostService.deletePost(id, '');
      this.posts = await PostService.getPosts();
      //this.$router.push('\/');
    },

    viewPost(id){      
      this.$router.push(`ViewCostumer?id=${id}`);
    },

    show (id = '', ownID = '') {
      //this.$modal.show('hello-world');
      
      this.$modal.show('dialog', {
        title: 'Delete Entry ' + ownID,
        text: 'Are you sure you want to delete customer and all its messages???',
        buttons: [
          {
            title: 'Delete',
            //handler: () => { alert('Woot!') }
            handler: () => { 
                this.deletePost(id); 
                this.hide(); }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => { this.hide(); } // Button click handler
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

    async Paramsschange() {
      try {
        //console.log('this.AlreadyCustomer: ',this.AlreadyCustomer);
        this.posts = await PostService.getPosts(false, this.ActivCustomer, this.AlreadyCustomer, this.YearChoosed);
        this.posts.sort(this.compare);
        //console.log(this.posts);
      } catch(err) {
        this.error = err.message;
      }
    } 

  }
}

</script>

<style scoped>

  div.search {
    margin-bottom: 60px;
    font-size: 14px;
  }

  div.search .search1 {
    float:left; 
    margin-right:50px;
  }

  div.search .search2 {
    float:left; 
  }

  .v--modal-overlay {
    background-color: rgba(255, 0, 0, .1);
  }

  .btn{
    display: inline-block;
    border: none;
    background: rgb(197, 197, 197);
    color: #fff;
    padding: 2px 5px;
    cursor: pointer;
  }

  .btn:hover{
    background: rgb(155, 155, 155);
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

  div.post {
    position: relative;
    border: 1px solid #5bd658;
    padding: 0px 10px 0px 10px;
    margin-bottom: 15px;
  }


  p.text {
    font-size: 14px;
    font-weight: 400;
  }

  div.blueTable {
  width: 100%;
  text-align: left;
  border-bottom: 1px solid rgb(226, 226, 226);
  }

  .divTable.blueTable .divTableCell, .divTable.blueTable .divTableHead {
    padding: 3px 3px;
    border-bottom: 1px solid rgb(226, 226, 226);
  }
  .divTable.blueTable .divTableBody .divTableCell {
    font-size: 13px;
    background: #ffffff;
  }
  .divTable.blueTable .divTableRow:nth-child(even) {
    /*background: #D0E4F5;*/
  }

  .divTable.blueTable .divTableHeading {
    background: #ffffff;
    /*
    background: -moz-linear-gradient(top, #949494 0%, #7e7e7e 66%, #707070 100%);
    background: -webkit-linear-gradient(top, #949494 0%, #7e7e7e 66%, #707070 100%);
    background: linear-gradient(to bottom, #949494 0%, #7e7e7e 66%, #707070 100%);
    border-bottom: 2px solid #444444;
    */
  }

  .divTable.blueTable .divTableHeading .divTableHead {
    font-size: 15px;
    /*font-weight: bold;*/
    color: rgb(0, 0, 0);
    /*border-left: 2px solid rgb(212, 212, 212);*/
  }

  .divTable.blueTable .divTableHeading .divTableHead:first-child {
    /*border-left: none;*/
  }

  .blueTable .tableFootStyle {
    /*
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    background: #D0E4F5;
    background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
    border-top: 2px solid #444444;
    */
  }
  .blueTable .tableFootStyle {
    font-size: 14px;
  }
  .blueTable .tableFootStyle .links {
    text-align: right;
  }
  .blueTable .tableFootStyle .links a{
    display: inline-block;
    background: #1C6EA4;
    color: #FFFFFF;
    padding: 2px 8px;
    border-radius: 5px;
  }
  .blueTable.outerTableFooter {
    border-top: none;
  }
  .blueTable.outerTableFooter .tableFootStyle {
    padding: 3px 5px; 
  }

  /* DivTable.com */
  .divTable{ display: table; }
  .divTableRow { display: table-row; }
  .divTableCell, .divTableHead { display: table-cell;}
  .divTableHeading { display: table-header-group;}
  .divTableFoot { display: table-footer-group;}
  .divTableBody { display: table-row-group;}

  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
