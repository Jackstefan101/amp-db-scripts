const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

let client, db

const query = async () => {
  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true })
    db = client.db('proofdex')

    const response = await db.collection('pairs').find().toArray()
    console.log(response)

  } catch (e) {
    console.log(e.message)
  } finally {
    client.close()
  }
}

query()