import * as S from "./styles";
import { Link } from "react-router-dom";
import coroa from "../../assets/coroa.png";

export default function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.LogoArea>
          <Link to="/">
            <img src={coroa} alt="Imagem de uma coroa" />
            <h1>Grão-Ducado do Pantanal</h1>
            <S.Subtitle>Micronação</S.Subtitle>
          </Link>
        </S.LogoArea>

        <S.Nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              Sobre
              <ul>
                <li>
                  <Link to="/sobre/quem-somos">Quem somos</Link>
                </li>
                <li>
                  <Link to="/sobre/simbolos-nacionais">Símbolos nacionais</Link>
                </li>
                <li>
                  <Link to="/sobre/noticias">Notícias</Link>
                </li>
              </ul>
            </li>

            <li>
              Coroa
              <ul>
                <li>
                  <Link to="/coroa/coroa-pantaneira">A Coroa Pantaneira</Link>
                </li>
                <li>
                  <Link to="/coroa/sua-alteza-real">Sua Alteza Real</Link>
                </li>
                <li>
                  <Link to="/coroa/casa-grao-ducal">A Casa Grão-Ducal</Link>
                </li>
                <li>
                  <Link to="/coroa/estatuto-dinastico">Estatuto Dinástico</Link>
                </li>
                <li>
                  <Link to="/coroa/nobreza-aristocracia">
                    Nobreza e Aristocracia
                  </Link>
                </li>
                <li>
                  <Link to="/coroa/codigo-nobiliarchico">
                    Código Nobiliárquico
                  </Link>
                </li>
                <li>
                  <Link to="/coroa/ordens-condecoracoes">
                    Ordens e Condecorações
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              Governo
              <ul>
                <li>
                  <Link to="/governo/conselho-governo">
                    Conselho de Governo
                  </Link>
                </li>
                <li>
                  <Link to="/governo/chanceler">O Chanceler</Link>
                </li>
                <li>
                  <Link to="/governo/banco-central">Banco Central</Link>
                </li>
              </ul>
            </li>

            <li>
              Legislativo
              <ul>
                <li>
                  <Link to="/legislativo/parlamento">O Parlamento</Link>
                </li>
                <li>
                  <Link to="/legislativo/legislacao">Legislação</Link>
                </li>
              </ul>
            </li>

            <li>
              Judiciário
              <ul>
                <li>
                  <Link to="/judiciario/supremo-tribunal">
                    Supremo Tribunal
                  </Link>
                </li>
                <li>
                  <Link to="/judiciario/diario-justica">Diário de Justiça</Link>
                </li>
              </ul>
            </li>

            <li>
              Diplomacia
              <ul>
                <li>
                  <Link to="/diplomacia/embaixadas-consulados">
                    Embaixadas e consulados
                  </Link>
                </li>
                <li>
                  <Link to="/diplomacia/tratados-internacionais">
                    Tratados internacionais
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              Arquivo
              <ul>
                <li>
                  <Link to="/arquivo/constituicao-nacional">
                    Constituição Nacional
                  </Link>
                </li>
                <li>
                  Publicações
                  <ul className="submenu">
                    <li>
                      <Link to="/arquivo/publicacoes/decreto">
                        Decreto Grão-Ducal
                      </Link>
                    </li>
                    <li>
                      <Link to="/arquivo/publicacoes/ato">Ato da Coroa</Link>
                    </li>
                    <li>
                      <Link to="/arquivo/publicacoes/ordem">
                        Ordem Executiva
                      </Link>
                    </li>
                    <li>
                      <Link to="/arquivo/publicacoes/portaria">Portaria</Link>
                    </li>
                    <li>
                      <Link to="/arquivo/publicacoes/medida">
                        Medida Provisória
                      </Link>
                    </li>
                    <li>
                      <Link to="/arquivo/publicacoes/tratado">Tratado</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </S.Nav>
      </S.Header>
    </S.Container>
  );
}
