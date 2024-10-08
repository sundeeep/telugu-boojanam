import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    addressTitle: {
        type: String,
        requied: true,
        default: "Home",
        unique: false
    },
    doorNumberOrFlatNumber: {
        type: String,
        requied: true,
        unique: false
    },
    buildingName: {
        type: String,
        requied: true,
        unique: false
    },
    roadName: {
        type: String,
        requied: true,
        unique: false
    },
    area: {
        type: String,
        requied: true,
        unique: false
    },
    corporation: {
        type: String,
        requied: true,
        unique: false
    },
    city: {
        type: String,
        requied: true,
        unique: false
    },
    pincode: {
        type: String,
        requied: true,
        unique: false
    },
    district: {
        type: String,
        requied: true,
        unique: false
    },
    state: {
        type: String,
        requied: true,
        unique: false
    },
    country: {
        type: String,
        requied: true,
        unique: false
    },
    curentLocationCoordinates: [
        {
            type: String,
            requied: true
        },
        {
            type: String,
            requied: true
        }
    ],
    directionsToReach: String
},{
    timestamps: true
});

const Address = mongoose.model("Address", addressSchema);
export default Address;