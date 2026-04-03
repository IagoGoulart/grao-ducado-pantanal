import * as S from "./styles";

export default function PublicationCard({ publication, type }) {
  const getTypeLabel = () => {
    switch(type) {
      case 'decreto': return '📜 Decreto Grão-Ducal';
      case 'ato': return '👑 Ato da Coroa';
      case 'ordem': return '⚡ Ordem Executiva';
      case 'portaria': return '📋 Portaria';
      case 'medida': return '⚠️ Medida Provisória';
      case 'tratado': return '🤝 Tratado';
      default: return '📄 Publicação';
    }
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.CardType>{getTypeLabel()}</S.CardType>
        <S.CardNumber>Nº {publication.numero}</S.CardNumber>
      </S.CardHeader>
      <S.CardTitle>{publication.titulo}</S.CardTitle>
      <S.CardDate>{publication.date}</S.CardDate>
      <S.CardExcerpt>{publication.excerpt}</S.CardExcerpt>
      <S.CardButton to={`/arquivo/publicacoes/${type}/${publication.id}`}>
        Ler documento completo →
      </S.CardButton>
    </S.Card>
  );
}