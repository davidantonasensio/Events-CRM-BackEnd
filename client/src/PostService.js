import axios from 'axios'

//const url ='http://localhost:5000/api/posts/';
let url ='http://192.168.2.65:5000/api/posts/';


class PostService{

    // Get Post
    static getPosts(id=false, activ=false, customer=false, Years=[]){
        //console.log("cliente 111: ", customer);
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
    static getMessages(ID, howmany='all'){
        //console.log("ID: ",ID);
        //console.log("howmany: ",howmany);
        //Years = ["2019"];
        let url2 = url + 'messages';
        //console.log("url2", url2);

        
        return new Promise(async (resolve, reject)=> {
            try{
                //let lenghtYearsArray = Years.length;
                const res = await axios.get(url2, {
                    params: {
                        ID: ID,
                        howmany: howmany
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
    static insertPost(kindofinsert='', post){
        let url2 = '';
        
        if(kindofinsert === 'insertinfo'){
            url2 = url + 'insertinfo';
        } else {
            url2 = url;
        }
                
        return axios.post(url2,{
            post
        }).then(response =>{
            return response.data;
        }).catch(err =>{
            return err;
        });
        
        
    }


    // Update Post
    static updatePost(post, kindofupdate=''){
        let url3 = ''
        if(kindofupdate !== 'updateinfo'){
            url3 = url + 'update';
        } else {
            url3 = url + 'updatemessages';
        }
        //console.log("post: ", post);   
        //console.log("url: ", url3);

        
        
        //return axios.post(url3,{
        const res = axios.post(url3,{
            post
        }).then(response =>{
            return response.data;
        }).catch(err =>{
            return err;
        });

        //console.log('res: ', res)
        return res;
        
}

    // Delete Post
    static deletePost(id, idMessage = '') {
        //console.log("id: ", id);
        //console.log("idMessage: ", idMessage);

        let url3 = url;
        //console.log('url3: ', url3);

        //console.log("idMessage2: ", idMessage);

        const res = axios.delete(url3,{
            params: {
                id: id,
                idMessage: idMessage
            }
        }).then(response =>{
            //console.log('res1: ', response.data)
            return response.data;                
        }).catch(err =>{
            //console.log('res2 err: ', err)
            return err;
        });
            
    }
}

export default PostService;