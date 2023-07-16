import { Document } from "mongoose";

export class CreateHotelDto extends Document {
    name: string;
    content: string;
    location: string;
    price: number;
}
