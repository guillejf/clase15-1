import { Router } from 'express';
import Contacts from '../DAO/mongo/contacts.mongo.js';
// import Contacts from '../DAO/memory/contacts.memory.js';

const contacts = new Contacts();
const router = Router();

router.get('/', async (req, res) => {
  const result = await contacts.get();
  res.send({ status: 'success', payload: result });
});

router.post('/', async (req, res) => {
  const contact = req.body;

  const result = await contacts.insert(contact);
  res.send({ status: 'success', payload: result });
});

export default router;
