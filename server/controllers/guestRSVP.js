import express from 'express';

import GuestList from '../models/guestList.js';

const router = express.Router();

/** Get the RSVP format from one Guest */
export const getGuest = async (req, res) => { 
    const { phone } = req.body;

    try {
        const guest = await GuestList.findByPhoneNumber(phone);
        
        res.status(200).json(guest);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;