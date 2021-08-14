import CartItem from "../CartItem/cartItem";
// Styles
import { Wrapper } from "./cart.styles";
// Types
import { CartItemType } from "../App";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h3>Your Shopping Cart</h3>
            {cartItems.length === 0 ? <p>No Items in cart.</p> : null}
            {cartItems.map((value, index) => (
                <CartItem
                key={index}
                item={value}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
                       
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;