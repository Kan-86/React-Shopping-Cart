import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.image}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h2>${item.price}</h2>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart </Button>
    </Wrapper>
);

export default Item;