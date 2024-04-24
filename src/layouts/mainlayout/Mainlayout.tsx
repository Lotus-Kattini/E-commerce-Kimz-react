import { Container } from "react-bootstrap"
import {Header,Footer} from "../../components/common"
import classes from './styles.module.css'

const Mainlayout = () => {
  return (
    <Container className={classes.container}>
        <Header/>
        <div className={classes.wrapper}>

        Mainlayout
        </div>
        <Footer/>
    </Container>
  )
}

export default Mainlayout