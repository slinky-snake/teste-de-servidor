import express from 'express'

const router = express.Router();
router.post('/cadastro', (req, res) => {
    const user = req.body;
    res.status(201).json({
        mensagem: `Usuário ${user.nome} cadastrado com sucesso!`,
        usuario: user
    });
})
export default router