import express from "express";

import { getGuest } from "../controllers/guestRSVP.js";
import { getGifts, updateGift } from "../controllers/weddingGifts.js";
import { saveParticipation } from "../controllers/participation.js";

const router = express.Router();

router.get("/getGuest", getGuest);
router.post("/saveParticipation", saveParticipation);
router.get("/getGifts", getGifts);
router.patch("/updateGift/:id", updateGift);

export default router;
