const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async index (req, res) {
    const ongs = await connection('bth_ongs').select('*');
    return res.json(ongs);
  },
  async create(req,res){
    const {name, email, number, city, uf} = req.body;
    const id = generateUniqueId();
    const whatsapp = "+55" + number;
    await connection('bth_ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id });
  }
};
