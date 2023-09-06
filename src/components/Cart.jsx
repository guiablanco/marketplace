import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

//Hook
import { useCart } from "@/hooks/useCart";

//style
import '../styles/Cart.css';

function CartItem ({thumbnail, price, title, quantity, addToCart}) {
    return(
        <li>
            <img src={thumbnail}
            alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Unidades:{quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
            {
                    quantity > 1 
                    ? 
                    <small>Subtotal: ${price*quantity}</small>
                    :
                    null
                }
        </li>
    )
}



const Cart = () => {

    const cartCheckboxId = useId();
    const {cart, clearCart, addToCart} = useCart();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map(product =>(
                            <CartItem
                                key={product.id}
                                addToCart={()=> addToCart(product)}
                                {... product}
                            />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    );
}

export default Cart;
