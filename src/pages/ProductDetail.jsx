import { useLocation } from "react-router-dom";

export default function ProductDetail() {

  const {
    state: {
      product: { id, image, title, description, category, price, options }
    }
  } = useLocation();

  return (
    <section>
      <p></p>
    </section>
  )
}
