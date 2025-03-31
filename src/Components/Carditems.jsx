import React from "react";
import { Link } from "react-router-dom";

function Carditems(props) {
  return (
    <>
      <li className="cardsItem">
        <Link className="cardsItemLink" to={props.path}>
          <figure className="cardItemPicWrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Portfolio Photos"
              className="cardItemImg"
            />
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Carditems;
