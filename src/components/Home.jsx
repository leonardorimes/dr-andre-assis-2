import React from "react";
import "./Home.css";
import Card from "./Card";

const cardsData = [
  {
    img: "infeccao_e_sepse.png",
    links: [
      {
        title: "1. Protocolo Sepse HUNF (completo)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/1.Protocolo_Sepse_HUNF_completo.html",
      },
      {
        title: "1.1 Protocolo Sepse HUNF (BAM)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/1.1.Protocolo_Sepse_HUNF_BAM.html",
      },
    ],
  },
  {
    img: "cardiologia.png",
    links: [
      {
        title: "2. Protocolos Cardiologia (completo)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/2.Protocolos_Cardiologia_completo.html",
      },
      {
        title: "2.1 Pocket Book ECG SUPRA ST_ IAM e Diagnóstico Diferencial",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/2.2.Pocket_Book_ECG_SUPRA_ST_IAM_e_Diagnostico_Diferencial.html",
      },
    ],
  },
  {
    img: "neurologia.png",
    links: [
      {
        title: "3. Protocolo AVC HUNF (completo)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/3.Protocolo_AVC_HUNF_completo.html",
      },
      {
        title: "3.1 Protocolo AVC HUNF (BAM)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/3.1.Protocolo_AVC_HUNF_BAM.html",
      },
    ],
  },
  {
    img: "disturbios_hidroeletroliticos.png",
    links: [
      {
        title: "4.1 Distúrbios do Potássio (Hipocalemia e Hipercalemia)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/4.1.Disturbios_do_Potassio_Hipocalemia_e_Hipercalemia.html",
      },
      {
        title: "4.2 Distúrbios do Sódio (Hiponatremia e Hipernatremia)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/4.2.Disturbios_do_Sodio_Hiponatremia_e_Hipernatremia.html",
      },
    ],
  },
  {
    img: "drogas_vasoativas_e_infusoes.png",
    links: [
      {
        title: "5. Protocolo Cuidados Paliativos HUNF (BAM)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/5.Protocolo_Cuidados_Paliativos_HUNF_BAM.html",
      },
    ],
  },
  {
    img: "intubacao_e_sedacao.png",
    links: [
      {
        title: "6. Sequência Rápida de Intubação HUNF",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/6.Sequencia_Rapida_de_Intubacao_HUNF.html",
      },
    ],
  },
  {
    img: "hemorragia_digestiva.png",
    links: [
      {
        title: "7. Protocolo Hemorragia Digestiva Alta (HDA)",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/7.Protocolo_Hemorragia_Digestiva_Alta_HDA.html",
      },
    ],
  },
  {
    img: "dengue.png",
    links: [
      {
        title: "8. Protocolo Dengue",
        url: "https://victorcorreadasilva.github.io/projeto_assis/html/8.Protocolo_Dengue.html",
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="cardContainer">
      {cardsData.map((card, index) => (
        <Card key={index} img={card.img}>
          <ul>
            {card.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Home;
