import { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [sucess, setSucess] = useState();

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return; // return을 쓰는 이유 : 파일이 저장되었다면 밑에 setProduct는 필요없어서 여기서 끝내기 위해
    }
    setProduct((product) => ({...product, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 cloudinary에 업로드 하고 url을 획득
    uploadImage(file)
      .then((url) => {
        // console.log(url);

        //  Firebase에 새로운 제품을 추가
        addNewProduct(product, url);

      })
  }
성
  return (
    <section>
      <h2>새로운 제품 등록</h2>

      { file && <img src={URL.createObjectURL(file)} alt='local file'/> }
      <form onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
      <input
        type='text'
        name='title'
        value={product.title ?? ''}
        placeholder='제품명'
        required
        onChange={handleChange}
      />
      <input
        type='number'
        name='price'
        value={product.price ?? ''}
        placeholder='가격'
        required
        onChange={handleChange}
      />
      <input
        type='text'
        name='category'
        value={product.category ?? ''}
        placeholder='카테고리'
        required
        onChange={handleChange}
      />
      <input
        type='text'
        name='description'
        value={product.description ?? ''}
        placeholder='제품 설명'
        required
        onChange={handleChange}
      />
      <input
        type='text'
        name='options'
        value={product.options ?? ''}
        placeholder='옵션들(콤마(,)로 구분'
        required
        onChange={handleChange}
      />
      <Button text={'제품 등록하기'} />
    </form>
    </section>
  )
}
