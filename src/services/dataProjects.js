import nftMini from "../assets/image/projects/Nft-mini.png";
import nftBig from "../assets/image/projects/Nft.png";

import ksTechMini from "../assets/image/projects/ksTech-mini.png"
import ksTech from "../assets/image/projects/ksTech.png"

import ggbMini from "../assets/image/projects/ggb-mini.png"
import ggb from "../assets/image/projects/ggb.png"


import sucelsoMini from "../assets/image/projects/sucelso-mini.png"
import sucelso from "../assets/image/projects/sucelso.png"

import buscadorMini from "../assets/image/projects/cep-mini.png"
import buscador from "../assets/image/projects/cep.png"

const data = [
  {
    id: 1,
    name: "LandingPage NFT",
    image: nftMini,
    bigImage: nftBig ,
    description: "Explore o fascinante mundo dos NFTs (Tokens Não Fungíveis) com esta deslumbrante Landing Page desenvolvida em React e Sass. Esta página foi cuidadosamente concebida para oferecer uma experiência visualmente envolvente e funcional aos visitantes interessados em arte digital exclusiva.Com um design contemporâneo e atrativo, a LandingPage NFT apresenta um elegante modo escuro que realça as cores vibrantes das obras de arte em destaque. Cada elemento foi meticulosamente pensado para transmitir uma sensação de inovação e modernidade.Além da estética apurada, a funcionalidade não foi esquecida. Um botão estrategicamente posicionado permite que os usuários rolem suavemente até o topo da página, facilitando a navegação e garantindo uma experiência fluida. Esta Landing Page não é apenas uma vitrine, mas sim uma celebração da criatividade digital e do potencial revolucionário dos NFTs." ,
    languages: [" React - "," Sass "],
    linkSite:"",
    linkCode:"https://github.com/NataliaReiis/NFT-LandingPage"
  },
  {
    id: 2,
    name: "Site ks Tech",
    image: ksTechMini,
    bigImage: ksTech,
    description: "Como estagiária front-end, tive o privilégio de liderar o desenvolvimento completo do site KS Tech, utilizando tecnologias modernas para criar uma experiência envolvente e dinâmica.O site foi construído com React, aproveitando o poderoso React Router DOM para gerenciar a navegação entre páginas de forma intuitiva. A integração do Framer Motion adicionou elegância e fluidez às transições e animações, elevando o design visual do site para um novo patamar.Além disso, utilizei o useEffect para gerenciar o ciclo de vida dos componentes, garantindo uma renderização eficiente e otimizada.   A combinação dessas tecnologias e bibliotecas resultou em um site responsivo, rápido e visualmente atraente.A colaboração com a equipe de design permitiu a incorporação dos valores e identidade da KS Tech em cada aspecto do site. Essa experiência não apenas demonstrou minhas habilidades técnicas, mas também minha capacidade de trabalhar de forma colaborativa em um ambiente profissional.  O projeto KS Tech representa uma realização significativa em minha jornada como desenvolvedora front-end, destacando meu domínio das mais recentes tecnologias e meu compromisso com a excelência na criação de produtos digitais." ,
    languages: ["React - ", "Sass"],
    linkSite:"https://kssolutions.tech/",
    linkCode:"https://github.com/NataliaReiis/ksSolutionsTech"
  },
  {
    id: 3,
    name: "Site GGB ",
    image: ggbMini,
    bigImage: ggb,
    description: "Como parte do grupo de desenvolvimento front-end, contribuí para o projeto do site do Grupo Gay da Bahia (GGB) utilizando React e Sass. Nosso objetivo foi criar uma interface moderna e responsiva que refletisse os valores de diversidade e inclusão defendidos pelo GGB.Implementamos componentes dinâmicos em React e estilização avançada com Sass para garantir uma experiência de usuário envolvente. O design foi cuidadosamente planejado para refletir a identidade e missão do GGB, com animações suaves e transições elegantes.Minha participação neste projeto fortaleceu minha habilidade em desenvolvimento front-end e reforçou meu compromisso com a utilização da tecnologia para promover a inclusão social." ,
    languages: ["Reatc - ", "Sass"],
    linkSite:"",
    linkCode:"https://github.com/NataliaReiis/site-ggb"
  },
  {
    id: 4,
    name: "Sistema Escolar",
    image: sucelsoMini,
    bigImage: sucelso,
    description: "Desenvolvi um sistema de gerenciamento escolar durante minha formação acadêmica, utilizando React, CSS, React Router DOM, uma API REST e MySQL.O sistema foi construído com React para a interface de usuário, React Router DOM para navegação entre páginas e estilização em CSS para criar um layout responsivo. Utilizamos uma API REST para integrar o front-end com o back-end, permitindo o cadastro, consulta e gerenciamento de alunos, professores, disciplinas e dados acadêmicos armazenados em um banco de dados MySQL.Minha contribuição incluiu o desenvolvimento da interface em React, configuração das rotas com React Router DOM e integração com a API REST para manipulação de dados.Essa experiência ampliou minha compreensão prática de desenvolvimento web full-stack, desde a criação de componentes front-end até a integração com serviços back-end." ,
    languages: ["React -", " Css - ","MySql - API"],
    linkSite:"",
    linkCode:"https://github.com/NataliaReiis/Sistema-escolar-Sucelso"
  },
  {
    id: 5,
    name: "Buscador de Cep",
    image: buscadorMini,
    bigImage: buscador,
    description: "Desenvolvi uma página de busca de CEP em React, utilizando a API pública do Via CEP para fornecer informações de endereços de forma rápida e eficiente.Este projeto foi criado com o objetivo de demonstrar o poder do desenvolvimento front-end usando React e integração com APIs externas. A página permite aos usuários inserir um CEP e obter detalhes como logradouro, bairro, cidade e estado. Minha motivação para este projeto foi compartilhar conhecimentos através de palestras e oficinas de front-end, destacando a importância da integração de tecnologias como React com serviços de terceiros. O buscador de CEP representa uma aplicação prática do uso de React para criar interfaces interativas e funcionais, demonstrando as possibilidades do desenvolvimento web moderno." ,
    languages: ["React - "," css - "," API (viacep)" ],
    linkSite:"",
    linkCode:"https://github.com/NataliaReiis/buscador-react"
  },
];

export default data;
