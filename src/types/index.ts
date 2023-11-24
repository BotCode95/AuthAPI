import { Types, Schema } from 'mongoose'


export interface JWTToken {
    user_id: string;
    groups: Schema.Types.ObjectId[];
    role: Schema.Types.ObjectId;
}