
import './Header.css';
import foto from '../../Componentes/images/lafoto2.jpeg';

function Header() {
    return(
        <header className='fotitulo'>
                <div className='nombreyfoto'>
                    <div className='foto'>
                    <img src={foto} />
                    </div>
                    <div className='nombre'>
                        <h1>INGRID TATIANA PABA GUILLEN</h1>
                        <p>Técnica en Desarrollo Web</p>
                    </div>
                </div>    
              
        </header>
       );
}
export default Header;