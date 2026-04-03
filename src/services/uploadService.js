// Salvar imagem no localStorage (para testes)
// Depois podemos migrar para Firebase ou servidor

const IMAGES_STORAGE_KEY = 'grao_ducado_images';

// Salvar imagem
export const saveImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const imageData = e.target.result;
      const imageId = Date.now() + '_' + file.name;
      
      const savedImages = localStorage.getItem(IMAGES_STORAGE_KEY);
      let images = savedImages ? JSON.parse(savedImages) : {};
      
      images[imageId] = imageData;
      localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(images));
      
      resolve(imageId);
    };
    
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Buscar imagem
export const getImage = (imageId) => {
  const savedImages = localStorage.getItem(IMAGES_STORAGE_KEY);
  if (savedImages) {
    const images = JSON.parse(savedImages);
    return images[imageId] || null;
  }
  return null;
};

// Listar todas as imagens
export const getAllImages = () => {
  const savedImages = localStorage.getItem(IMAGES_STORAGE_KEY);
  return savedImages ? JSON.parse(savedImages) : {};
};

// Deletar imagem
export const deleteImage = (imageId) => {
  const savedImages = localStorage.getItem(IMAGES_STORAGE_KEY);
  if (savedImages) {
    const images = JSON.parse(savedImages);
    delete images[imageId];
    localStorage.setItem(IMAGES_STORAGE_KEY, JSON.stringify(images));
  }
};