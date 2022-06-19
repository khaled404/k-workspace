import { Schema, model, models } from 'mongoose';

const UserScheme = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const user = models && models.user ? models.user : model('user', UserScheme);
export default user;
