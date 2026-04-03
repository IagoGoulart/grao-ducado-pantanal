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

  // Mapeamento direto dos tipos para nomes (fallback)
  const getTypeName = (typeId) => {
    const names = {
      'decreto': 'Decreto Grão-Ducal',
      'ato': 'Ato da Coroa',
      'ordem': 'Ordem Executiva',
      'portaria': 'Portaria',
      'medida': 'Medida Provisória',
      'tratado': 'Tratado'
    };
    return names[typeId] || 'Publicação';
  };

  // Mapeamento de ícones
  const getTypeIcon = (typeId) => {
    const icons = {
      'decreto': '📜',
      'ato': '👑',
      'ordem': '⚡',
      'portaria': '📋',
      'medida': '⚠️',
      'tratado': '🤝'
    };
    return icons[typeId] || '📄';
  };

  const typeButtons = [
    { id: 'decreto', name: 'Decreto Grão-Ducal', path: '/arquivo/publicacoes/decreto' },
    { id: 'ato', name: 'Ato da Coroa', path: '/arquivo/publicacoes/ato' },
    { id: 'ordem', name: 'Ordem Executiva', path: '/arquivo/publicacoes/ordem' },
    { id: 'portaria', name: 'Portaria', path: '/arquivo/publicacoes/portaria' },
    { id: 'medida', name: 'Medida Provisória', path: '/arquivo/publicacoes/medida' },
    { id: 'tratado', name: 'Tratado', path: '/arquivo/publicacoes/tratado' }
  ];

  return (
    <PageTemplate 
      title={`Publicações - ${getTypeName(currentType)}`}
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
            Nenhuma publicação encontrada para {getTypeName(currentType)}.
          </p>
        ) : (
          publications.map(pub => (
            <div key={pub.id} style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderLeft: "4px solid #a58a50"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "20px" }}>{getTypeIcon(currentType)}</span>
                  <span style={{ fontSize: "12px", color: "#a58a50", fontWeight: "600", textTransform: "uppercase" }}>
                    {getTypeName(currentType)}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "#04300a", background: "#f5ecda", padding: "4px 8px", borderRadius: "4px" }}>
                  Nº {pub.numero}
                </span>
              </div>
              
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
                  gap: "5px"
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