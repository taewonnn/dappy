import { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});

  const handleChange = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}/>
      </form>
    </section>
  )
}
