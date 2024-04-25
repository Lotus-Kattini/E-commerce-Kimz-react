import { Container } from "react-bootstrap"
import {Header,Footer} from "@components/common"
import classes from './styles.module.css'
import { Outlet } from "react-router-dom"

const Mainlayout = () => {
  return (
    <Container className={classes.container}>
        <Header/>
        <div className={classes.wrapper}>
          <Outlet/>
        </div>
        <Footer/>
    </Container>
  )
}

export default Mainlayout