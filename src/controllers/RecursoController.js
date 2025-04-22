// /src/controllers/RecursoController.js
import RecursoService from '../services/RecursoService.js';

const service = new RecursoService();

const RecursoController = {
  getAll(req, res) {
    res.json(service.getAllRecursos());
  },

  getByTipo(req, res) {
    const tipo = req.params.tipo;
    const resultado = service.getByTipo(tipo);
    res.json(resultado);
  },

  getByLocalizacao(req, res) {
    const localizacao = req.params.localizacao;
    const resultado = service.getByLocalizacao(localizacao);
    res.json(resultado);
  },

  getByCidade(req, res) {
    const { cidade } = req.params;
    const resultado = service.getByCidade(cidade);
    if (resultado.length === 0) {
      return res.status(404).json({ message: `Nenhum recurso encontrado para a cidade ${cidade}.` });
    }
    res.json(resultado);
  },

  getByCidadeETipo(req, res) {
    const { cidade, tipo } = req.params;
    const resultado = service.getByCidadeETipo(cidade, tipo);
    if (resultado.length === 0) {
      return res.status(404).json({ message: `Este tipo ${tipo} não foi encontrado na cidade ${cidade}.` });
    }
    res.json(resultado);
  },

  getByCidadeELocalizacao(req, res) {
    const { cidade, localizacao } = req.params;
    const resultado = service.getByCidade(cidade, localizacao);
    if (resultado.length === 0) {
      return res.status(404).json({ message: `Nenhum recurso encontrado na cidade ${cidade} com a localização ${localizacao}.` });
    }
    res.json(resultado);
  },

  getByCidadeETipoELocalizacao(req, res) {
    const { cidade, tipo, localizacao } = req.params;
    const resultado = service.getByCidadeETipoELocalizacao(cidade, tipo, localizacao);
    if (resultado.length === 0) {
      return res.status(404).json({ message: `Este tipo ${tipo} não foi encontrado na localização e cidade ${cidade} especificados.` });
    }
    res.json(resultado);
  }
};

export default RecursoController;