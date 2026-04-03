// src/services/contentService.js

const STORAGE_KEY = 'grao_ducado_content';

// Conteúdo padrão para TODAS as páginas
const defaultContent = {
  // SOBRE
  "sobre-quem-somos": {
    title: "Quem Somos",
    sections: [
      {
        title: "Quem Somos",
        text: "<p>O Grão-Ducado do Pantanal é uma micronação que nasceu do ideal de preservar as tradições, a cultura e a soberania da região pantaneira.</p>"
      },
      {
        title: "Nossa História",
        text: "<p>Fundado em [ano de fundação], o Grão-Ducado surge como uma iniciativa de simulação política e cultural...</p>"
      }
    ]
  },
  "sobre-simbolos": {
    title: "Símbolos Nacionais",
    sections: [
      {
        title: "Nossos Símbolos",
        text: "<p>Os símbolos nacionais representam a identidade, os valores e a soberania do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Bandeira Nacional",
        text: "<p>A Bandeira do Grão-Ducado é composta pelas cores que representam a riqueza natural e a tradição da região pantaneira.</p>"
      },
      {
        title: "Brasão de Armas",
        text: "<p>O Brasão Oficial do Grão-Ducado foi adotado em [ano] e seus elementos representam a heráldica tradicional.</p>"
      },
      {
        title: "Hino Nacional",
        text: "<p>O Hino Nacional é executado em cerimônias oficiais e eventos solenes da micronação.</p>"
      }
    ]
  },
  "sobre-noticias": {
    title: "Notícias",
    sections: [
      {
        title: "Últimas Notícias",
        text: "<p>Acompanhe as novidades e comunicados oficiais do Grão-Ducado do Pantanal.</p>"
      }
    ]
  },
  
  // COROA
  "coroa-pantaneira": {
    title: "A Coroa Pantaneira",
    sections: [
      {
        title: "A Coroa Pantaneira",
        text: "<p>A Coroa do Grão-Ducado do Pantanal representa a continuidade da tradição, a estabilidade institucional e a soberania da nossa nação.</p>"
      },
      {
        title: "História da Coroa",
        text: "<p>A história da Coroa Pantaneira remonta à fundação do Grão-Ducado.</p>"
      },
      {
        title: "Funções da Coroa",
        text: "<p>A Coroa exerce funções cerimoniais, diplomáticas e de garantia da continuidade institucional.</p>"
      }
    ]
  },
  "coroa-alteza-real": {
    title: "Sua Alteza Real",
    sections: [
      {
        title: "Sua Alteza Real, o Grão-Duque",
        text: "<p>Sua Alteza Real é o atual Chefe de Estado do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Biografia",
        text: "<p>Nasceu em [data/local], Sua Alteza Real dedicou sua vida ao serviço da nação.</p>"
      },
      {
        title: "Atribuições",
        text: "<p>Como Chefe de Estado, Sua Alteza Real é o Comandante Supremo e sanciona os decretos governamentais.</p>"
      }
    ]
  },
  "coroa-casa-grao-ducal": {
    title: "A Casa Grão-Ducal",
    sections: [
      {
        title: "A Casa Grão-Ducal",
        text: "<p>A Casa Grão-Ducal é a instituição que reúne a Família Real e toda a estrutura de apoio à Coroa.</p>"
      },
      {
        title: "Estrutura",
        text: "<p>A Casa Grão-Ducal é organizada em diferentes departamentos que auxiliam nas funções da Coroa.</p>"
      }
    ]
  },
  "coroa-estatuto-dinastico": {
    title: "Estatuto Dinástico",
    sections: [
      {
        title: "Estatuto Dinástico",
        text: "<p>O Estatuto Dinástico rege a sucessão ao trono do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Linha de Sucessão",
        text: "<p>A sucessão segue o princípio de primogenitura.</p>"
      }
    ]
  },
  "coroa-nobreza": {
    title: "Nobreza e Aristocracia",
    sections: [
      {
        title: "Nobreza e Aristocracia",
        text: "<p>A Nobreza do Grão-Ducado do Pantanal é composta por títulos honoríficos concedidos pela Coroa.</p>"
      },
      {
        title: "Títulos Nobiliárquicos",
        text: "<p>Os títulos existentes são: Duque, Marquês, Conde, Visconde e Barão.</p>"
      }
    ]
  },
  "coroa-codigo-nobiliarchico": {
    title: "Código Nobiliárquico",
    sections: [
      {
        title: "Código Nobiliárquico",
        text: "<p>O Código Nobiliárquico estabelece as normas e procedimentos relacionados à nobreza do Grão-Ducado.</p>"
      }
    ]
  },
  "coroa-ordens": {
    title: "Ordens e Condecorações",
    sections: [
      {
        title: "Ordens e Condecorações",
        text: "<p>O Grão-Ducado do Pantanal concede ordens e condecorações como forma de reconhecimento.</p>"
      },
      {
        title: "Ordem do Pantanal",
        text: "<p>A mais alta honraria concedida pelo Grão-Ducado.</p>"
      }
    ]
  },
  
  // GOVERNO
  "governo-conselho": {
    title: "Conselho de Governo",
    sections: [
      {
        title: "Conselho de Governo",
        text: "<p>O Conselho de Governo é o órgão executivo máximo do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Composição",
        text: "<p>O Conselho é presidido pelo Chanceler e composto pelos Ministros de Estado.</p>"
      }
    ]
  },
  "governo-chanceler": {
    title: "O Chanceler",
    sections: [
      {
        title: "O Chanceler",
        text: "<p>O Chanceler é o Chefe de Governo do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Nomeação",
        text: "<p>O Chanceler é nomeado pelo Grão-Duque e empossado em cerimônia oficial.</p>"
      }
    ]
  },
  "governo-banco-central": {
    title: "Banco Central",
    sections: [
      {
        title: "Banco Central do Pantanal",
        text: "<p>O Banco Central é a autoridade monetária do Grão-Ducado.</p>"
      },
      {
        title: "Funções",
        text: "<p>O Banco Central emite a moeda oficial e regula o sistema financeiro.</p>"
      }
    ]
  },
  
  // LEGISLATIVO
  "legislativo-parlamento": {
    title: "O Parlamento",
    sections: [
      {
        title: "O Parlamento",
        text: "<p>O Parlamento é o órgão legislativo do Grão-Ducado do Pantanal.</p>"
      },
      {
        title: "Estrutura",
        text: "<p>O Parlamento é unicameral, composto por parlamentares.</p>"
      }
    ]
  },
  "legislativo-legislacao": {
    title: "Legislação",
    sections: [
      {
        title: "Legislação",
        text: "<p>A legislação do Grão-Ducado do Pantanal é composta por normas que regulam a vida em sociedade.</p>"
      },
      {
        title: "Hierarquia das Leis",
        text: "<p>A hierarquia normativa é: Constituição, Leis Complementares, Leis Ordinárias, Decretos e Portarias.</p>"
      }
    ]
  },
  
  // JUDICIÁRIO
  "judiciario-supremo": {
    title: "Supremo Tribunal",
    sections: [
      {
        title: "Supremo Tribunal",
        text: "<p>O Supremo Tribunal é o órgão máximo do Poder Judiciário do Grão-Ducado.</p>"
      },
      {
        title: "Composição",
        text: "<p>O Supremo Tribunal é composto por Ministros nomeados pelo Grão-Duque.</p>"
      }
    ]
  },
  "judiciario-diario": {
    title: "Diário de Justiça",
    sections: [
      {
        title: "Diário de Justiça",
        text: "<p>O Diário de Justiça é o veículo oficial de publicação dos atos do Poder Judiciário.</p>"
      }
    ]
  },
  
  // DIPLOMACIA
  "diplomacia-embaixadas": {
    title: "Embaixadas e Consulados",
    sections: [
      {
        title: "Embaixadas e Consulados",
        text: "<p>O serviço diplomático do Grão-Ducado mantém representações em diversas micronações.</p>"
      },
      {
        title: "Embaixadas",
        text: "<p>Atualmente, o Grão-Ducado possui embaixadas em diversas micronações parceiras.</p>"
      }
    ]
  },
  "diplomacia-tratados": {
    title: "Tratados Internacionais",
    sections: [
      {
        title: "Tratados Internacionais",
        text: "<p>O Grão-Ducado do Pantanal celebra tratados e acordos com outras micronações.</p>"
      },
      {
        title: "Tipos de Tratados",
        text: "<p>Os tratados podem ser de amizade, cooperação, comércio e reconhecimento mútuo.</p>"
      }
    ]
  },
  
  // ARQUIVO
  "arquivo-constituicao": {
    title: "Constituição Nacional",
    sections: [
      {
        title: "Constituição Nacional",
        text: "<p>A Constituição do Grão-Ducado do Pantanal é a lei fundamental que organiza o Estado.</p>"
      },
      {
        title: "Título I - Princípios Fundamentais",
        text: "<p>Art. 1º - O Grão-Ducado do Pantanal é uma micronação soberana.</p>"
      },
      {
        title: "Título II - Direitos e Garantias",
        text: "<p>Art. 5º - Todos os cidadãos são iguais perante a lei.</p>"
      }
    ]
  }
};

