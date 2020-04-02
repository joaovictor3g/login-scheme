const connection = require('../database/connection');
const generatePrimary = require('../utils/generatePrimary');

module.exports = {
    async Logged(req, res) {
        const { matricula, senha } = req.body;

        const [id] = await connection('logins')
            .where('matricula', matricula)
            .where('senha', senha)
            .select('id');
        
        return res.json(id);
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

    async listByIdLogged(req, res) {
        const { id } = req.params;

        const [all] = await connection('logins')
                    .where('id', id)
                    .select('*');

        return res.json(all);

    }
};