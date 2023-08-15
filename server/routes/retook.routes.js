import {Router } from 'express';

const router = Router();


import tookSchema from '../models/Took.js';


router.post('/retook',async (req,res) => {
    reTook(req,res);
});