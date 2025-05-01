const { connectToDatabase } = require('./mongodb');

exports.handler = async function(event, context) {
  try {
    const db = await connectToDatabase();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully connected to MongoDB!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 