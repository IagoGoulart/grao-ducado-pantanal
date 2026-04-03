const PUBLICATIONS_STORAGE_KEY = 'grao_ducado_publications';

export const publicationTypes = {
  DECRETO: 'decreto',
  ATO: 'ato',
  ORDEM: 'ordem',
  PORTARIA: 'portaria',
  MEDIDA: 'medida',
  TRATADO: 'tratado'
};

export const publicationNames = {
  [publicationTypes.DECRETO]: 'Decreto Grão-Ducal',
  [publicationTypes.ATO]: 'Ato da Coroa',
  [publicationTypes.ORDEM]: 'Ordem Executiva',
  [publicationTypes.PORTARIA]: 'Portaria',
  [publicationTypes.MEDIDA]: 'Medida Provisória',
  [publicationTypes.TRATADO]: 'Tratado'
};

export const publicationRoutes = {
  [publicationTypes.DECRETO]: '/arquivo/publicacoes/decreto',
  [publicationTypes.ATO]: '/arquivo/publicacoes/ato',
  [publicationTypes.ORDEM]: '/arquivo/publicacoes/ordem',
  [publicationTypes.PORTARIA]: '/arquivo/publicacoes/portaria',
  [publicationTypes.MEDIDA]: '/arquivo/publicacoes/medida',
  [publicationTypes.TRATADO]: '/arquivo/publicacoes/tratado'
};

const defaultPublications = {
  [publicationTypes.DECRETO]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Institui o novo brasão oficial do Grão-Ducado",
      date: "15 de janeiro, 2026",
      content: "<p>O Grão-Duque decreta: Fica instituído o novo brasão oficial do Grão-Ducado do Pantanal...</p>",
      excerpt: "Fica instituído o novo brasão oficial do Grão-Ducado do Pantanal.",
      author: "Grão-Duque",
      image: ""
    },
    {
      id: 2,
      numero: "002/2026",
      titulo: "Estabelece o calendário oficial de feriados",
      date: "20 de fevereiro, 2026",
      content: "<p>O Grão-Duque decreta: Fica estabelecido o calendário oficial de feriados do Grão-Ducado...</p>",
      excerpt: "Fica estabelecido o calendário oficial de feriados do Grão-Ducado.",
      author: "Grão-Duque",
      image: ""
    }
  ],
  [publicationTypes.ATO]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Mensagem de Ano Novo ao povo do Grão-Ducado",
      date: "1 de janeiro, 2026",
      content: "<p>O Grão-Duque dirige-se ao povo: Neste novo ano, reafirmamos nosso compromisso...</p>",
      excerpt: "Mensagem de Ano Novo ao povo do Grão-Ducado.",
      author: "Grão-Duque",
      image: ""
    }
  ],
  [publicationTypes.ORDEM]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Cria o Comitê de Cultura Nacional",
      date: "5 de janeiro, 2026",
      content: "<p>O Chanceler determina: Fica criado o Comitê de Cultura Nacional...</p>",
      excerpt: "Fica criado o Comitê de Cultura Nacional.",
      author: "Chanceler",
      image: ""
    }
  ],
  [publicationTypes.PORTARIA]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Regulamenta o programa de incentivo artístico",
      date: "12 de janeiro, 2026",
      content: "<p>O Ministro da Cultura define: Fica regulamentado o programa de incentivo artístico...</p>",
      excerpt: "Fica regulamentado o programa de incentivo artístico.",
      author: "Ministério da Cultura",
      image: ""
    }
  ],
  [publicationTypes.MEDIDA]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Medidas emergenciais para a cultura",
      date: "1 de março, 2026",
      content: "<p>O Chanceler, no uso de suas atribuições, edita a seguinte Medida Provisória...</p>",
      excerpt: "Dispõe sobre medidas emergenciais para a cultura.",
      author: "Chanceler",
      image: ""
    }
  ],
  [publicationTypes.TRATADO]: [
    {
      id: 1,
      numero: "001/2026",
      titulo: "Tratado de Amizade e Cooperação",
      date: "10 de janeiro, 2026",
      content: "<p>As partes contratantes, resolvem celebrar o presente Tratado de Amizade e Cooperação...</p>",
      excerpt: "Tratado de Amizade e Cooperação entre micronações.",
      author: "Chancelaria",
      image: ""
    }
  ]
};

export const loadPublications = (type) => {
  try {
    const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
    if (saved) {
      const allPublications = JSON.parse(saved);
      if (allPublications[type]) {
        return allPublications[type];
      }
    }
    return defaultPublications[type] || [];
  } catch (error) {
    console.error("Erro ao carregar publicações:", error);
    return defaultPublications[type] || [];
  }
};

export const loadAllPublications = () => {
  try {
    const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultPublications;
  } catch (error) {
    console.error("Erro ao carregar publicações:", error);
    return defaultPublications;
  }
};

export const savePublication = (type, publication) => {
  try {
    const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
    let allPublications = saved ? JSON.parse(saved) : {};
    
    const publications = loadPublications(type);
    const index = publications.findIndex(p => p.id === publication.id);
    
    if (index !== -1) {
      publications[index] = publication;
    } else {
      publications.push(publication);
    }
    
    allPublications[type] = publications;
    localStorage.setItem(PUBLICATIONS_STORAGE_KEY, JSON.stringify(allPublications));
    return true;
  } catch (error) {
    console.error("Erro ao salvar publicação:", error);
    return false;
  }
};

export const addPublication = (type, publication) => {
  const publications = loadPublications(type);
  const newId = publications.length > 0 ? Math.max(...publications.map(p => p.id)) + 1 : 1;
  const newPublication = { ...publication, id: newId };
  
  const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
  let allPublications = saved ? JSON.parse(saved) : {};
  allPublications[type] = [...publications, newPublication];
  localStorage.setItem(PUBLICATIONS_STORAGE_KEY, JSON.stringify(allPublications));
  
  return newPublication;
};

export const updatePublication = (type, id, updatedData) => {
  const publications = loadPublications(type);
  const index = publications.findIndex(p => p.id === id);
  if (index !== -1) {
    publications[index] = { ...publications[index], ...updatedData };
    const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
    let allPublications = saved ? JSON.parse(saved) : {};
    allPublications[type] = publications;
    localStorage.setItem(PUBLICATIONS_STORAGE_KEY, JSON.stringify(allPublications));
  }
  return publications;
};

export const deletePublication = (type, id) => {
  const publications = loadPublications(type);
  const filtered = publications.filter(p => p.id !== id);
  
  const saved = localStorage.getItem(PUBLICATIONS_STORAGE_KEY);
  let allPublications = saved ? JSON.parse(saved) : {};
  allPublications[type] = filtered;
  localStorage.setItem(PUBLICATIONS_STORAGE_KEY, JSON.stringify(allPublications));
  
  return filtered;
};

export const getPublicationById = (type, id) => {
  const publications = loadPublications(type);
  return publications.find(p => p.id === parseInt(id));
};