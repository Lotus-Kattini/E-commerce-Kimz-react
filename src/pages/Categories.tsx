import { Category } from "@components/ecommerce"
import { Container,Row,Col } from "react-bootstrap"
import { useAppDispatch,useAppSelector } from "@store/Hooks"
import { actGetcategories } from "@store/categories/CategoriesSlice"
import { useEffect } from "react"

const Categories = () => {

  const dispatch=useAppDispatch();
  const {loading,error,records}=useAppSelector((state)=>state.CategoriesSlice)

  useEffect(()=>{
    if(!records.length){
      dispatch(actGetcategories())
    }
  },[dispatch,records])


  const categoriesList=records.length>0 ? records.map((category)=>
    <Col xs={6} md={3} key={category.id} className="d-flex align-items-center justify-content-center mb-5 mt-2">
      <Category {...category}/>
    </Col>
  ) : 'there is no categories found'
  

  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  )
}

export default Categories