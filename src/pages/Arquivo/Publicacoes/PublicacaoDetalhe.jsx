import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import { getPublicationById, publicationNames } from "../../../services/publicationsService";

export default function PublicacaoDetalhe() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pub = getPublicationById(type, id);
    if (pub) {
      setPublication(pub);
    }
    setLoading(false);
  }, [type, id]);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "100px" }}>Carregando...</div>;
  }

  if (!publication) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>Publicação não encontrada</h2>
        <button onClick={() => navigate(`/arquivo/publicacoes/${type}`)}>Voltar</button>
      </div>
    );
  }

  const content = [
    {
      title: `${publication.numero} - ${publication.titulo}`,
      text: publication.content
    }
  ];

  return (
    <PageTemplate 
      title={`${publicationNames[type]} Nº ${publication.numero}`}
      content={content}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px 40px" }}>
        {/* IMAGEM DA PUBLICAÇÃO NO TOPO */}
        {publication.image && publication.image !== "" && (
          <div style={{ marginBottom: "30px", borderRadius: "12px", overflow: "hidden" }}>
            <img 
              src={publication.image} 
              alt={publication.titulo} 
              style={{ 
                width: "100%", 
                maxHeight: "400px", 
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        )}
        
        <div style={{ 
          background: "#f9f9f9", 
          borderRadius: "8px", 
          padding: "20px",
          marginTop: publication.image ? "0" : "20px"
        }}>
          <p><strong>📅 Data:</strong> {publication.date}</p>
          <p><strong>✍️ Autor:</strong> {publication.author}</p>
          <p><strong>🔢 Número:</strong> {publication.numero}</p>
          <p><strong>📑 Tipo:</strong> {publicationNames[type]}</p>
          
          <button 
            onClick={() => navigate(`/arquivo/publicacoes/${type}`)}
            style={{
              marginTop: "20px",
              padding: "8px 16px",
              background: "transparent",
              border: "1px solid #a58a50",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "'EB Garamond', serif",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#a58a50";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#a58a50";
            }}
          >
            ← Voltar para lista
          </button>
        </div>
      </div>
    </PageTemplate>
  );
}