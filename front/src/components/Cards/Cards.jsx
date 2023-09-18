import style from "./Cards.module.css";
import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.container}>
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}