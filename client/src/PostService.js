import axios from 'axios'

//const url ='http://localhost:5000/api/posts/';
let url ='http://192.168.2.65:5000/api/posts/';


class PostService{

    // Get Post
    static getPosts(id=false){
        let url2 = url;  
        let cambio = false;

        if(id){
            url2 = url + id;
            cambio = true;
        }else if(cambio){
            url2 = url;
        }
        //console.log(id);
        //console.log('Get Post: ', url2);
        return new Promise(async (resolve, reject)=> {
            try{
                //console.log(id);
                const res = await axios.get(url2);                
                const data = res.data;
                //console.log(data);

                resolve(
                    data.map(post =>({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    })) 
                )
                
            }   
                catch(err){
                //console.log('EEEEEEEEEEE');
                //console.log(err);
                reject(err);
            }
        }) 
    }


    // Insert Post
    static insertPost(
            post
        ){
        return axios.post(url,{
            post
        }).then(response =>{
            //callback(response.data.message);
            return response.data;
          }).catch(err =>{
            return err;
          });
    }


    // Update Post
    static updatePost(
        post
    ){
    let url3 = url + 'update';
    
    return axios.post(url3,{
        post
    }).then(response =>{
        //callback(response.data.message);
        return response.data;
      }).catch(err =>{
        return err;
      });
      
}

    // Delete Post
    static deletePost(id) {
        console.log("en clase: ", id);
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;