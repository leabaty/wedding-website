import express from "express";

import participationMsg from "../models/participationMsg.js";

const router = express.Router();

/** Saves a new participation to a gift */
export const saveParticipation = async (req, res) => {
  const { firstname, lastname, message, amount, gift_id } = req.body;

  const newParticipation = new participationMsg({
    firstname,
    lastname,
    message,
    amount,
    gift_id,
  });

  try {
    await newParticipation.save();

    res.status(201).json(newParticipation);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
