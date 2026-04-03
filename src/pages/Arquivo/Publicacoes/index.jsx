import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageTemplate from "../../../components/PageTemplate/PageTemplate";
import { loadPublications, publicationTypes, publicationNames } from "../../../services/publicationsService";

export default function Publicacoes() {
  const { type } = useParams();
  const [publications, setPublications] = useState([]);
  const [currentType, setCurrentType] = useState(type || 'decreto');

  useEffect(() => {
    if (type) {
      setCurrentType(type);
      const pubs = loadPublications(type);
      setPublications(pubs);
    }
  }, [type]);

  const typeButtons = Object.entries(publicationTypes).map(([key, value]) => ({
    id: value,
    name: publicationNames[value],
    path: `/arquivo/publicacoes/${value}`
  }));

  // Função para pegar o ícone do tipo de publicação
  const getPublicationIcon = (type) => {
    switch(type) {
      case 'decreto': return '📜';
      case 'ato': return '👑';
      case 'ordem': return '⚡';
      case 'portaria': return '📋';
      case 'medida': return '⚠️';
      case 'tratado': return '🤝';
      default: return '📄';
    }
  };

  return (
    <PageTemplate 
      title={`Publicações - ${publicationNames[currentType]}`}
      content={[]}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ 
          display: "flex", 
          gap: "10px", 
          flexWrap: "wrap", 
          marginBottom: "30px",
          borderBottom: "1px solid #eee",
          paddingBottom: "20px"
        }}>
          {typeButtons.map(btn => (
            <Link
              key={btn.id}
              to={btn.path}
              style={{
                padding: "8px 16px",
                background: currentType === btn.id ? "#a58a50" : "transparent",
                color: currentType === btn.id ? "#fff" : "#04300a",
                border: "1px solid #a58a50",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              {btn.name}
            </Link>
          ))}
        </div>

        {publications.length === 0 ? (
          <p style={{ textAlign: "center", padding: "40px" }}>
            Nenhuma publicação encontrada.
          </p>
        ) : (
          publications.map(pub => (
            <div key={pub.id} style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderLeft: "4px solid #a58a50",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "20px" }}>{getPublicationIcon(currentType)}</span>
                  <span style={{ fontSize: "12px", color: "#a58a50", fontWeight: "600", textTransform: "uppercase" }}>
                    {publicationNames[currentType]}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#04300a", background: "#f5ecda", padding: "4px 8px", borderRadius: "4px" }}>
                  Nº {pub.numero}
                </span>
              </div>
              
              {/* IMAGEM DA PUBLICAÇÃO */}
              {pub.image && pub.image !== "" && (
                <div style={{ marginBottom: "15px" }}>
                  <img 
                    src={pub.image} 
                    alt={pub.titulo} 
                    style={{ 
                      width: "100%", 
                      maxHeight: "250px", 
                      objectFit: "cover", 
                      borderRadius: "8px",
                      border: "1px solid #eee"
                    }}
                  />
                </div>
              )}
              
              <h3 style={{ fontSize: "18px", color: "#04300a", marginBottom: "8px", fontFamily: "'EB Garamond', serif" }}>
                {pub.titulo}
              </h3>
              
              <div style={{ fontSize: "12px", color: "#a58a50", marginBottom: "12px" }}>
                📅 {pub.date} | ✍️ {pub.author}
              </div>
              
              <p style={{ fontSize: "14px", color: "#555", marginBottom: "16px", lineHeight: "1.5" }}>
                {pub.excerpt}
              </p>
              
              <Link 
                to={`/arquivo/publicacoes/${currentType}/${pub.id}`}
                style={{ 
                  color: "#a58a50", 
                  textDecoration: "none", 
                  fontWeight: "500",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "all 0.3s ease"
                }}
              >
                Ler documento completo →
              </Link>
            </div>
          ))
        )}
      </div>
    </PageTemplate>
  );
}