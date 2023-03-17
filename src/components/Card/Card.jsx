import style from './Card.module.css'
import { Link } from 'react-router-dom'


export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <img src= {image} alt="" />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
