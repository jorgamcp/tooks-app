import { Router } from "express";
import { createTook, deleteTook, getTooks, searchTook, updateTook } from "../controllers/tooks.controllers.js";
const router = Router();

// TESTING
import tookSchema from '../models/Took.js';


router.get('/tooks', (req, res) => {
    // res.json({'message':'Tooks from database in took.routes.js!'})
    tookSchema.find({})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: "Not took with id found" }));

    //return res.json(tooks);
});

router.get('/tooks/:id', async (req, res) => {
  await searchTook(req,res);
});

router.post('/tooks', (req, res) => createTook(req, res))

router.put('/tooks/:id', async (req, res) => {

    await updateTook(req, res);

    //res.send('new took updated')
});

router.delete('/tooks/:id', (req, res) => deleteTook(req,res))

export default router;