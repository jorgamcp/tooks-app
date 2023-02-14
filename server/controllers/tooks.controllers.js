import mongoose from 'mongoose';
import Took from '../models/Took.js';
import tookSchema from '../models/Took.js';

export const getTooks = async (req, res) => {

  tookSchema.find()
    .then((took) => res.json(took))
    .catch((error) => res.json({ message: 'error fetching tooks from database' }))

}
export const searchTook = async (req, res) => {
  const tookSearched = await tookSchema.findById(req.params.id);

  if (tookSearched === null) {
    res.status(404).json({ message: `Not took with id ${req.params.id} found` })
  }
  else {
    res.json(tookSearched)
  }
}

export const createTook = async (req, res) => {

  const { account_id, content_took, display_name } = req.body;

  console.log(account_id);
  console.log(content_took);
  console.log(display_name);

  //var took = mongoose.model('Took',tookSchema,'tooks');

  const took = new Took({ ...req.body });
  const insertedTook = await took.save();


  return res.status(201).json({ message: 'took_created', insertedTook });
  // return res.status(201).json({message:'took_created',details:{account_id,content_took,display_name}});

}

export const updateTook = async (req, res) => {

  const { account_id, content_took, display_name } = req.body;
  let took = {};

  // si el id que me pasas por la url no coincide con el id del cuerpo del json, body, tenemos un problemon
  if (req.params.id !== req.body._id) {
    return res.status(400).json({ message: `Id took body param doesn't match.`, id_body: req.body._id, id_param: req.params.id });
  }


  took = await tookSchema.findByIdAndUpdate(req.params.id,{content_took:req.body.content_took});
  if (took === null) {
    res.status(404).json({ message: `Took with requested id ${req.body._id} was not found.` })
  }
  else {
    res.status(204).json({ took });

  }

}

export const deleteTook = async (req, res) => {

  const { account_id, content_took, display_name } = req.body;
  let took = {};



  took = await tookSchema.findByIdAndDelete(req.params.id);
  if (took === null) {
    res.status(404).json({ message: `Took with requested id ${req.body._id} was not found.` })
  }
  else {
    res.status(204).json({ took });

  }
}