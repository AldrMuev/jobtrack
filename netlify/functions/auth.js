const { connectToDatabase } = require('./mongodb');
const { IdentityApi } = require('@netlify/identity-widget');

exports.handler = async function(event, context) {
  const identity = new IdentityApi({
    url: process.env.NETLIFY_IDENTITY_URL,
    token: process.env.NETLIFY_IDENTITY_TOKEN
  });

  try {
    const { email, password } = JSON.parse(event.body);
    const db = await connectToDatabase();

    // Check if user exists
    const user = await db.collection('users').findOne({ email });
    
    if (event.httpMethod === 'POST') {
      if (user) {
        // Login
        const { token } = await identity.login(email, password);
        return {
          statusCode: 200,
          body: JSON.stringify({ token, user: { email, id: user._id } })
        };
      } else {
        // Register
        const { token } = await identity.signup(email, password);
        await db.collection('users').insertOne({ email, createdAt: new Date() });
        return {
          statusCode: 201,
          body: JSON.stringify({ token, user: { email } })
        };
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 