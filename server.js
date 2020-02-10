const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/db');
const app = require('./app');

//connect to db
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} & listening on port ${process.env.PORT}`
  );
});
