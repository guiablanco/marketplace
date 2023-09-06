//style
import '../styles/footer.css';

//Hooks
import { useCart } from '@/hooks/useCart';
import useFilters from '@/hooks/useFilters';

const Footer = () => {

    const { filters } = useFilters();
    const { cart } = useCart();

    return (
        <footer className='footer'>
            {/* {
                JSON.stringify(cart, null, 2)
            } */}

            <h4>Desarrollado con React ⚛ y NextJs - <span>@guiablanco</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
            
        </footer>
    );
}

export default Footer;
