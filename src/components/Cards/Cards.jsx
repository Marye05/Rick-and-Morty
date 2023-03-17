import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';

export default function Cards({ characters, onClose }) {
   return (
   <CardsContainer>
      {characters.map(({ id, name, species, gender, image }) => {
         return (
            <Card>
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            </Card>
            );
         })}
   </CardsContainer>
   );
}


// se abre llaves para poder escribir codigo de javascript