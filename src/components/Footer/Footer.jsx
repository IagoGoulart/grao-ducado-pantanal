import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import brasaoPantanal from "../../assets/brasaooficial.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({ onCitizenClick }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (window.location.pathname === path) {
      // Se já está na página, só rola para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se é outra página, navega e depois rola para o topo
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <S.Container>
      <S.Footer>
        <S.BrasaoSection>
          <div onClick={() => handleLinkClick("/")} style={{ cursor: 'pointer' }}>
            <img src={brasaoPantanal} alt="Brasão do Grão-Ducado do Pantanal" />
            <h2>Grão-Ducado do Pantanal</h2>
          </div>
          <p>Soberania, Tradição e Ordem</p>
        </S.BrasaoSection>

        <S.LinksArea>
          <h3>Links Rápidos</h3>
          <ul>
            <li><button onClick={() => handleLinkClick("/")}>Início</button></li>
            <li><button onClick={() => handleLinkClick("/sobre/quem-somos")}>Sobre</button></li>
            <li><button onClick={() => handleLinkClick("/coroa/coroa-pantaneira")}>Coroa</button></li>
            <li><button onClick={() => handleLinkClick("/governo/conselho-governo")}>Governo</button></li>
            <li><button onClick={() => handleLinkClick("/sobre/noticias")}>Notícias</button></li>
            <li><button onClick={() => handleLinkClick("/contato")}>Contato</button></li>
          </ul>
        </S.LinksArea>

        <S.Divider />

        <S.SocialArea>
          <h3>Redes Sociais</h3>
          <S.SocialIcons>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </S.SocialIcons>
        </S.SocialArea>

        <S.ButtonSection>
          <S.CitizenButton onClick={onCitizenClick}>
            Torne-se cidadão
          </S.CitizenButton>
        </S.ButtonSection>
      </S.Footer>

      <S.LegalNotice>
        <p>
          Este site constitui uma obra coletiva de ficção, baseada na livre criação artística, 
          sem qualquer compromisso com a realidade. Seus participantes não representam, nem 
          estão vinculados a qualquer nação real, governo ou movimento separatista.
        </p>
        <p>
          O presente website destina-se exclusivamente aos praticantes do hobby virtual 
          conhecido como micronacionalismo, sendo voltado à simulação, ao desenvolvimento 
          criativo e à interação entre seus membros.
        </p>
      </S.LegalNotice>

      <S.Copyright>
        <p>&copy; {new Date().getFullYear()} Grão-Ducado do Pantanal. Todos os direitos reservados.</p>
      </S.Copyright>
    </S.Container>
  );
}