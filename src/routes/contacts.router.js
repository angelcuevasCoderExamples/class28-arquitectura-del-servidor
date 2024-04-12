const express = require('express');
const ContactDTO = require('../dao/DTOs/contacts.dto');
const { contactsService } = require('../repositories');

const router = express.Router();

router.get('/', async (req, res)=>{
    try {
        const result = await contactsService.get();
        res.send({status:'success', payload: result }) 
    } catch (error) {
        res.status(500).send({status:'error', error: error })
    }
})

router.get('/:id', async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await contactsService.getById(id);
        res.send({status:'success', payload: result }) 
    } catch (error) {
        res.status(500).send({status:'error', error: error })
    }
})

router.post('/', async (req, res)=>{
    try {
        const contact = new ContactDTO(req.body)
        const result = await contactsService.create(contact);
        res.send({status:'success', payload: result }) 
    } catch (error) {
        res.status(500).send({status:'error', error: error })
    }
})

router.put('/:id', async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await contactsService.update(id, req.body);
        res.send({status:'success', payload: result }) 
    } catch (error) {
        res.status(500).send({status:'error', error: error })
    }
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params;
    try {
        const result = await contactsService.delete(id);
        res.send({status:'success', payload: result }) 
    } catch (error) {
        res.status(500).send({status:'error', error: error })
    }
})

module.exports = {
    contactsRouter: router
}