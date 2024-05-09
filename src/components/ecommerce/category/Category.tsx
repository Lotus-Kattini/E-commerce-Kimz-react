import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TCategory } from "@customTypes/Category";
const { category, categoryImg, categoryTitle } = styles;



const Category = (props:TCategory) => {
  return (
    <div className={category}>
        <Link to={`products/${props.prefix}`}>
          <div className={categoryImg}>
            <img
              src={props.img}
              alt={props.title}
            />
          </div>
          <h4 className={categoryTitle}>{props.title}</h4>
        </Link>
      </div>
  );
};

export default Category;