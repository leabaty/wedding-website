import mongoose from 'mongoose';

const giftSchema = mongoose.Schema({
    title: String,
    description: String,
    location: String,
    location_id: Number,
    price: Number,
    amount: Number,
    participants: Number,
    image_url: String,
}, { collection: 'WeddingGifts' })

const WeddingGifts = mongoose.model('WeddingGifts', giftSchema);

export default WeddingGifts;