import { useState } from "react";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((product) => ({...product, [name] : value}))
  }

  const handleSubmit = (e) => {

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
