export default function ProductCard({ product: { id, image, title, category, price } }) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  )
}
