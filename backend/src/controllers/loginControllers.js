const connection = require('../database/connection');
const generatePrimary = require('../utils/generatePrimary');

module.exports = {
    async Logged(req, res) {
        const { matricula, senha } = req.body;

        const aluno = await connection('logins')
            .where('matricula', matricula)
            .where('senha', senha)
            .select('*');
        
        return res.json({ aluno });
    },

    async createLogin(req, res) {
        const { nome, email, senha, curso } = req.body;

        const matricula = generatePrimary();

        await connection('logins').insert({
            matricula,
            nome,
            email,
            senha,
            curso
        })
        return res.json({ matricula });
    },

    async listAll(req, res) {
        const all = await connection('logins').select('*');

        return res.json(all);

    }
};