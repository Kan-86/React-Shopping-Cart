import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./cartItem.styles";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <Wrapper>
        <div>
            <h4>{item.title}</h4>
            <div className="information">
                <p>Prive: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button 
                    size ="small"
                    disableElevation
                    variant="contained"
                    onClick={()=> removeFromCart(item.id)}
                    >
                        -
                </Button>
                <Button 
                    size ="small"
                    disableElevation
                    variant="contained"
                    onClick={()=> addToCart(item)}
                    >
                        +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
);

export default CartItem;