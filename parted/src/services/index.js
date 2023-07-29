import { Contacts } from '../dao/factory.js';
import ContactService from './contacts.service.js';

export const ContactsService = new ContactService(new Contacts());
