import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as S from "./styles";
import { 
  loadAllPublications, 
  addPublication, 
  updatePublication, 
  deletePublication,
  publicationTypes,
  publicationNames
} from "../../services/publicationsService";

export default function AdminPublications() {
  const [publications, setPublications] = useState({});
  const [selectedType, setSelectedType] = useState(publicationTypes.DECRETO);
  const [editingPub, setEditingPub] = useState(null);
  const [formData, setFormData] = useState({
    numero: "",
    titulo: "",
    date: "",
    content: "",
    excerpt: "",
    author: "",
    image: ""
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      navigate("/admin-grao-duque");
    }
    loadAllPubs();
  }, [navigate]);

  const loadAllPubs = () => {
    const allPubs = loadAllPublications();
    setPublications(allPubs);
  };

  const compressImage = (file, maxWidth = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          const base64 = canvas.toDataURL('image/jpeg', quality);
          resolve(base64);
        };
        
        img.onerror = () => {
          reject(new Error('Erro ao carregar imagem'));
        };
      };
      
      reader.onerror = () => {
        reject(new Error('Erro ao ler arquivo'));
      };
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert("Por favor, selecione uma imagem válida (JPEG, PNG, etc.)");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 10MB");
      return;
    }

    setUploading(true);
    
    try {
      const compressedImage = await compressImage(file, 600, 0.7);
      setFormData({ ...formData, image: compressedImage });
      setImagePreview(compressedImage);
    } catch (error) {
      console.error("Erro ao processar imagem:", error);
      alert("Erro ao processar imagem. Tente outra imagem.");
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (editingPub) {
      updatePublication(selectedType, editingPub.id, formData);
    } else {
      addPublication(selectedType, formData);
    }

    setTimeout(() => {
      loadAllPubs();
      setFormData({
        numero: "",
        titulo: "",
        date: "",
        content: "",
        excerpt: "",
        author: "",
        image: ""
      });
      setImagePreview(null);
      setEditingPub(null);
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  const handleEdit = (type, item) => {
    setSelectedType(type);
    setEditingPub(item);
    setFormData({
      numero: item.numero,
      titulo: item.titulo,
      date: item.date,
      content: item.content,
      excerpt: item.excerpt,
      author: item.author,
      image: item.image || ""
    });
    setImagePreview(item.image || null);
  };

  const handleDelete = async (type, id, titulo) => {
    if (window.confirm(`Tem certeza que deseja excluir "${titulo}"?`)) {
      setDeleting(true);
      try {
        deletePublication(type, id);
        await loadAllPubs();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } catch (error) {
        console.error("Erro ao excluir:", error);
        alert("Erro ao excluir publicação");
      } finally {
        setDeleting(false);
      }
    }
  };

  const handleCancel = () => {
    setEditingPub(null);
    setFormData({
      numero: "",
      titulo: "",
      date: "",
      content: "",
      excerpt: "",
      author: "",
      image: ""
    });
    setImagePreview(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin-grao-duque");
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const typeOptions = Object.entries(publicationTypes).map(([key, value]) => ({
    id: value,
    name: publicationNames[value]
  }));

  const currentPublications = publications[selectedType] || [];

  return (
    <S.AdminContainer>
      <S.Sidebar>
        <S.SidebarHeader>
          <h2>Painel Admin</h2>
          <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
        </S.SidebarHeader>
        
        <S.NavMenu>
          <S.NavItem onClick={() => navigate("/admin-grao-duque/panel")}>
            📄 Páginas
          </S.NavItem>
          <S.NavItem onClick={() => navigate("/admin-grao-duque/news")}>
            📰 Notícias
          </S.NavItem>
          <S.NavItem active onClick={() => navigate("/admin-grao-duque/publications")}>
            📑 Publicações
          </S.NavItem>
        </S.NavMenu>
      </S.Sidebar>

      <S.EditorArea>
        <S.EditorHeader>
          <h2>{editingPub ? "Editar Publicação" : "Nova Publicação"}</h2>
          {editingPub && (
            <S.CancelButton onClick={handleCancel}>Cancelar Edição</S.CancelButton>
          )}
        </S.EditorHeader>

        {saved && <S.SuccessMessage>Publicação salva/excluída com sucesso!</S.SuccessMessage>}

        <S.EditorSection>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label>Tipo de Publicação *</S.Label>
              <S.Select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={editingPub !== null}
              >
                {typeOptions.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.name}</option>
                ))}
              </S.Select>
            </S.FormGroup>

            <S.FormRow>
              <S.FormGroup>
                <S.Label>Número *</S.Label>
                <S.Input
                  type="text"
                  name="numero"
                  value={formData.numero}
                  onChange={handleInputChange}
                  placeholder="Ex: 001/2026"
                  required
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Data *</S.Label>
                <S.Input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="Ex: 22 de fevereiro, 2026"
                  required
                />
                <S.SmallButton type="button" onClick={() => setFormData({...formData, date: getCurrentDate()})}>
                  Usar data atual
                </S.SmallButton>
              </S.FormGroup>
            </S.FormRow>

            <S.FormGroup>
              <S.Label>Imagem da Publicação</S.Label>
              <S.ImageUploadArea>
                <S.ImageInput
                  type="file"
                  accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
                {uploading && <p style={{ marginTop: "10px", color: "#a58a50" }}>Processando imagem...</p>}
                {imagePreview && (
                  <S.ImagePreview>
                    <img src={imagePreview} alt="Preview" />
                    <S.RemoveImageButton type="button" onClick={() => {
                      setFormData({...formData, image: ""});
                      setImagePreview(null);
                    }}>
                      ✕
                    </S.RemoveImageButton>
                  </S.ImagePreview>
                )}
              </S.ImageUploadArea>
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Título *</S.Label>
              <S.Input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Autor *</S.Label>
              <S.Input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Ex: Grão-Duque, Chanceler, etc."
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Resumo *</S.Label>
              <S.TextArea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows="2"
                required
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Conteúdo completo *</S.Label>
              <div style={{ marginBottom: "50px" }}>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleContentChange}
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, false] }],
                      ["bold", "italic", "underline", "strike"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link", "clean"],
                    ],
                  }}
                  style={{ height: "300px" }}
                />
              </div>
            </S.FormGroup>

            <S.SubmitButton type="submit" disabled={loading || uploading}>
              {loading ? "Salvando..." : (editingPub ? "Atualizar Publicação" : "Publicar")}
            </S.SubmitButton>
          </S.Form>
        </S.EditorSection>

        <S.EditorSection>
          <h3 style={{ marginBottom: "20px", color: "#04300a" }}>
            Publicações - {publicationNames[selectedType]}
          </h3>
          
          <S.TypeFilter>
            {typeOptions.map(opt => (
              <S.TypeButton
                key={opt.id}
                active={selectedType === opt.id}
                onClick={() => setSelectedType(opt.id)}
              >
                {opt.name}
              </S.TypeButton>
            ))}
          </S.TypeFilter>

          <S.PublicationsTable>
            <thead>
              <tr>
                <th>Número</th>
                <th>Título</th>
                <th>Data</th>
                <th>Autor</th>
                <th>Imagem</th>
                <th style={{ width: "150px" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {currentPublications.map((item) => (
                <tr key={item.id}>
                  <td>{item.numero}</td>
                  <td style={{ maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.titulo}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.author}</td>
                  <td>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.titulo} 
                        style={{ width: "50px", height: "30px", objectFit: "cover", borderRadius: "4px" }}
                      />
                    ) : (
                      <span style={{ color: "#999" }}>Sem imagem</span>
                    )}
                  </td>
                  <td>
                    <S.EditButton onClick={() => handleEdit(selectedType, item)}>
                      Editar
                    </S.EditButton>
                    <S.DeleteButton 
                      onClick={() => handleDelete(selectedType, item.id, item.titulo)}
                      disabled={deleting}
                    >
                      {deleting ? "..." : "Excluir"}
                    </S.DeleteButton>
                   </td>
                 </tr>
              ))}
              {currentPublications.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: "40px" }}>
                    Nenhuma publicação cadastrada. Crie a primeira!
                  </td>
                </tr>
              )}
            </tbody>
          </S.PublicationsTable>
        </S.EditorSection>
      </S.EditorArea>
    </S.AdminContainer>
  );
}