import { useState } from "react";
import "./Card.css";



const Card = ({ img, children }) => {

   const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="card">
      <img src={`./src/assets/imagecards/${img}`} alt="" onClick={() => setIsOpen(!isOpen)}/>
      {isOpen &&<span>{children}</span>}
    </div>
  );
};

export default Card;
