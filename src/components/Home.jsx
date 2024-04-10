import React from "react";

import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <div className="cardContainer">
      <Card
        img="infeccao_e_sepse.png"
        content={
          "1. Protocolo Sepse HUNF (completo) Protocolo Sepse HUNF (BAM)"
        }
      />
      <Card
        img="cardiologia.png"
        content={
          "2. Protocolos Cardiologia (completo) 2.2 Pocket Book ECG SUPRA ST_ IAM e Diagnóstico Diferencial  2.3 Protocolo Cardioversão HUNF (Taquiarritmias)  2.4 Protocolo Anticoagulação e Reversão Sangramento (HUNF) 2.5 TV x TSV_ Criterios Brugada, Vereckei, Santos"
        }
      />

      <Card
        img="neurologia.png"
        content={
          "3. Protocolo AVC HUNF (completo)  3.1 Protocolo AVC HUNF (BAM)= 3.2 Protocolo AVC (Escala NIHSS) 3.3 Controle Pressão AVC"
        }
      />

      <Card
        img="disturbios_hidroeletroliticos.png"
        content={
          "4.1 Distúrbios do Potássio (Hipocalemia e Hipercalemia)  4.2 Distúrbios do Sódio (Hiponatremia e Hipernatremia) 4.3 Distúrbios do Magnésio (Hipomagnesemia) Drogas vasoativas e infusões: Diluição, posologia, cuidados gerais.5."
        }
      />

      <Card
        img="drogas_vasoativas_e_infusoes.png"
        content={"5. Protocolo Cuidados Paliativos HUNF (BAM)"}
      />

      <Card
        img="intubacao_e_sedacao.png"
        content={"Sequência Rápida de Intubação HUNF"}
      />

      <Card
        img="hemorragia_digestiva.png"
        content={"Protocolo Hemorragia Digestiva Alta (HDA)"}
      />

      <Card img="dengue.png" content={"Protocolo Dengue"} />
    </div>
  );
};

export default Home;
