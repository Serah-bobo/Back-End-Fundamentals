import { getAllContacts,createContact } from "../Controller/ContactController"
import express from "express"
const router=express.Router();
//get and post contacts

router.route("/")
.get(getAllContacts)
.post(createContact)
//
router.route("/:id")

export default router;


