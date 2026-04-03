const NEWS_STORAGE_KEY = 'grao_ducado_news';

// Notícias padrão
const defaultNews = [
  {
    id: 1,
    title: "Encerramento da Operação Lusignan",
    date: "22 de fevereiro, 2026",
    image: "",
    content: "<p>A operação foi concluída com sucesso, trazendo estabilidade para a região...</p>",
    excerpt: "A operação foi concluída com sucesso, trazendo estabilidade para a região..."
  },
  {
    id: 2,
    title: "Nova iniciativa cultural no Pantanal",
    date: "21 de fevereiro, 2026",
    image: "",
    content: "<p>Lançado novo programa de incentivo à cultura e às artes no Grão-Ducado...</p>",
    excerpt: "Lançado novo programa de incentivo à cultura e às artes..."
  },
  {
    id: 3,
    title: "Expansão diplomática anunciada",
    date: "19 de fevereiro, 2026",
    image: "",
    content: "<p>Novas embaixadas serão estabelecidas em diversas micronações parceiras...</p>",
    excerpt: "Novas embaixadas serão estabelecidas em diversas micronações parceiras..."
  }
];

// Carregar todas as notícias
export const loadNews = () => {
  try {
    const saved = localStorage.getItem(NEWS_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return defaultNews;
  } catch (error) {
    console.error("Erro ao carregar notícias:", error);
    return defaultNews;
  }
};

// Salvar notícia
export const saveNews = (news) => {
  try {
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
    return true;
  } catch (error) {
    console.error("Erro ao salvar notícias:", error);
    return false;
  }
};

// Adicionar nova notícia
export const addNews = (newsItem) => {
  const news = loadNews();
  const newId = news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 1;
  const newNews = [...news, { ...newsItem, id: newId }];
  saveNews(newNews);
  return newNews;
};

// Atualizar notícia
export const updateNews = (id, updatedNews) => {
  const news = loadNews();
  const index = news.findIndex(n => n.id === id);
  if (index !== -1) {
    news[index] = { ...news[index], ...updatedNews };
    saveNews(news);
  }
  return news;
};

// Deletar notícia
export const deleteNews = (id) => {
  const news = loadNews();
  const filteredNews = news.filter(n => n.id !== id);
  saveNews(filteredNews);
  return filteredNews;
};

// Buscar notícia por ID
export const getNewsById = (id) => {
  const news = loadNews();
  return news.find(n => n.id === id);
};