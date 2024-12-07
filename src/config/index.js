require('dotenv').config();

const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || 'development',
  // Add other configuration variables as needed
};

module.exports = { config };
