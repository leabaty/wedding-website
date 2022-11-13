import mongoose from 'mongoose';

const participationSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    message: String,
    amount: Number,
    gift_id: String,
}, { collection: 'Participation' })

const Participation = mongoose.model('Participation', participationSchema);

export default Participation;