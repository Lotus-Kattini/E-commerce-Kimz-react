import Cartlogo from '../../../assets/svg/cart.svg?react'
import styles from './styles.module.css'
const {cartContainer,cartQuantity}=styles

const Headercart = () => {
  return (
    <div className={cartContainer}>
        <Cartlogo title='cart icon'/>
        <div className={cartQuantity}>0</div>
    </div>
  )
}

export default Headercart