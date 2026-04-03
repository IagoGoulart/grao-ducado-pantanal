import { useState, useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import fundo from "../../assets/fundopantanal.png";
import brasaoPantanal from "../../assets/brasaooficial.png";
import NewsCard from "../../components/NewsCard/NewsCard";
import { loadNews } from "../../services/newsService";
import { loadPublications, publicationTypes } from "../../services/publicationsService";

export default function Home() {
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(3);
  const [officialPublications, setOfficialPublications] = useState([]);

  useEffect(() => {
    // Carregar notícias
    const news = loadNews();
    setAllNews(news);
    
    // Carregar publicações - pegar a última de cada tipo que EXISTE
    const tipos = [
      { type: publicationTypes.DECRETO, name: 'Decreto Grão-Ducal', icon: '📜' },
      { type: publicationTypes.ATO, name: 'Ato da Coroa', icon: '👑' },
      { type: publicationTypes.ORDEM, name: 'Ordem Executiva', icon: '⚡' },
      { type: publicationTypes.PORTARIA, name: 'Portaria', icon: '📋' },
      { type: publicationTypes.MEDIDA, name: 'Medida Provisória', icon: '⚠️' },
      { type: publicationTypes.TRATADO, name: 'Tratado', icon: '🤝' }
    ];
    
    const latestPublications = [];
    
    tipos.forEach(tipo => {
      const pubs = loadPublications(tipo.type);
      // Verificar se existe alguma publicação deste tipo
      if (pubs && pubs.length > 0) {
        // Pegar a última (mais recente)
        const ultimaPub = pubs[pubs.length - 1];
        latestPublications.push({
          ...ultimaPub,
          type: tipo.type,
          typeName: tipo.name,
          icon: tipo.icon
        });
      }
    });
    
    setOfficialPublications(latestPublications);
  }, []);

  // Paginação das notícias
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = allNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(allNews.length / newsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pageNumbers.includes(i)) {
          pageNumbers.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <S.Container>
      <S.Hero>
        <S.HeroContent>
          <S.Title>
            Grão-Ducado <br />
            do Pantanal
          </S.Title>
          <S.Subtitle>Soberania, Tradição e Ordem</S.Subtitle>
          <S.Button>Conheça a Nação</S.Button>
        </S.HeroContent>

        <S.HeroImage src={fundo} alt="Pantanal" />
        <S.HeroOverlay />
      </S.Hero>

      <S.HeroText>
        <S.Brasao
          src={brasaoPantanal}
          alt="Brasão do Grão-Ducado do Pantanal"
        />
        <p>
          O Grão-Ducado do Pantanal preserva a tradição, a soberania e promove o
          desenvolvimento cultural da nossa micronação. Conheça nossas
          publicações oficiais e notícias recentes para ficar atualizado.
        </p>
      </S.HeroText>

      {/* PUBLICAÇÕES OFICIAIS - DINÂMICAS */}
      <S.Section>
        <S.SectionTitle>Publicações Oficiais</S.SectionTitle>
        <S.CardsContainer>
          {officialPublications.length === 0 ? (
            <p style={{ textAlign: "center", width: "100%", padding: "40px" }}>
              Nenhuma publicação oficial cadastrada ainda.
            </p>
          ) : (
            officialPublications.map((pub, index) => (
              <S.Card key={pub.id || index}>
                <S.CardImage 
                  src={pub.image || "https://via.placeholder.com/300x180?text=Publicação+Oficial"} 
                  alt={pub.titulo} 
                />
                <S.CardContent>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                    <span style={{ fontSize: "20px" }}>{pub.icon}</span>
                    <span style={{ fontSize: "12px", color: "#a58a50", fontWeight: "600" }}>
                      {pub.typeName}
                    </span>
                  </div>
                  <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>{pub.titulo}</h2>
                  <span style={{ fontSize: "12px", color: "#a58a50", display: "block", marginBottom: "12px" }}>
                    {pub.date}
                  </span>
                  <p style={{ fontSize: "14px", color: "#555", marginBottom: "16px", lineHeight: "1.4" }}>
                    {pub.excerpt?.substring(0, 100)}...
                  </p>
                  <Link to={`/arquivo/publicacoes/${pub.type}/${pub.id}`}>
                    <button style={{
                      background: "transparent",
                      border: "1px solid #a58a50",
                      padding: "8px 20px",
                      borderRadius: "6px",
                      color: "#a58a50",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}>
                      Ler mais
                    </button>
                  </Link>
                </S.CardContent>
              </S.Card>
            ))
          )}
        </S.CardsContainer>
      </S.Section>

      {/* NOTÍCIAS RECENTES COM PAGINAÇÃO */}
      <S.Section>
        <S.SectionTitle>Notícias Recentes</S.SectionTitle>
        
        {currentNews.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px" }}>
            Nenhuma notícia cadastrada ainda.
          </p>
        ) : (
          <>
            <S.CardsContainer>
              {currentNews.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </S.CardsContainer>

            {/* PAGINAÇÃO */}
            {totalPages > 1 && (
              <S.Pagination>
                <S.PageButton 
                  onClick={prevPage} 
                  disabled={currentPage === 1}
                >
                  Anterior
                </S.PageButton>
                
                {getPageNumbers().map((number, index) => (
                  <S.PageNumber
                    key={index}
                    active={number === currentPage}
                    onClick={() => typeof number === 'number' && paginate(number)}
                    disabled={number === '...'}
                  >
                    {number}
                  </S.PageNumber>
                ))}
                
                <S.PageButton 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages}
                >
                  Próximo
                </S.PageButton>
              </S.Pagination>
            )}
          </>
        )}
      </S.Section>
    </S.Container>
  );
}