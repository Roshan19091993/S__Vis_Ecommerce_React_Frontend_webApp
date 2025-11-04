import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import NoProduct from '../assets/No_Product_Found.png';

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filteredData)
  return (
    <div className="container py-5">
        { filterProducts.length > 0 ?
        <>
        <h2 className="text-center mb-5 h2">Collection</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4">
            {
                filterProducts.map((product) => (
                    <div key={product.id} className="col">
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
        </>
        :
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <img src={NoProduct} alt=''/>
        </div>
     }
    </div>
  )
}

export default FilterData
