import { Document } from "mongoose"

export interface HotelModel extends Document {
    name: string;
    content: string;
    price: number;
    image: {
        url: string;
    };
    location: string;
}