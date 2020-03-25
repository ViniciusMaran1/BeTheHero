const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response)  {

        const ongs = await connection('ongs').select('*');
    
       return response.json(ongs);
    
}, // close index

    async create (request, response){

        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        }) // close await connection

        return response.json({ id });
    } // close create (request, response)
};