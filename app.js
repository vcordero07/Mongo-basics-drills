// Get all
// Find the command that retrieves all restaurants.
db.restaurants.find()
db.myColection.find()
// Limit and sort
// Find the command that makes the first 10 restaurants appear when db.restaurants is alphabetically sorted by the name property.
db.restaurants.
find().
sort({
  name: 1
}).
limit(5);

// Get by _id
// Retrieve a single restaurant by _id from the restaurants collection. This means you'll first need to get the _id for one of the restaurants imported into the database.
599 a293e4f34a35deb11a06c
var documentId = ObjectId('599a293e4f34a35deb11a06c');
db.restaurants.findOne({
  _id: documentId
});

// Get by value
// Write a command that gets all restaurants from the borough of "Queens".
db.restaurants.
find({
  borough: "Queens"
}).
sort({
  name: 1
})
// Count
// Write a command that gives the number of documents in db.restaurants.
db.restaurants.count()
db.runCommand({
  count: 'restaurants'
})
// Count by nested value
// Write a command that gives the number of restaurants whose zip code value is '11206'. Note that this property is at document.address.zipcode, so you'll need to use dot notation to query on the nested zip code property.
db.runCommand({
  count: 'restaurants',
  query: {
    'address.zipcode': '11206'
  }
})
db.restaurants.
find({
  'address.zipcode': '11206'
}).
count()
// Delete by id
// Write a command that deletes a document from db.restaurants. This means you'll first need to get the _id for one of the restaurants imported into the database.
var documentId = ObjectId('599a293e4f34a35deb11a06c');
db.restaurants.find({
  _id: documentId
}).count();
db.restaurants.remove({
  _id: documentId
});
db.restaurants.find({
  _id: documentId
}).count();
// Update a single document
//Write a command that sets the name property of a document with a specific _id to 'Bizz Bar Bang'. Make sure that you're not replacing the existing document, but instead updating only the name property.
599 a293d4f34a35deb113f43
var documentId = ObjectId('599a293d4f34a35deb113f43');
db.restaurants.updateOne({
  _id: documentId
}, {
  $set: {
    name: "Bizz Bar Bang"
  }
});
db.restaurants.findOne({
  _id: documentId
});

//Update many documents
//Uh oh, two zip codes are being merged! The '10035' zip code is being merged with '10036'. Write a command that updates values accordingly.
db.restaurants.updateMany({
  'address.zipcode': '10035'
}, {
  $set: {
    'address.zipcode': '10036'
  }
});
