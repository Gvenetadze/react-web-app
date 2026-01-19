import { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="container">
      <h1>Products</h1>

      {loading && <p>Loading products...</p>}

      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
