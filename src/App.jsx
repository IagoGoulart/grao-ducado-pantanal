import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import emailjs from '@emailjs/browser';

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

// SOBRE
import QuemSomos from "./pages/Sobre/QuemSomos";
import SimbolosNacionais from "./pages/Sobre/SimbolosNacionais";
import Noticias from "./pages/Sobre/Noticias";

// COROA
import CoroaPantaneira from "./pages/Coroa/CoroaPantaneira";
import SuaAltezaReal from "./pages/Coroa/SuaAltezaReal";
import CasaGraoDucal from "./pages/Coroa/CasaGraoDucal";
import EstatutoDinastico from "./pages/Coroa/EstatutoDinastico";
import NobrezaAristocracia from "./pages/Coroa/NobrezaAristocracia";
import CodigoNobiliarchico from "./pages/Coroa/CodigoNobiliarchico";
import OrdensCondecoracoes from "./pages/Coroa/OrdensCondecoracoes";

// GOVERNO
import ConselhoGoverno from "./pages/Governo/ConselhoGoverno";
import Chanceler from "./pages/Governo/Chanceler";
import BancoCentral from "./pages/Governo/BancoCentral";

// LEGISLATIVO
import Parlamento from "./pages/Legislativo/Parlamento";
import Legislacao from "./pages/Legislativo/Legislacao";

// JUDICIÁRIO
import SupremoTribunal from "./pages/Judiciario/SupremoTribunal";
import DiarioJustica from "./pages/Judiciario/DiarioJustica";

// DIPLOMACIA
import EmbaixadasConsulados from "./pages/Diplomacia/EmbaixadasConsulados";
import TratadosInternacionais from "./pages/Diplomacia/TratadosInternacionais";

// ARQUIVO - PUBLICAÇÕES
import Publicacoes from "./pages/Arquivo/Publicacoes";
import DecretoGraoDucal from "./pages/Arquivo/Publicacoes/DecretoGraoDucal";
import AtoDaCoroa from "./pages/Arquivo/Publicacoes/AtoDaCoroa";
import OrdemExecutiva from "./pages/Arquivo/Publicacoes/OrdemExecutiva";
import Portaria from "./pages/Arquivo/Publicacoes/Portaria";
import MedidaProvisoria from "./pages/Arquivo/Publicacoes/MedidaProvisoria";
import Tratados from "./pages/Arquivo/Publicacoes/Tratados";
import ConstituicaoNacional from "./pages/Arquivo/ConstituicaoNacional";

// NOTÍCIA INDIVIDUAL
import Noticia from "./pages/Noticia/Noticia";

// ADMIN
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminNews from "./pages/Admin/AdminNews";
import AdminPublications from "./pages/Admin/AdminPublications";

emailjs.init('4EfdRfE9EBXETXuaV');

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            
            {/* SOBRE */}
            <Route path="/sobre/quem-somos" element={<QuemSomos />} />
            <Route path="/sobre/simbolos-nacionais" element={<SimbolosNacionais />} />
            <Route path="/sobre/noticias" element={<Noticias />} />
            
            {/* COROA */}
            <Route path="/coroa/coroa-pantaneira" element={<CoroaPantaneira />} />
            <Route path="/coroa/sua-alteza-real" element={<SuaAltezaReal />} />
            <Route path="/coroa/casa-grao-ducal" element={<CasaGraoDucal />} />
            <Route path="/coroa/estatuto-dinastico" element={<EstatutoDinastico />} />
            <Route path="/coroa/nobreza-aristocracia" element={<NobrezaAristocracia />} />
            <Route path="/coroa/codigo-nobiliarchico" element={<CodigoNobiliarchico />} />
            <Route path="/coroa/ordens-condecoracoes" element={<OrdensCondecoracoes />} />
            
            {/* GOVERNO */}
            <Route path="/governo/conselho-governo" element={<ConselhoGoverno />} />
            <Route path="/governo/chanceler" element={<Chanceler />} />
            <Route path="/governo/banco-central" element={<BancoCentral />} />
            
            {/* LEGISLATIVO */}
            <Route path="/legislativo/parlamento" element={<Parlamento />} />
            <Route path="/legislativo/legislacao" element={<Legislacao />} />
            
            {/* JUDICIÁRIO */}
            <Route path="/judiciario/supremo-tribunal" element={<SupremoTribunal />} />
            <Route path="/judiciario/diario-justica" element={<DiarioJustica />} />
            
            {/* DIPLOMACIA */}
            <Route path="/diplomacia/embaixadas-consulados" element={<EmbaixadasConsulados />} />
            <Route path="/diplomacia/tratados-internacionais" element={<TratadosInternacionais />} />
            
            {/* ARQUIVO */}
            <Route path="/arquivo/constituicao-nacional" element={<ConstituicaoNacional />} />
            <Route path="/arquivo/publicacoes/:type" element={<Publicacoes />} />
            <Route path="/arquivo/publicacoes/decreto/:id" element={<DecretoGraoDucal />} />
            <Route path="/arquivo/publicacoes/ato/:id" element={<AtoDaCoroa />} />
            <Route path="/arquivo/publicacoes/ordem/:id" element={<OrdemExecutiva />} />
            <Route path="/arquivo/publicacoes/portaria/:id" element={<Portaria />} />
            <Route path="/arquivo/publicacoes/medida/:id" element={<MedidaProvisoria />} />
            <Route path="/arquivo/publicacoes/tratado/:id" element={<Tratados />} />
            
            {/* NOTÍCIA */}
            <Route path="/noticia/:id" element={<Noticia />} />
          </Route>

          {/* ADMIN */}
          <Route path="/admin-grao-duque" element={<AdminLogin />} />
          <Route path="/admin-grao-duque/panel" element={<AdminPanel />} />
          <Route path="/admin-grao-duque/news" element={<AdminNews />} />
          <Route path="/admin-grao-duque/publications" element={<AdminPublications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;