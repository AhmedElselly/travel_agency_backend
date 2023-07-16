import mongoose, { Schema } from 'mongoose';

export const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      url: String
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number
    },
    reviews: {
      type: Number
    },
    state: {
      type: String
    }
  },
  {
    timestamps: true,
  },
);

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
