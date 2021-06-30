import './Footer.css';

function Footer() {
    return(
        <footer>
                <div className='nav'>
                     <ul> 
                            <li><h3>DATOS DE CONTACTO</h3></li>
                            <li> <i className="fas fa-phone"> </i><span className='datos'>CELULAR: 3209860343</span></li>
                            <li> <i className="far fa-envelope"> </i><span className='datos'>CORREO: itati0813@gmail.com</span></li>
                            <li> <i className="fab fa-linkedin"> </i><span className='datos'>www.linkedin.com/in/ingridpaba20</span></li>
                    </ul>
                </div>
        </footer>
       );
}
export default Footer;