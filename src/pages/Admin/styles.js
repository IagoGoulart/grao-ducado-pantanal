import styled from "styled-components";

// ========== LOGIN STYLES ==========
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1f3d2b, #163024);
`;

export const LoginCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: #04300a;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'EB Garamond', serif;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginInput = styled.input`
  padding: 12px 15px;
  border: 1px solid #a58a50;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'EB Garamond', serif;
  
  &:focus {
    outline: none;
    border-color: #04300a;
  }
`;

export const LoginError = styled.p`
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
`;

export const LoginButton = styled.button`
  padding: 12px;
  background-color: #a58a50;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  transition: all 0.3s ease;

  &:hover {
    background-color: #8b7340;
  }
`;

// ========== ADMIN PANEL STYLES ==========
export const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
  position: relative;
`;

export const Sidebar = styled.div`
  width: 280px;
  background: #1f3d2b;
  color: #e6d3a3;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  z-index: 100;
  
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    height: auto;
  }
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #c5a96b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: #1f3d2b;
  z-index: 10;

  h2 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const LogoutButton = styled.button`
  background: rgba(197, 169, 107, 0.3);
  border: 1px solid #c5a96b;
  color: #e6d3a3;
  padding: 5px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  
  &:hover {
    background: rgba(197, 169, 107, 0.5);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(197, 169, 107, 0.3);
  margin: 0 15px 15px 15px;
`;

export const NavItem = styled.button`
  flex: 1;
  padding: 12px;
  background: ${props => props.active ? '#c5a96b' : 'transparent'};
  color: ${props => props.active ? '#1f3d2b' : '#e6d3a3'};
  border: none;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '400'};
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#c5a96b' : 'rgba(197, 169, 107, 0.2)'};
  }
`;

export const PageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
`;

export const PageItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? '#c5a96b' : 'transparent'};
  color: ${props => props.active ? '#1f3d2b' : '#e6d3a3'};
  
  &:hover {
    background: ${props => props.active ? '#c5a96b' : 'rgba(197, 169, 107, 0.3)'};
    padding-left: 25px;
  }
`;

export const EditorArea = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 30px;
  overflow-y: auto;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
  position: sticky;
  top: 0;
  background: #f5f5f5;
  padding: 10px 0;
  z-index: 10;
  
  h2 {
    font-size: 24px;
    color: #04300a;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 24px;
  background-color: #a58a50;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: #8b7340;
  }
`;

export const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`;

export const EditorSection = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const EditorLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #04300a;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'EB Garamond', serif;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #999;
  font-size: 18px;
  min-height: 400px;
`;

// ========== SEÇÃO STYLES ==========
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SectionTitleInput = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 18px;
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
`;

export const SectionButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const MoveButton = styled.button`
  padding: 8px 12px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover:not(:disabled) {
    background: #e0e0e0;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RemoveButton = styled.button`
  padding: 8px 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 6px;
  color: #c00;
  cursor: pointer;
  
  &:hover {
    background: #fdd;
  }
`;

// ========== SUBSEÇÃO STYLES ==========
export const SubsectionCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  border-left: 3px solid #a58a50;
`;

export const SubsectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SubsectionTitleInput = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'EB Garamond', serif;
  font-weight: 500;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
`;

export const RemoveSubButton = styled.button`
  padding: 6px 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 6px;
  color: #c00;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background: #fdd;
  }
`;

export const AddSubButton = styled.button`
  margin-top: 25px;
  padding: 10px 20px;
  background: #e8f0e8;
  border: 1px solid #a58a50;
  border-radius: 6px;
  color: #04300a;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  text-align: center;
  
  &:hover {
    background: #d4e4d4;
  }
`;

export const AddSectionButton = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 14px;
  background: #e8f0e8;
  border: 2px dashed #a58a50;
  border-radius: 8px;
  color: #04300a;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  
  &:hover {
    background: #d4e4d4;
  }
`;

// ========== NOTÍCIAS STYLES ==========
export const Form = styled.form`
  width: 100%;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #04300a;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
`;

export const SmallButton = styled.button`
  margin-top: 8px;
  padding: 4px 12px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-family: 'EB Garamond', serif;
  
  &:hover {
    background: #e0e0e0;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #a58a50;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'EB Garamond', serif;
  margin-top: 20px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background-color: #8b7340;
  }
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 6px;
  color: #c00;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  
  &:hover {
    background: #fdd;
  }
`;

export const NewsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background: #f5f5f5;
    font-weight: 600;
    color: #04300a;
  }
  
  td {
    color: #333;
  }
  
  tr:hover {
    background: #f9f9f9;
  }
`;

export const EditButton = styled.button`
  padding: 4px 12px;
  background: #e8f0e8;
  border: 1px solid #a58a50;
  border-radius: 4px;
  color: #04300a;
  cursor: pointer;
  margin-right: 8px;
  font-family: 'EB Garamond', serif;
  
  &:hover {
    background: #d4e4d4;
  }
`;

export const DeleteButton = styled.button`
  padding: 4px 12px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 4px;
  color: #c00;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  
  &:hover {
    background: #fdd;
  }
`;

// ========== UPLOAD DE IMAGEM STYLES ==========


export const ImageUploadArea = styled.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  background: #fafafa;
`;

export const ImageInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ImagePreview = styled.div`
  margin-top: 15px;
  position: relative;
  display: inline-block;
  
  img {
    max-width: 200px;
    max-height: 150px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: #c00;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #fdd;
  }
`;

// Adicione no final do arquivo:

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'EB Garamond', serif;
  
  &:focus {
    outline: none;
    border-color: #a58a50;
  }
  
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const TypeFilter = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

export const TypeButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.active ? '#a58a50' : '#f5f5f5'};
  color: ${props => props.active ? '#fff' : '#04300a'};
  border: 1px solid #a58a50;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#8b7340' : '#e0e0e0'};
  }
`;

export const PublicationsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background: #f5f5f5;
    font-weight: 600;
    color: #04300a;
  }
  
  td {
    color: #333;
  }
  
  tr:hover {
    background: #f9f9f9;
  }
`;