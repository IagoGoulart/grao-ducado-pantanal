import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as S from "./styles";
import { loadNews, addNews, updateNews, deleteNews } from "../../services/newsService";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    content: "",
    excerpt: ""
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      navigate("/admin-grao-duque");
    }
    loadNewsList();
  }, [navigate]);

  const loadNewsList = () => {
    const allNews = loadNews();
    setNews(allNews);
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

    const newsData = {
      title: formData.title,
      date: formData.date,
      image: formData.image || "",
      content: formData.content,
      excerpt: formData.excerpt
    };

    if (editingNews) {
      updateNews(editingNews.id, newsData);
    } else {
      addNews(newsData);
    }

    setTimeout(() => {
      loadNewsList();
      setFormData({ 
        title: "", 
        date: "", 
        image: "", 
        content: "", 
        excerpt: "" 
      });
      setImagePreview(null);
      setEditingNews(null);
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  const handleEdit = (item) => {
    setEditingNews(item);
    setFormData({
      title: item.title,
      date: item.date,
      image: item.image || "",
      content: item.content,
      excerpt: item.excerpt
    });
    setImagePreview(item.image || null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta notícia?")) {
      deleteNews(id);
      loadNewsList();
    }
  };

  const handleCancel = () => {
    setEditingNews(null);
    setFormData({ 
      title: "", 
      date: "", 
      image: "", 
      content: "", 
      excerpt: "" 
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
          <S.NavItem active onClick={() => navigate("/admin-grao-duque/news")}>
            📰 Notícias
          </S.NavItem>
          <S.NavItem onClick={() => navigate("/admin-grao-duque/publications")}>
            📑 Publicações
          </S.NavItem>
        </S.NavMenu>
      </S.Sidebar>

      <S.EditorArea>
        <S.EditorHeader>
          <h2>{editingNews ? "Editar Notícia" : "Nova Notícia"}</h2>
          {editingNews && (
            <S.CancelButton onClick={handleCancel}>Cancelar Edição</S.CancelButton>
          )}
        </S.EditorHeader>

        {saved && <S.SuccessMessage>Notícia salva com sucesso!</S.SuccessMessage>}

        <S.EditorSection>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label>Título *</S.Label>
              <S.Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </S.FormGroup>

            <S.FormRow>
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

              <S.FormGroup>
                <S.Label>Imagem da Notícia</S.Label>
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
            </S.FormRow>

            <S.FormGroup>
              <S.Label>Resumo (aparece no card) *</S.Label>
              <S.TextArea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows="3"
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
              {loading ? "Salvando..." : (editingNews ? "Atualizar Notícia" : "Publicar Notícia")}
            </S.SubmitButton>
          </S.Form>
        </S.EditorSection>

        <S.EditorSection>
          <h3 style={{ marginBottom: "20px", color: "#04300a" }}>Notícias Publicadas</h3>
          <S.NewsTable>
            <thead>
              <tr>
                <th>Título</th>
                <th>Data</th>
                <th>Imagem</th>
                <th style={{ width: "150px" }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item) => (
                <tr key={item.id}>
                  <td style={{ maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.title}
                   </td>
                  <td style={{ whiteSpace: "nowrap" }}>{item.date}</td>
                  <td>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ width: "50px", height: "30px", objectFit: "cover", borderRadius: "4px" }}
                      />
                    ) : (
                      <span style={{ color: "#999" }}>Sem imagem</span>
                    )}
                  </td>
                  <td>
                    <S.EditButton onClick={() => handleEdit(item)}>Editar</S.EditButton>
                    <S.DeleteButton onClick={() => handleDelete(item.id)}>Excluir</S.DeleteButton>
                  </td>
                </tr>
              ))}
              {news.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "40px" }}>
                    Nenhuma notícia cadastrada. Crie a primeira!
                  </td>
                </tr>
              )}
            </tbody>
          </S.NewsTable>
        </S.EditorSection>
      </S.EditorArea>
    </S.AdminContainer>
  );
}