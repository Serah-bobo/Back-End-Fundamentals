import Contact from "../Models/ContactModel";
import { Request,Response } from "express";

export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
    try{
        const contacts=await Contact.find()
        res.status(200).json(contacts)
    }catch(err){
        res.status(500).json({message: (err as Error ).message})
    }
}
//create a new contact
 export const createContact=async(req: Request, res: Response): Promise<void>=>{
    const {name, email, phone}=req.body
    try{
        const newContact=new Contact({name, email, phone})
        await newContact.save()
        res.status(201).json(newContact)
    }catch(err){
        res.status(400).json({message: (err as Error).message})
    }
 }