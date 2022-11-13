import express from "express";
import mongoose from "mongoose";

import weddingGifts from "../models/weddingGifts.js";

const router = express.Router();

/** Gives back the list of gifts and their details */
export const getGifts = async (req, res) => {
  try {
    const gifts = await weddingGifts.find();

    res.status(200).json(gifts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/** Updates a gift post with the new participated amount and the participants */
export const updateGift = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No gift with id: ${id}`);

  const updatedGift = { amount, _id: id };

  await weddingGifts.findByIdAndUpdate(
    id,
    { $inc: { participants: 1, amount: amount } },
    { new: true }
  );

  res.json(updatedGift);
};

export default router;
