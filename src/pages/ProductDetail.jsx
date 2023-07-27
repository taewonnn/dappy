import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {

  const [selected, setSelected] = useState(options && options[0]);

  const {
    state: {
      product: { id, image, title, description, category, price, options }
    }
  } = useLocation();




  return (
    <section>
      <p>{category}</p>
      <img  src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <p>옵션 :</p>
        <select></select>
      </div>
    </section>
  )
}
