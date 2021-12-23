import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT, SECRET } = process.env;

export default {
  env: ENV,
  port: PORT,
  secret: SECRET,
};