// Carregar conteúdo do localStorage
export const loadContent = (pageId) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const allContent = JSON.parse(saved);
      if (allContent[pageId]) {
        return allContent[pageId];
      }
    }
    // Retorna o conteúdo padrão se não encontrar nada salvo
    return defaultContent[pageId] || {
      title: "Página em construção",
      sections: [{ title: "Em breve", text: "<p>Conteúdo em breve.</p>" }]
    };
  } catch (error) {
    console.error("Erro ao carregar conteúdo:", error);
    return defaultContent[pageId];
  }
};

// Salvar conteúdo
export const saveContent = (pageId, content) => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    let allContent = saved ? JSON.parse(saved) : {};
    allContent[pageId] = content;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allContent));
    return true;
  } catch (error) {
    console.error("Erro ao salvar conteúdo:", error);
    return false;
  }
};

// Listar todas as páginas disponíveis para edição
export const getAvailablePages = () => {
  return [
    // SOBRE
    { id: "sobre-quem-somos", name: "Sobre - Quem Somos", path: "/sobre/quem-somos" },
    { id: "sobre-simbolos", name: "Sobre - Símbolos Nacionais", path: "/sobre/simbolos-nacionais" },
    { id: "sobre-noticias", name: "Sobre - Notícias", path: "/sobre/noticias" },
    // COROA
    { id: "coroa-pantaneira", name: "Coroa - A Coroa Pantaneira", path: "/coroa/coroa-pantaneira" },
    { id: "coroa-alteza-real", name: "Coroa - Sua Alteza Real", path: "/coroa/sua-alteza-real" },
    { id: "coroa-casa-grao-ducal", name: "Coroa - A Casa Grão-Ducal", path: "/coroa/casa-grao-ducal" },
    { id: "coroa-estatuto-dinastico", name: "Coroa - Estatuto Dinástico", path: "/coroa/estatuto-dinastico" },
    { id: "coroa-nobreza", name: "Coroa - Nobreza e Aristocracia", path: "/coroa/nobreza-aristocracia" },
    { id: "coroa-codigo-nobiliarchico", name: "Coroa - Código Nobiliárquico", path: "/coroa/codigo-nobiliarchico" },
    { id: "coroa-ordens", name: "Coroa - Ordens e Condecorações", path: "/coroa/ordens-condecoracoes" },
    // GOVERNO
    { id: "governo-conselho", name: "Governo - Conselho de Governo", path: "/governo/conselho-governo" },
    { id: "governo-chanceler", name: "Governo - Chanceler", path: "/governo/chanceler" },
    { id: "governo-banco-central", name: "Governo - Banco Central", path: "/governo/banco-central" },
    // LEGISLATIVO
    { id: "legislativo-parlamento", name: "Legislativo - Parlamento", path: "/legislativo/parlamento" },
    { id: "legislativo-legislacao", name: "Legislativo - Legislação", path: "/legislativo/legislacao" },
    // JUDICIÁRIO
    { id: "judiciario-supremo", name: "Judiciário - Supremo Tribunal", path: "/judiciario/supremo-tribunal" },
    { id: "judiciario-diario", name: "Judiciário - Diário de Justiça", path: "/judiciario/diario-justica" },
    // DIPLOMACIA
    { id: "diplomacia-embaixadas", name: "Diplomacia - Embaixadas e Consulados", path: "/diplomacia/embaixadas-consulados" },
    { id: "diplomacia-tratados", name: "Diplomacia - Tratados Internacionais", path: "/diplomacia/tratados-internacionais" },
    // ARQUIVO
    { id: "arquivo-constituicao", name: "Arquivo - Constituição Nacional", path: "/arquivo/constituicao-nacional" }
  ];
};