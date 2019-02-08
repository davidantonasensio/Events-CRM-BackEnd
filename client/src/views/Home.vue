<template>
  <div class="container">
    <h1>List of Customers</h1>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="divTable blueTable">
        <div class="divTableHeading">
          <div class="divTableRow">
            <div class="divTableHead">ID</div>
            <div class="divTableHead">Wedding Date</div>
            <div class="divTableHead">Wedinng Location</div>
            <div class="divTableHead">Bride Name</div>
            <div class="divTableHead">Groom Name</div>
            <div class="divTableHead">Contact Date</div>
            <div class="divTableHead">Contract Date</div>
            <div class="divTableHead">Hours</div>
            <div class="divTableHead">Services</div>
            <div class="divTableHead">Total Price</div>
            <div class="divTableHead">Deposit</div>
            <div class="divTableHead">Public Permit</div>
            <div class="divTableHead">Source</div>
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
          <div class="divTableCell">{{ post.ownID }}</div>
          <div class="divTableCell">{{ post.WeddingInfo.DateWedding }}</div>
          <div class="divTableCell">{{ post.WeddingInfo.WeddingLocation}}</div>
          <div class="divTableCell">{{ post.BrideInfo.BrideName + ' ' +  post.BrideInfo.BrideSurname}}</div>
          <div class="divTableCell">{{ post.GroomInfo.GroomName + ' ' +  post.GroomInfo.GroomSurname}}</div>
          <div class="divTableCell">{{ post.DateContact }}</div>
          <div class="divTableCell">{{ post.ContractInfo.ContractDate }}</div>
          <div class="divTableCell">{{ post.ContractInfo.NumberHours}}</div>
          <div class="divTableCell">{{ post.ContractInfo.OrderedServices}}</div>
          <div class="divTableCell">{{ post.ContractInfo.TotalPrice}}€</div>
          <div class="divTableCell">{{ post.ContractInfo.DepositToPay}}€</div>
          <div class="divTableCell" v-if="post.ContractInfo.PermisionPublic">Yes</div>
          <div class="divTableCell" v-else="post.ContractInfo.PermisionPublic">No</div>
          <div class="divTableCell">{{ post.Source}}</div>
        </div>
    </div>
</div>

      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService'


export default {
  name: 'Home',
  template: `
  	<div>
  		<div>Execute only once '{{name}}', Not initialized again？？？</div>
    	<div>Current route '{{$route.params.name}}'</div>
    </div>`,
  data() {
    return {
      name: this.$route.params.home,
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
      posttoview: '',
      error: '',
      ownID: '',
      bridename: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  async mounted() {
     try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  
  methods: {
    async createPost() {
      await PostService.insertPost(this.bridename, this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    viewPost(id){      
      this.$router.push(`ViewCostumer?id=${id}`);
    }

  }
}

</script>

<style scoped>
  div.container {
    max-width: 95%;
    margin: 0 auto;
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
  border-bottom: 1px solid rgb(194, 194, 194);
}

.divTable.blueTable .divTableCell, .divTable.blueTable .divTableHead {
  padding: 10px 5px;
  border-bottom: 1px solid rgb(194, 194, 194);
}
.divTable.blueTable .divTableBody .divTableCell {
  font-size: 13px;
}
.divTable.blueTable .divTableRow:nth-child(even) {
  /*background: #D0E4F5;*/
}

.divTable.blueTable .divTableHeading {
  background: #cccccc;
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
  color: rgb(131, 131, 131);
  border-left: 2px solid rgb(212, 212, 212);
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

</style>
