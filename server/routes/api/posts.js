const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts

//if(this.params.id){
//router.get('/:id', async (req, res) => {
router.get('/', async (req, res) => {
  //console.log(`ttttTTTTTT`);
  //console.log(req.params.id);
  
  const posts = await loadPostsCollection();
  
  res.send(await posts.find({}).toArray());

  //res.send(await posts.find({_id: ObjecID("5c52d5f9ebb7c30c5296fc4f") }).toArray());
  //res.send(await posts.find({_id: new mongodb.ObjectID(req.params.id) }).toArray());
  //res.send(await posts.find({_id: new mongodb.ObjectID("5c51ca86d975ac0c139ab259") }).toArray());
  //res.send(await posts.find({ownID: "1234567890"}).toArray());
  //await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  
});
//};


//router.get('/id=1', async (req, res) => {
router.get('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({_id: new mongodb.ObjectID(req.params.id) }).toArray());
  //res.send("blablabla");
});




// Add Post
router.post('/', async (req, res) => {
  let inserted = '';
  const posts = await loadPostsCollection();

    await posts.insertOne({
      ownID: req.body.post[0].ownID,
      AlreadyCustomer: req.body.post[0].AlreadyCustomer,
      DateContact: req.body.post[0].DateContact,
      Source: req.body.post[0].Source,
      WeddingInfo: { 
                    DateWedding: req.body.post[0].WeddingInfo.DateWedding, 
                    WeddingLocation: req.body.post[0].WeddingInfo.WeddingLocation
                  },
      BrideInfo: {
                    BrideName: req.body.post[0].BrideInfo.BrideName, 
                    BrideSurname: req.body.post[0].BrideInfo.BrideSurname, 
                    BrideTel: req.body.post[0].BrideInfo.BrideTel, 
                    BrideEmail: req.body.post[0].BrideInfo.BrideEmail},
      GroomInfo: {
                    GroomName: req.body.post[0].GroomInfo.GroomName, 
                    GroomSurname: req.body.post[0].GroomInfo.GroomSurname, 
                    GroomTel: req.body.post[0].GroomInfo.GroomTel, 
                    GroomEmail: req.body.post[0].GroomInfo.GroomEmail},
      CoupleAddress: req.body.post[0].CoupleAddress, 
      ContractInfo: {  
                    ContractDate: req.body.post[0].ContractInfo.ContractDate,
                    OrderedServices: req.body.post[0].ContractInfo.OrderedServices,
                    OrderedProducts: req.body.post[0].ContractInfo.OrderedProducts,
                    NumberHours: req.body.post[0].ContractInfo.NumberHours,
                    TotalPrice: req.body.post[0].ContractInfo.TotalPrice,
                    DepositToPay: req.body.post[0].ContractInfo.DepositToPay,
                    DepositPayed: req.body.post[0].ContractInfo.DepositPayed,
                    PermisionPublic: req.body.post[0].ContractInfo.PermisionPublic  
      },
      Comments: req.body.post[0].Comments,
    },function(error, response){    

    if(error) {
        console.log('Error occurred while inserting');
        res.status(201).send("11111111");
       // return 
    } else {
       console.log('inserted record', response.ops[0]);
       res.status(201).send(response.ops[0]._id);
      // return 
    }

    });

  //res.status(201).send("11111111");
});


// update Post
router.post('/update', async (req, res) => {
  //res.status(201).send(req.body.post[0].ownID);
  //res.status(201).send("lalalalalalalala");

  
  const posts = await loadPostsCollection();

    await posts.updateOne({
      "_id": new mongodb.ObjectID(req.body.post[0].id)
    },
      {$set: {
      ownID: req.body.post[0].ownID,
      AlreadyCustomer: req.body.post[0].AlreadyCustomer,
      DateContact: req.body.post[0].DateContact,
      Source: req.body.post[0].Source,
      WeddingInfo: { 
                    DateWedding: req.body.post[0].WeddingInfo.DateWedding, 
                    WeddingLocation: req.body.post[0].WeddingInfo.WeddingLocation
                  },
      BrideInfo: {
                    BrideName: req.body.post[0].BrideInfo.BrideName, 
                    BrideSurname: req.body.post[0].BrideInfo.BrideSurname, 
                    BrideTel: req.body.post[0].BrideInfo.BrideTel, 
                    BrideEmail: req.body.post[0].BrideInfo.BrideEmail},
      GroomInfo: {
                    GroomName: req.body.post[0].GroomInfo.GroomName, 
                    GroomSurname: req.body.post[0].GroomInfo.GroomSurname, 
                    GroomTel: req.body.post[0].GroomInfo.GroomTel, 
                    GroomEmail: req.body.post[0].GroomInfo.GroomEmail},
      CoupleAddress: req.body.post[0].CoupleAddress, 
      ContractInfo: {  
                    ContractDate: req.body.post[0].ContractInfo.ContractDate,
                    OrderedServices: req.body.post[0].ContractInfo.OrderedServices,
                    OrderedProducts: req.body.post[0].ContractInfo.OrderedProducts,
                    NumberHours: req.body.post[0].ContractInfo.NumberHours,
                    TotalPrice: req.body.post[0].ContractInfo.TotalPrice,
                    DepositToPay: req.body.post[0].ContractInfo.DepositToPay,
                    DepositPayed: req.body.post[0].ContractInfo.DepositPayed,
                    PermisionPublic: req.body.post[0].ContractInfo.PermisionPublic  
      },
      Comments: req.body.post[0].Comments,
    }
  })
  .then(result => {
    // result.matchedCount === 1
    //res.status(201).send(req.body.id);
    res.status(201).send(req.body.post[0].id);
  }).catch((err) => {
    res.status(201).send(err);
  });

  //res.status(201).send("Ehhhhhhhh");
  
});



// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});




async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  //('mongodb://192.168.2.65:27017/wedding-CRM',
  ('mongodb://192.168.2.65:27017/events',
    {
      useNewUrlParser: true
    }
  );

  //return client.db('wedding-CRM').collection('posts');
  return client.db('events').collection('clients');
}

module.exports = router;
