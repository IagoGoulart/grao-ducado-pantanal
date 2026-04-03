import { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import fundoPantanal from "../../assets/fundopantanal.png";
import { loadContent } from "../../services/contentService";

export default function CoroaPantaneira() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedContent = loadContent("coroa-pantaneira");
    if (savedContent) {
      setContent(savedContent);
    }
    setLoading(false);
  }, []);

  if (loading) return <div style={{ textAlign: "center", padding: "100px" }}>Carregando...</div>;
  if (!content) return <div style={{ textAlign: "center", padding: "100px" }}>Conteúdo não encontrado</div>;

  return (
    <PageTemplate 
      title={content.title}
      content={content.sections}
      image={fundoPantanal}
    />
  );
}