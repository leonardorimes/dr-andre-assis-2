import React from "react";

import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <div className="cardContainer">
      <Card
        img="infeccao_e_sepse.png"
        
      >
        <ul>
        <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/1.Protocolo_Sepse_HUNF_completo.html" target="_blank">1. Protocolo Sepse HUNF (completo)</a></li> 
        <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/1.1.Protocolo_Sepse_HUNF_BAM.html" target="_blank">1.1 Protocolo Sepse HUNF (BAM)</a></li>  
        </ul>
        </Card>
      <Card
        img="cardiologia.png"
      >
        <ul>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/2.Protocolos_Cardiologia_completo.html" target="_blank"> 2. Protocolos Cardiologia (completo)</a></li>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/2.2.Pocket_Book_ECG_SUPRA_ST_IAM_e_Diagnostico_Diferencial.html"target="_blank"> 2.1 Pocket Book ECG SUPRA ST_ IAM e Diagnóstico Diferencial</a></li>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/2.3.Protocolo_Cardioversao_HUNF_Taquiarritmias.html" target="_blank"> 2.2 Protocolo Cardioversão HUNF (Taquiarritmias)</a></li>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/2.4.Protocolo_Anticoagulacao_e_Reversao_Sangramento_HUNF.html" target="_blank"> 2.3 Protocolo Anticoagulação e Reversão Sangramento (HUNF)</a></li>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/2.5.TV_x_TSV_Criterios_Brugada_Vereckei_Santos.html" target="_blank"> 2.4 TV x TSV_ Criterios Brugada, Vereckei, Santos
</a></li>

        </ul>
        </Card>

      <Card
        img="neurologia.png"
      >
        <ul>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/3.Protocolo_AVC_HUNF_completo.html" target="_blank">3. Protocolo AVC HUNF (completo)</a></li> 
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/3.1.Protocolo_AVC_HUNF_BAM.html" target="_blank">3.1 Protocolo AVC HUNF (BAM)</a></li> 
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/3.2.Protocolo_AVC_Escala_NIHSS.html" target="_blank">3.2 Protocolo AVC (Escala NIHSS)
          </a></li> 
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/3.3.Controle_Pressao_AVC.html" target="_blank">3.3 Controle Pressão AVC
          </a></li>  
        </ul>

      </Card>

      <Card img="disturbios_hidroeletroliticos.png">
      <ul>
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/4.1.Disturbios_do_Potassio_Hipocalemia_e_Hipercalemia.html" target="_blank">4. Distúrbios do Potássio (Hipocalemia e Hipercalemia)</a></li> 
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/4.2.Disturbios_do_Sodio_Hiponatremia_e_Hipernatremia.html" target="_blank">4.1 Distúrbios do Sódio (Hiponatremia e Hipernatremia)</a></li> 
          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/4.3.Disturbios_do_Magnesio_Hipomagnesemia.html" target="_blank">4.2 Distúrbios do Magnésio (Hipomagnesemia)

          </a></li> 
         
        </ul>
      </Card>

      <Card
        img="drogas_vasoativas_e_infusoes.png"
      >
        <ul>

        <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/5.Protocolo_Cuidados_Paliativos_HUNF_BAM.html" target="_blank">5. Distúrbios do Potássio (Hipocalemia e Hipercalemia)</a></li> 
        </ul>

        </Card>

      <Card
        img="intubacao_e_sedacao.png"
        
      >
            <ul>

          <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/6.Sequencia_Rapida_de_Intubacao_HUNF.html" target="_blank">6. Sequência Rápida de Intubação HUNF</a></li> 
          </ul>

        </Card>

      <Card
        img="hemorragia_digestiva.png"
       
      >

        <ul>

        <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/7.Protocolo_Hemorragia_Digestiva_Alta_HDA.html" target="_blank">7. Protocolo Hemorragia Digestiva Alta (HDA)</a></li> 
        </ul>

        </Card >

      <Card img="dengue.png">
      
      <ul>

      <li><a href="https://victorcorreadasilva.github.io/projeto_assis/html/6.0.Protocolo_Dengue.html" target="_blank">8. Protocolo Dengue</a></li> 
      </ul>
      </Card>
    </div>
  );
};

export default Home;
