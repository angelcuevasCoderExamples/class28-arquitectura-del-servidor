const express = require('express');
const { port } = require('./config/config');
const { contactsRouter } = require('./routes/contacts.router');
const { productsRouter } = require('./routes/products.router');

const app = express(); 



//** middlewares */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//** routes */
app.use('/api/contacts', contactsRouter);
app.use('/api/products', productsRouter); 

app.listen(port, ()=>console.log(`Server up and running on port ${port}`))