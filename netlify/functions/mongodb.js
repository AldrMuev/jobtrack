const { MongoClient } = require('mongodb');

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const uri = process.env.MONGODB_URI || 'mongodb+srv://aldarbmuev:db_password@cluster0.lvbjmtx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  const dbName = process.env.MONGODB_DB || 'jobtrack';

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(dbName);
  cachedDb = db;
  return db;
}

module.exports = { connectToDatabase }; 