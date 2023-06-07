const Router  = require("express");
const where  = require("sequelize");

const router = Router();

const Todo = require('../models/todo.models');



//generacion de rutas


//>>>> get
router.get('/api/v1/todo', async (req, res) => {
    try {
        
        const object = await Todo.findAll({ 
            attributes: ["title", "description", "completed"],
            order: ["title"]
        })
        res.send(object)

    } catch (error) {
        res.status(400).json(error)
    }
})

//>>>> post
router.post('/api/v1/todo', async (req, res) => {
    try {

        const object = req.body;//object
        await Todo.create(object)//(object)
        res.status(201).json();//eliminar result

    } catch (error) {
        res.status(400).json(error)
    }
})


//>>>> delete
router.delete('/api/v1/todo/:id', async(req, res) => {
    try {

        const { id } = req.params;
        await Todo.destroy({
            where: { id }
        })
        res.status(204).send()

    } catch (error) {
        res.status(400).json(error);
    }
})

//>>>> put
router.put('/api/v1/todo/:id', async(req, res) => {
    try {

        const { id } = req.params;
        const data = req.body;
        await Todo.update(data, {where: {id}})
        res.status(204).send()
        
    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;