import * as S from "./styles";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_5maeojj',
  TEMPLATE_ID: 'template_ioxowil',
  PUBLIC_KEY: '4EfdRfE9EBXETXuaV'
};

export default function CitizenModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    reason: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: `📞 Telefone: ${formData.phone || "Não informado"}\n🌍 Cidade/País: ${formData.city}\n\n💭 Motivo:\n${formData.reason}`,
          time: new Date().toLocaleString('pt-BR'),
          title: "Solicitação de Cidadania - Grão-Ducado do Pantanal"
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          reason: ""
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        
        <S.ModalTitle>Torne-se cidadão do Grão-Ducado do Pantanal</S.ModalTitle>
        
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <label>Nome completo *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
            />
          </S.FormGroup>

          <S.FormGroup>
            <label>E-mail *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </S.FormGroup>

          <S.FormGroup>
            <label>Telefone (opcional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
            />
          </S.FormGroup>

          <S.FormGroup>
            <label>Cidade/País *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Sua cidade e país"
            />
          </S.FormGroup>

          <S.FormGroup>
            <label>Por que deseja se tornar cidadão? *</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Conte-nos seu motivo..."
            />
          </S.FormGroup>

          {submitStatus === "success" && (
            <S.SuccessMessage>
              Solicitação enviada com sucesso! Em breve entraremos em contato.
            </S.SuccessMessage>
          )}

          {submitStatus === "error" && (
            <S.ErrorMessage>
              Erro ao enviar. Tente novamente mais tarde.
            </S.ErrorMessage>
          )}

          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar solicitação"}
          </S.SubmitButton>
        </S.Form>
      </S.ModalContent>
    </S.Overlay>
  );
}