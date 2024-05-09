import { Container,Row,Col } from "react-bootstrap"
import { Product } from "@components/ecommerce"
import { useAppDispatch,useAppSelector } from "@store/Hooks"
import { actgetproducts, productsCleanUp } from "@store/products/ProductsSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Products = () => {

  const dispatch=useAppDispatch();
  const params=useParams();
  const {error,loading,records}=useAppSelector((state)=>state.ProductsSlice)

  
  useEffect(()=>{
    dispatch(actgetproducts(params.prefix as string))
    return ()=>{
      dispatch(productsCleanUp())
    }
  },[dispatch,params])

  const productList=records.length>0? records.map((product)=>
        <Col xs={6} md={3} key={product.id} className="d-flex align-items-center justify-content-center mb-5 mt-2">
          <Product {...product}/>
        </Col>
  ):'No product Found'

  return (
    <Container>
      <Row>
        {productList}
      </Row>
    </Container>
  )
}

export default Products