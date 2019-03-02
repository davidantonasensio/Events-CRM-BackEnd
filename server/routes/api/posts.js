const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection('events', 'clients');
  //res.send('activ: ' + req.query.activ + ', customer: ' + req.query.customer); 
  
  let lenghtYearsArray
  if(typeof req.query.Years !== 'undefined'){ 
    //res.send("AAAAAAAAA");
    lenghtYearsArray = req.query.Years.length;
  } else {
    //res.send("BBBBB");
    lenghtYearsArray = 0;
  }


  

  // search for one entry by its id
  let JsonArray1 = [];
  let JsonArray2 = [];
  if(typeof req.query.id !== 'undefined' &&  req.query.id !== 'false'){
    //res.send("9999999");
    JsonArray1 = await posts.find({_id: new mongodb.ObjectID(req.query.id) }).toArray() 


    // Search for entries depending of is activ, is customer and the years of the events
  } else if(req.query.activ === 'true' ||  req.query.customer === 'true')  {
      //res.send("8888888888");
      if(req.query.activ === 'true'){ activ = true} else {activ=false}
      if(req.query.customer === 'true'){ customer = true} else {customer=false}

      //res.send("customer22: " + customer);
      // Search for entries for the selected Years
      if(lenghtYearsArray !== 0){
        for (i = 0; i < lenghtYearsArray; i++) {
          JsonArray2 = await posts.find({
            "EventInfo.DateEvent": {
              $gte: req.query.Years[i] + "-01-01T00:00:00.000Z",
              $lte: req.query.Years[i] + "-12-31T00:00:00.000Z"
            },
            ActivCustomer: activ,
            AlreadyCustomer: customer
          }).toArray();
          JsonArray1 = JsonArray1.concat(JsonArray2);
        }

      // Search just for is activ and is customer, Years are not selected  
      } else {
        //res.send("pppppppppppp");
        JsonArray1 = await posts.find({
          ActivCustomer: activ,
          AlreadyCustomer: customer
        }).toArray();
      }


  // Search for selectios of Years, is activ or is customer are not selected
  } else if(lenghtYearsArray !== 0){
      //res.send("77777777777");
      for (i = 0; i < lenghtYearsArray; i++) {
        JsonArray2 = await posts.find({
          "EventInfo.DateEvent": {
            $gte: req.query.Years[i] + "-01-01T00:00:00.000Z",
            $lte: req.query.Years[i] + "-12-31T00:00:00.000Z"
          }
        }).toArray();
        JsonArray1 = JsonArray1.concat(JsonArray2);
      }

  // Just select everything, no filter is selected
  } else {
      JsonArray1 = await posts.find({}).toArray()
      //res.send("666666666666");
  }

  res.send(JsonArray1);

});
// End of Get Posts


// Get Posts
router.get('/messages', async (req, res) => {
  //res.send("6666666666661: " + req.body.howmany);
  //res.send("666666666666: " + req.query.ID);
  const posts = await loadPostsCollection('events', 'infos');

  if(req.query.howmany === 'all'){
    Messages = await posts.find({
      idCustomer: req.query.ID
    }).toArray();
  } else {
    Messages = await posts.find({_id: new mongodb.ObjectID(req.query.ID) }).toArray() 
  }

  res.send(Messages);

});



// Add Post with customer information
router.post('/', async (req, res) => {
  let inserted = '';
  const posts = await loadPostsCollection('events', 'clients');

    await posts.insertOne({
      ownID: req.body.post[0].ownID,      
      ActivCustomer: req.body.post[0].ActivCustomer,
      AlreadyCustomer: req.body.post[0].AlreadyCustomer,
      DateContact: req.body.post[0].DateContact,
      Source: req.body.post[0].Source,
      EventInfo: { 
                    DateEvent: req.body.post[0].EventInfo.DateEvent, 
                    EventLocation: req.body.post[0].EventInfo.EventLocation
                  },
      Client1Info: {
                    Client1Name: req.body.post[0].Client1Info.Client1Name, 
                    Client1Surname: req.body.post[0].Client1Info.Client1Surname, 
                    Client1Tel: req.body.post[0].Client1Info.Client1Tel, 
                    Client1Email: req.body.post[0].Client1Info.Client1Email},
      Client2Info: {
                    Client2Name: req.body.post[0].Client2Info.Client2Name, 
                    Client2Surname: req.body.post[0].Client2Info.Client2Surname, 
                    Client2Tel: req.body.post[0].Client2Info.Client2Tel, 
                    Client2Email: req.body.post[0].Client2Info.Client2Email},
      Address: req.body.post[0].Address, 
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
    },
    function(error, response){    

      if(error) {
          console.log('Error occurred while inserting');
          res.status(201).send(error);
        // return 
      } else {
        console.log('inserted record', response.ops[0]);
        res.status(201).send(response.ops[0]._id);
        // return 
      }

    });

  //res.status(201).send("11111111");
});


