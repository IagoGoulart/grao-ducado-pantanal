import * as S from "./styles";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  // Função para verificar se a imagem é válida
  const isValidImage = (imageData) => {
    if (!imageData || imageData === "") return false;
    // Verifica se é Base64 válido
    return imageData.startsWith('data:image/');
  };

  const imageUrl = isValidImage(news.image) 
    ? news.image 
    : "https://via.placeholder.com/300x180?text=Grão-Ducado+do+Pantanal";

  return (
    <S.Card>
      <S.CardImage 
        src={imageUrl} 
        alt={news.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x180?text=Grão-Ducado+do+Pantanal";
        }}
      />
      <S.CardContent>
        <S.CardTitle>{news.title}</S.CardTitle>
        <S.CardDate>{news.date}</S.CardDate>
        <S.CardExcerpt>{news.excerpt}</S.CardExcerpt>
        <Link to={`/noticia/${news.id}`}>
          <S.CardButton>Ler mais</S.CardButton>
        </Link>
      </S.CardContent>
    </S.Card>
  );
}