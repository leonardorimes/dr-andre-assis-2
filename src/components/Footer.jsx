import { MdEmail } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";

import "./Footer.css";



const Footer = () => {

  return (
    <div className="footer">
        <p> <span className="rights"><TbCircleLetterC /> 2024 - Todos os direitos reservados</span></p> 
        <p> <span className="email"><MdEmail /> andreassis82@gmail.com </span></p>
    </div>
  );
};

export default Footer;
