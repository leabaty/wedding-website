import mongoose from 'mongoose';

const guestSchema = mongoose.Schema({
    firstname: String,
    lastName: String,
    phone: String,
    add_guest: Boolean,
    program: String,
}, { collection: 'GuestList' })

const GuestList = mongoose.model('GuestList', guestSchema);

export default GuestList;