//Pacote de testes
const request = require('supertest');

//Aplicação
const app = require('../../src/app');

//Conexão ao banco de dados
const connection = require('../../src/database/connection');

//Descrição do teste
describe('ONG', ()=>{

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    
    afterAll(async () => {
        await connection.destroy();
    })
    
    
    it('Should be able to create a new ong', async ()=>{
        const data = {
            name:"Test",
            email:"contato@teste.com.br",
            whatsapp:"11969187148",
            city:"Guarulhos",
            uf:"SP"
        }

        // Create a new ONG
        const response = await request(app).post('/ongs').send(data);
        
        //Testes
        //expectativa().Ter...();
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        
        // Conect with that Ong
        const session = await request(app).post('/sessions').send({
            id: response.body.id,
        });
        
        expect(session.body).toHaveProperty('name');
        expect(session.body.name).toBe(data.name);
        
        //Create a case
        const newCase =  await request(app).post('/incidents').set({
            authorization: response.body.id,
        }).send({
            title: "Caso Teste4",
            description:"Case 1 for test (I know that this is the second...)",
            value: 120.00
        });
        expect(newCase.body).toHaveProperty('id');
    })
    
    
})