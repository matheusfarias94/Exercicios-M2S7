const { Router } = require("express");
const CursoController = require("../controllers/CursoController");
const cursosRoutes = new Router();

cursosRoutes.post('/', CursoController.criar);
cursosRoutes.put('/:id', CursoController.atualizar);
cursosRoutes.delete('/:id', CursoController.deletar);
cursosRoutes.get('/:id', CursoController.capturar);
cursosRoutes.get('/', CursoController.capturarTodos);
module.exports = cursosRoutes;
