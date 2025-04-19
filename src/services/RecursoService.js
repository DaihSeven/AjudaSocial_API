// src/services/RecursoService.js
import recursos from '../database/mockDb.js';

export default class RecursoService {
  getAllRecursos() {
    return recursos;
  }

  getByTipo(tipo) {
    const tipoBusca = tipo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    return recursos.filter(r => 
      r.tipo.some(t => 
        t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === tipoBusca
      )
    );
  }
    
  getByLocalizacao(localizacao) {
    return recursos.filter(r =>
      r.endereco.toLowerCase().includes(localizacao.toLowerCase())
    );
  }

  getByCidade(cidade) {
    return recursos.filter(r =>
      r.cidade.toLowerCase() === cidade.toLowerCase()
    );
  }

  getByCidadeETipo(cidade, tipo) {
    return recursos.filter(r =>
      r.cidade.toLowerCase() === cidade.toLowerCase() &&
      r.tipo.includes(tipo.toLowerCase())
    );
  }

  getByCidadeELocalizacao(cidade, localizacao) {
    return recursos.filter(r =>
      r.cidade.toLowerCase() === cidade.toLowerCase() &&
      r.endereco.toLowerCase().includes(localizacao.toLowerCase())
    );
  }
  
  getByCidadeETipoELocalizacao(cidade, tipo, localizacao) {
    return recursos.filter(r =>
      r.cidade.toLowerCase() === cidade.toLowerCase() &&
      r.tipo.includes(tipo.toLowerCase()) &&
      r.endereco.toLowerCase().includes(localizacao.toLowerCase())
    );
  }
}
