import mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
import { Identifier } from '../types';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, default: 'unknown' },
	socketId: { type: String, default: null },
	roomId: { type: String, default: '5ed9f5f976f1561d04f1caa9' },
	vote: { type: Number, default: null },
});

export interface User extends Document {
	name?: string;
	socketId: Identifier;
	roomId: Identifier;
	vote: number | null;
}
export interface UserModel extends Model<User> {}

export const User = mongoose.model<User, UserModel>('User', userSchema);