import { useParams } from "react-router-dom"

export default function ProductPage() {
  const {productId} = useParams(); 
  
  fetch (`https://fakestoreapi.com/product/${productId}`)

  return  (
    <div>
        <p>
            ProductPage {}
        </p>
    </div>
  )
}