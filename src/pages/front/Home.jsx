import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/product/ProductItem';
import styles from "./Home.module.css"
import { getProductStart } from '../../redux/action/product.action';
import { getCategoryStart } from '../../redux/action/category.action';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const categories = useSelector(state => state.category.categories);
  let [tab, setTab] = useState("tab-1");

  useEffect(() => {
    dispatch(getProductStart())
    dispatch(getCategoryStart());
  }, [dispatch, products.length, categories.length])

  return (
    <>
      {/* <!-- Fruits Shop Start--> */}
      <div className="container-fluid fruite py-5 hero-header">
        <div className="container py-5">
          <div className="tab-className text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <Link 
                      className={tab === `tab-1` ? `d-flex py-2 m-2 bg-light rounded-pill  ${styles.active}` : "d-flex py-2 m-2 bg-light rounded-pill"}
                      data-bs-toggle="pill" onClick={() => setTab("tab-1")}>
                      <span className="text-dark" style={{
                        width: "130px"
                      }}>All Products</span>
                    </Link>
                  </li>
                  {
                    categories.length > 0 && categories.map((category, index) => (
                      <li className="nav-item" key={index}>
                        <Link
                          className={tab === `tab-${index + 2}` ? `d-flex py-2 m-2 bg-light rounded-pill ${styles.active}` : "d-flex py-2 m-2 bg-light rounded-pill"}
                          data-bs-toggle="pill">
                          <span className="text-dark" style={{
                            width: "130px"
                          }} onClick={() => setTab(`tab-${index + 2}`)}>{category.name}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className={tab === `tab-1` ? "tab-pane fade show p-0 active" : "tab-pane fade show p-0"} >
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {
                        products.length > 0 && products.map((product, index) => (
                          <ProductItem key={index} product={product} />
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              {
                categories.length > 0 && categories.map((category, index) => (
                  <div key={index} id={`tab-${index + 2}`} className={tab === `tab-${index + 2}` ? "tab-pane fade show p-0 active" : "tab-pane fade show p-0"} >
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="row g-4">
                          {products.length > 0 && products.map((product, index1) => {

                            if(product.category && product.category.toLowerCase() === category.name.toLowerCase()) {
                              return <ProductItem key={index} product={product} />
                            }

                            return null;
                          })}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }


            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fruits Shop End--> */}

    </>
  )
}

export default Home