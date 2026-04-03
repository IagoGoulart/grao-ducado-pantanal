import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { getNewsById } from "../../services/newsService";

export default function Noticia() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newsItem = getNewsById(parseInt(id));
    if (newsItem) {
      setNews(newsItem);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "100px" }}>Carregando...</div>;
  }

  if (!news) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>Notícia não encontrada</h2>
        <button onClick={() => navigate("/")}>Voltar para Home</button>
      </div>
    );
  }

  const isValidImage = (imageData) => {
    if (!imageData || imageData === "") return false;
    return imageData.startsWith('data:image/');
  };

  const imageUrl = isValidImage(news.image) 
    ? news.image 
    : "https://via.placeholder.com/1200x400?text=Grão-Ducado";

  return (
    <S.Container>
      <S.HeroBanner image={imageUrl}>
        <S.Overlay />
        <S.Title>{news.title}</S.Title>
      </S.HeroBanner>
      
      <S.Content>
        <S.Date>{news.date}</S.Date>
        <S.Body dangerouslySetInnerHTML={{ __html: news.content }} />
        <S.BackButton onClick={() => navigate("/")}>← Voltar para Home</S.BackButton>
      </S.Content>
    </S.Container>
  );
}