// Add Post with customer information
router.post('/insertinfo', async (req, res) => {
  //res.send('id: ' + req.body.post.id);
  //res.status(201).send(req.body.post.id);

  const posts = await loadPostsCollection('events', 'infos');  
  
    await posts.insertOne({
      idCustomer: req.body.post[0].id,
      ownID: req.body.post[0].ownID,
      ContactPerson: req.body.post[0].ContactPerson,
      DateInfo: req.body.post[0].DateInfo,
      ChanelChoosed: req.body.post[0].ChanelChoosed,
      CommentsInfo: req.body.post[0].CommentsInfo
      //CommentsInfo: req.body.CommentsInfo,
      //cojones: 'pues no'
    },
    function(error, response){

      if(error) {
          //console.log('Error occurred while inserting');
          res.status(201).send(error);
        // return 
      } else {
        //console.log('inserted record', response.ops[0]);
        res.status(201).send(response.ops[0]._id);
        //res.status(201).send('111111111111');
        // return 
      }

    });
  
});



// update Post
router.post('/update', async (req, res) => {
  //res.status(201).send(req.body.post[0].ownID);
  const posts = await loadPostsCollection('events', 'clients');

    await posts.updateOne({
      "_id": new mongodb.ObjectID(req.body.post[0].id)
    },
      {$set: {
      ownID: req.body.post[0].ownID,
      ActivCustomer: req.body.post[0].ActivCustomer,
      AlreadyCustomer: req.body.post[0].AlreadyCustomer,
      DateContact: req.body.post[0].DateContact,
      Source: req.body.post[0].Source,
      EventInfo: { 
                    DateEvent: req.body.post[0].EventInfo.DateEvent, 
                    EventLocation: req.body.post[0].EventInfo.EventLocation
                  },
      Client1Info: {
                    Client1Name: req.body.post[0].Client1Info.Client1Name, 
                    Client1Surname: req.body.post[0].Client1Info.Client1Surname, 
                    Client1Tel: req.body.post[0].Client1Info.Client1Tel, 
                    Client1Email: req.body.post[0].Client1Info.Client1Email},
      Client2Info: {
                    Client2Name: req.body.post[0].Client2Info.Client2Name, 
                    Client2Surname: req.body.post[0].Client2Info.Client2Surname, 
                    Client2Tel: req.body.post[0].Client2Info.Client2Tel, 
                    Client2Email: req.body.post[0].Client2Info.Client2Email},
      Address: req.body.post[0].Address, 
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

// update Post

router.post('/updatemessages', async (req, res) => {
  //res.status(201).send('YAAAAAA: ' + req.body.post[0]._id);
  //res.status(201).send('YAAAAAA: ' + req.body.post[0]);
  //res.status(201).send('01010101010101');

  const posts = await loadPostsCollection('events', 'infos');

  await posts.updateOne({
    "_id": new mongodb.ObjectID(req.body.post[0]._id)
    //"_id": req.body.post[0]._id
  },
  { $set: {
      idCustomer: req.body.post[0].idCustomer,
      ownID: req.body.post[0].ownID,
      ContactPerson: req.body.post[0].ContactPerson,
      DateInfo: req.body.post[0].DateInfo,
      ChanelChoosed: req.body.post[0].ChanelChoosed,
      CommentsInfo: req.body.post[0].CommentsInfo,
    }
  })
  .then(result => {
    // result.matchedCount === 1
    //res.status(201).send(req.body.id);
    res.status(201).send(req.body.post[0].idCustomer);
  }).catch((err) => {
    res.status(201).send(err);
  });

});




// Delete Post
//router.delete('/:id', async (req, res) => {
router.delete('/', async (req, res) => {
  //res.status(201).send('1212121212');
  //res.status(201).send('1212121212: ' + req.query.idMessage);

  let posts = '';
  //res.status(201).send('Delete message: ' + req.query.idMessage);

  if(req.query.idMessage === ''){
    //res.status(201).send('1212121212: ' + req.query.id);
    posts = await loadPostsCollection('events', 'clients');
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.query.id) })
    .then(result => {
      //res.status(201).send('Delete Entry: ' + req.query.idMessage);
    }).catch((err) => {
      res.status(201).send(err);
    });

    posts = await loadPostsCollection('events', 'infos');
    await posts.remove({ idCustomer: req.query.id })
    .then(result => {
      res.status(201).send('Delete Entry and Messages: ' + req.query.id);
    }).catch((err) => {
      res.status(201).send(err);
    });

  } else {

    res.status(201).send('5555555555555: ' + req.query.idMessage);
    posts = await loadPostsCollection('events', 'infos');
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.query.idMessage) })
    .then(result => {
      res.status(201).send('Delete message: ' + req.query.idMessage);
    }).catch((err) => {
      res.status(201).send(err);
    });

  }
  

  /*
  const posts = await loadPostsCollection('events', 'clients');
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
  .then(result => {
    res.status(201).send();
  }).catch((err) => {
    res.status(201).send(err);
  });
  */
  
  //res.status(200).send();
});




async function loadPostsCollection(db='events', collection='clients') {
  const client = await mongodb.MongoClient.connect
  //('mongodb://192.168.2.65:27017/wedding-CRM',
  ('mongodb://192.168.2.65:27017/events',
    {
      useNewUrlParser: true
    }
  );

  //return client.db('wedding-CRM').collection('posts');
  return client.db(db).collection(collection);
}

module.exports = router;
