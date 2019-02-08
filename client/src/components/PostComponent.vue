<template>
  <div class="container">
    <h1>Latest Post</h1>
    <div class="create-post">
      <label for="create-post">Bride Name</label><br>
      <input type="text" v-model="bridename" placeholder="Bride Name"><br> 
      <label for="create-post">Surname</label><br>
      <input type="text" v-model="text" placeholder="Create a post"><br>     
      <button class="btn" v-on:click="createPost">Post!</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
      {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}      
      <p class="text">{{ post.text }}</p>
      <p class="text">{{ post.bridename }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
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
  methods: {
    async createPost() {
      await PostService.insertPost(this.bridename, this.text);
      //await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 div.create-post {
   text-align: left;
   max-width: 700px;
   margin-left: auto;
   margin-right: auto;
 }

  div.create-post input {
    /*float: left;*/
    width: 700px;
    height: 25px;
    margin: 5px 0 20px 0;
    padding:5px;
    border: 1px solid #ff8c8c;
    background-color: #f7f7f7;
    color: #000000;
    font-size: 16px;
     
  }

  div.create-post label {
    color: #919191;
    font-size: 18px;
    margin: 0 0 0 15px;
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

  div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #d1cee9;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
  }

  div.created-at {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: darkgreen;
    color: white;
    font-size: 13px;
  }

  p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
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
</style>
