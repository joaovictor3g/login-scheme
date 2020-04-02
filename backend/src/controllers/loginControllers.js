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
        const { nome_login, email, senha, id_curso } = req.body;

        const matricula = generatePrimary();

        await connection('logins').insert({
            matricula,
            nome_login,
            email,
            senha,
            id_curso
        })
        return res.json({ matricula });
    },

    async listByIdLogged(req, res) {
        const { id } = req.params;

        const [login] = await connection('logins')
                    .where('logins.id', id)
                    .join('cursos', 'cursos.id', '=', 'logins.id_curso')
                    .join('disciplinas', 'cursos.id', '=', 'disciplinas.curso_id')
                    .select(['logins.*', 'cursos.nome_curso','cursos.turno', 'disciplinas.*'])
                

        return res.json(login);

    },

    async listAllCourses(req, res) {

        const courses = await connection('cursos')
                        .select('*');

        return res.json(courses);   
    }
};