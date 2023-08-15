import mongoose from 'mongoose';
import tookSchema from '../models/Took.js';
import Took from '../models/Took.js';

export const reTook = async (req, res) => {

    const { account_id, content_took, display_name } = req.body; // Esto se llama destructuring

    const took = new Took({ ...req.body });

    console.log(account_id);
    console.log(content_took);
    console.log(display_name);

    let response_error = { message: 'missing fields' };

    console.log(Object.keys(req.body));




    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {

        console.log(req.body);




        return res.status(400).json({ message: 'missing fields' })
    }




    try {

        //const insertedTook = await took.save();
    } catch (error) {
        return res.status(500).json({ message: 'Error creating took', details: { error } })
    }


    return res.status(201).json({ message: 'took_created', took });


}



