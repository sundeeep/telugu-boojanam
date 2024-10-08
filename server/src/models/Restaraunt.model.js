import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
    restaurantName: {
        type: String,
        required: true
    },
    GSTINNumber: {
        type: String,
        required: true
    },
    fsaaiNumber: {
        type: String,
        required: true
    },
    restaurantStatus: {
        type: String,
        enum: ['opened', 'closed', 'tempororily_unavailable'],
        required: true
    }
}, {
    timestamps: true
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;