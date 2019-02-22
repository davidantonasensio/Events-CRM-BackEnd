import axios from 'axios'

//const url ='http://localhost:5000/api/posts/';
let url ='http://192.168.2.65:5000/api/posts/';


class PostService{

    // Get Post
    static getPosts(id=false, activ=false, customer=false, Years=[]){
  
        return new Promise(async (resolve, reject)=> {
            try{
                let lenghtYearsArray = Years.length;
                const res = await axios.get(url, {
                    params: {
                        id: id,
                        activ: activ,
                        customer: customer,
                        Years
                    }
                })
                
                               
                const data = res.data;
                //console.log('DATA: ', data)           
                resolve(
                    data.map(post =>({
                        ...post
                    })) 
                )                
            }   
                catch(err){
                reject(err);
            }
        }) 
        
        
    }


    // Insert Post
    static insertPost(
            post
        ){
            console.log(post);
        return axios.post(url,{
            post
        }).then(response =>{
            return response.data;
          }).catch(err =>{
            return err;
          });
    }


    // Update Post
    static updatePost(post){
    let url3 = url + 'update';
    //console.log("post: ", post);   

    return axios.post(url3,{
        post
    }).then(response =>{
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