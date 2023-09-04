import '../styles/footer.css';
import useFilters from '@/hooks/useFilters';

const Footer = () => {

    const { filters } = useFilters();

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            <h4>Prueba Técnica de React ⚛ - <span>@guiablanco</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    );
}

export default Footer;
