import { Document, Types } from "mongoose";

export interface BlogInterface extends Document {
    title: string;
    description: string;
    image: {
        data: Types.Buffer,
        contentType: string;
    }
}