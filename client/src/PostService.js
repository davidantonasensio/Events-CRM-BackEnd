import axios from 'axios'

//const url ='http://localhost:5000/api/posts/';
let url ='http://192.168.2.65:5000/api/posts/';


class PostService{

    // Get Post
    static getPosts(id=false, activ=false, customer=false, Years=[]){
        //console.log("anos",Years);
        //Years = ["2019"];
  
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
                //console.log('DATA1: ', data)           
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

    // Get Post
    static getMessages(ClientID){
        console.log("ClientID",ClientID);
        //Years = ["2019"];
        let url2 = url + 'messages';
        //console.log("url2", url2);

        
        return new Promise(async (resolve, reject)=> {
            try{
                //let lenghtYearsArray = Years.length;
                const res = await axios.get(url2, {
                    params: {
                        ClientID: ClientID,
                    }
                })                
                               
                const data = res.data;
                //console.log('DATA2 Messages: ', data)           
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
            kindofinsert='',
            post
        ){
            let url2 = '';
            console.log('post2: ', post);
            //console.log('kind of insert: ', kindofinsert);
        if(kindofinsert === 'insertinfo'){
            url2 = url + 'insertinfo';
        } else {
            url2 = url;
        }
        console.log('url2: ', url2)
        //console.log('in postservice 111: ', post2[0].CommentsInfo);
        //let CommentsInfo = post[0].CommentsInfo;
        
        return axios.post(url2,{
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