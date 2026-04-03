import * as S from "./styles";

export default function PageTemplate({ 
  title, 
  content, 
  image,
  showSymbols = false, 
  symbols 
}) {
  return (
    <S.Container>
      <S.HeroBanner image={image}>
        <S.Overlay />
        <S.Title>{title}</S.Title>
      </S.HeroBanner>
      
      {showSymbols && symbols && (
        <S.SymbolsSection>
          <S.SymbolsTitle>Símbolos Nacionais</S.SymbolsTitle>
          <S.SymbolsContainer>
            {symbols.flag && (
              <S.SymbolCard>
                <S.SymbolImage src={symbols.flag} alt="Bandeira" />
                <S.SymbolLabel>Bandeira Nacional</S.SymbolLabel>
              </S.SymbolCard>
            )}
            {symbols.sovereignCoat && (
              <S.SymbolCard>
                <S.SymbolImage src={symbols.sovereignCoat} alt="Brasão do Soberano" />
                <S.SymbolLabel>Brasão do Soberano</S.SymbolLabel>
              </S.SymbolCard>
            )}
            {symbols.governmentCoat && (
              <S.SymbolCard>
                <S.SymbolImage src={symbols.governmentCoat} alt="Brasão do Governo" />
                <S.SymbolLabel>Brasão do Governo</S.SymbolLabel>
              </S.SymbolCard>
            )}
          </S.SymbolsContainer>
        </S.SymbolsSection>
      )}
      
      <S.Content>
        {content.map((section, index) => (
          <S.Section key={index}>
            <S.SectionTitle>{section.title}</S.SectionTitle>
            <S.SectionText dangerouslySetInnerHTML={{ __html: section.text }} />
            {section.subsections && section.subsections.map((sub, i) => (
              <S.Subsection key={i}>
                <S.Subtitle>{sub.title}</S.Subtitle>
                <S.Text dangerouslySetInnerHTML={{ __html: sub.text }} />
              </S.Subsection>
            ))}
          </S.Section>
        ))}
      </S.Content>
    </S.Container>
  );
}