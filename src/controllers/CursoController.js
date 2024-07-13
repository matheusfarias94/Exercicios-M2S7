const Curso = require("../models/Curso");

class CursoController {
  async criar(request, response) {
    try {
      const dados = request.body;
      if (!dados.nome || !dados.duracao) {
        console.log("Todos os campos devem ser preenchidos");
      } else {
        const curso = await Curso.create(dados);
        response.status(201).json(curso);
      }
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "Houve um erro na criação do curso", error });
    }
  }
  async atualizar(request, response) {
    try {
      const { id } = request.params;
      const dados = request.body;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        response.status(404).json({ mensagem: "Curso não encontrado" });
      } else {
        await curso.update(dados);
        response.status(200).json(curso);
      }
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "Houve um erro na atualização do curso", error });
    }
  }
  async deletar(request, response) {
    try {
      const { id } = request.params;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        response.status(404).json({ mensagem: "Curso não encontrado" });
      } else {
        await curso.destroy();
        response.status(200).json({ mensagem: "Curso excluído com sucesso" });
      }
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "Houve um erro na exclusão do curso", error });
    }
  }
  async capturar(request, response) {
    try {
      const { id } = request.params;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        response.status(404).json({ mensagem: "Curso não encontrado" });
      } else {
        response.status(200).json(curso);
      }
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "Houve um erro na captura do curso", error });
    }
  }
  async capturarTodos(request,response){
    try {
      const cursos = await Curso.findAll();
      if (!cursos) {
        response.status(404).json({ mensagem: "Cursos não encontrados" });
      } else {
        response.status(200).json(cursos);
      }
      
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "Houve um erro na captura dos cursos", error });
      
    }
  }
}
module.exports = new CursoController();
