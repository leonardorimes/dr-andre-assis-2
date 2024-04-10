import "./Card.css";

const Card = ({ img, content }) => {
  return (
    <div className="cardContainer">
      <img src={`./src/assets/imagecards/${img}`} alt="" />
      <span>{content}</span>
    </div>
  );
};

export default Card;
