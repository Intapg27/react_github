import './Body.css';
import Habilidades from '../../Componentes/habilidades/Habilidades';
import Botonesinfo from '../../Componentes/botonesinfo/Botonesinfo';

function Body() {
    return(
        <body>
        
                <div className='profesional'>
                        <h2>PERFIL PROFESIONAL</h2>
                        <p>Soy una desarrolladora web con énfasis en diseño front-end, con mucha creatividad y capacidad de comprender lo que quiera obtener
                        lo que tenga en mente, en cuánto a diseño estructura y funcionalidad, con  la experiencia que he tenido en otras áreas de trabajo, es un buen complemento para realizar un trabajo àgil y de calidad.</p>
                </div>
                <Botonesinfo />
                <Habilidades />
        </body>
       );
}
export default Body;