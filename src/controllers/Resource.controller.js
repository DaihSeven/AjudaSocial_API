// /src/controllers/ResourceController.js
import ResourceService from '../services/Resource.service.js';

const service = new ResourceService();

const ResourceController = {
  getAll: async (req, res) => {
    try {
      const data = await service.getAllResource();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar os recursos.', error: error.message });
    }
  },

  getByType: async (req, res) => {
    try {
      const { type } = req.params;
      const result = await service.getByType(type);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por tipo.', error: error.message });
    }
  },

  getByLocalization: async (req, res) => {
    try {
      const { localization } = req.params;
      const result = await service.getByLocalization(localization);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por localização.', error: error.message });
    }
  },

  getByCity: async (req, res) => {
    try {
      const { city } = req.params;
      const result = await service.getByCity(city);
      if (result.length === 0) {
        return res.status(404).json({ message: `Nenhum recurso encontrado para a cidade ${city}.` });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por cidade.', error: error.message });
    }
  },

  getByCityAndType: async (req, res) => {
    try {
      const { city, type } = req.params;
      const result = await service.getByCityAndType(city, type);
      if (result.length === 0) {
        return res.status(404).json({ message: `Este tipo ${type} não foi encontrado na cidade ${city}.` });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por cidade e tipo.', error: error.message });
    }
  },

  getByCityAndLocalization: async (req, res) => {
    try {
      const { city, localization } = req.params;
      const result = await service.getByCityAndLocalization(city, localization);
      if (result.length === 0) {
        return res.status(404).json({ message: `Nenhum recurso encontrado na cidade ${city} com a localização ${localization}.` });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por cidade e localização.', error: error.message});
    }
  },

  getByCityAndTypeAndLocalization: async (req, res) => {
    try {
      const { city, type, localization } = req.params;
      const result = await service.getByCityAndTypeAndLocalization(city, type, localization);
      if (result.length === 0) {
        return res.status(404).json({ message: `Este tipo ${type} não foi encontrado na localização ${localization} e cidade ${city} especificados.` });
      }
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar recursos por cidade, tipo e localização.', error: error.message });
    }

  }
};

export default ResourceController;
