import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as S from "./styles";
import { getAvailablePages, loadContent, saveContent } from "../../services/contentService";

export default function AdminPanel() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [content, setContent] = useState({ title: "", sections: [] });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const pages = getAvailablePages();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      navigate("/admin-grao-duque");
    }
  }, [navigate]);

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    const pageContent = loadContent(page.id);
    const sectionsWithSubsections = pageContent.sections.map(section => ({
      ...section,
      subsections: section.subsections || []
    }));
    setContent({ ...pageContent, sections: sectionsWithSubsections });
    setSaved(false);
  };

  const addSection = () => {
    const newSections = [...content.sections];
    newSections.push({
      title: "Nova Seção",
      text: "<p>Digite o conteúdo aqui...</p>",
      subsections: []
    });
    setContent({ ...content, sections: newSections });
  };

  const removeSection = (index) => {
    const newSections = [...content.sections];
    newSections.splice(index, 1);
    setContent({ ...content, sections: newSections });
  };

  const updateSectionTitle = (index, title) => {
    const newSections = [...content.sections];
    newSections[index].title = title;
    setContent({ ...content, sections: newSections });
  };

  const updateSectionText = (index, text) => {
    const newSections = [...content.sections];
    newSections[index].text = text;
    setContent({ ...content, sections: newSections });
  };

  const addSubsection = (sectionIndex) => {
    const newSections = [...content.sections];
    if (!newSections[sectionIndex].subsections) {
      newSections[sectionIndex].subsections = [];
    }
    newSections[sectionIndex].subsections.push({
      title: "Nova Subseção",
      text: "<p>Digite o conteúdo da subseção...</p>"
    });
    setContent({ ...content, sections: newSections });
  };

  const removeSubsection = (sectionIndex, subIndex) => {
    const newSections = [...content.sections];
    newSections[sectionIndex].subsections.splice(subIndex, 1);
    setContent({ ...content, sections: newSections });
  };

  const updateSubsection = (sectionIndex, subIndex, field, value) => {
    const newSections = [...content.sections];
    newSections[sectionIndex].subsections[subIndex][field] = value;
    setContent({ ...content, sections: newSections });
  };

  const moveSection = (index, direction) => {
    const newSections = [...content.sections];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= newSections.length) return;
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
    setContent({ ...content, sections: newSections });
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      saveContent(selectedPage.id, content);
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin-grao-duque");
  };

  return (
    <S.AdminContainer>
      <S.Sidebar>
        <S.SidebarHeader>
          <h2>Painel Admin</h2>
          <S.LogoutButton onClick={handleLogout}>Sair</S.LogoutButton>
        </S.SidebarHeader>
        
        <S.NavMenu>
          <S.NavItem active onClick={() => navigate("/admin-grao-duque/panel")}>
            📄 Páginas
          </S.NavItem>
          <S.NavItem onClick={() => navigate("/admin-grao-duque/news")}>
            📰 Notícias
          </S.NavItem>
          <S.NavItem onClick={() => navigate("/admin-grao-duque/publications")}>
            📑 Publicações
          </S.NavItem>
        </S.NavMenu>
        
        <S.PageList>
          {pages.map((page) => (
            <S.PageItem
              key={page.id}
              active={selectedPage?.id === page.id}
              onClick={() => handlePageSelect(page)}
            >
              {page.name}
            </S.PageItem>
          ))}
        </S.PageList>
      </S.Sidebar>

      <S.EditorArea>
        {selectedPage ? (
          <>
            <S.EditorHeader>
              <h2>Editando: {selectedPage.name}</h2>
              <S.SaveButton onClick={handleSave} disabled={loading}>
                {loading ? "Salvando..." : "Salvar Alterações"}
              </S.SaveButton>
            </S.EditorHeader>
            {saved && <S.SuccessMessage>Conteúdo salvo com sucesso!</S.SuccessMessage>}

            <S.EditorSection>
              <S.EditorLabel>Título da Página</S.EditorLabel>
              <S.TitleInput
                type="text"
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
              />
            </S.EditorSection>

            {content.sections && content.sections.map((section, sectionIndex) => (
              <S.EditorSection key={sectionIndex}>
                <S.SectionHeader>
                  <S.SectionTitleInput
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                    placeholder="Título da seção"
                  />
                  <S.SectionButtons>
                    <S.MoveButton 
                      onClick={() => moveSection(sectionIndex, 'up')}
                      disabled={sectionIndex === 0}
                    >
                      ↑
                    </S.MoveButton>
                    <S.MoveButton 
                      onClick={() => moveSection(sectionIndex, 'down')}
                      disabled={sectionIndex === content.sections.length - 1}
                    >
                      ↓
                    </S.MoveButton>
                    <S.RemoveButton onClick={() => removeSection(sectionIndex)}>
                      Remover
                    </S.RemoveButton>
                  </S.SectionButtons>
                </S.SectionHeader>
                
                <div style={{ marginBottom: "30px" }}>
                  <ReactQuill
                    theme="snow"
                    value={section.text}
                    onChange={(value) => updateSectionText(sectionIndex, value)}
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, false] }],
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "clean"],
                      ],
                    }}
                    style={{ height: "200px" }}
                  />
                </div>

                {section.subsections && section.subsections.map((sub, subIndex) => (
                  <S.SubsectionCard key={subIndex}>
                    <S.SubsectionHeader>
                      <S.SubsectionTitleInput
                        type="text"
                        value={sub.title}
                        onChange={(e) => updateSubsection(sectionIndex, subIndex, "title", e.target.value)}
                        placeholder="Título da subseção"
                      />
                      <S.RemoveSubButton onClick={() => removeSubsection(sectionIndex, subIndex)}>
                        Remover
                      </S.RemoveSubButton>
                    </S.SubsectionHeader>
                    <div style={{ marginBottom: "30px" }}>
                      <ReactQuill
                        theme="snow"
                        value={sub.text}
                        onChange={(value) => updateSubsection(sectionIndex, subIndex, "text", value)}
                        modules={{
                          toolbar: [
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "clean"],
                          ],
                        }}
                        style={{ height: "150px" }}
                      />
                    </div>
                  </S.SubsectionCard>
                ))}

                <S.AddSubButton onClick={() => addSubsection(sectionIndex)}>
                  + Adicionar Subseção
                </S.AddSubButton>
              </S.EditorSection>
            ))}

            <S.AddSectionButton onClick={addSection}>
              + Adicionar Nova Seção
            </S.AddSectionButton>
          </>
        ) : (
          <S.EmptyState>
            <p>Selecione uma página no menu lateral para começar a editar</p>
          </S.EmptyState>
        )}
      </S.EditorArea>
    </S.AdminContainer>
  );
}