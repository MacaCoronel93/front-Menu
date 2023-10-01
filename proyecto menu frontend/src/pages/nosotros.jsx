import './nosotros.css'
import '../components/Footer';

function NosotrosPage() {




  return (
    <>
    <body>
      
    
      <div>
       <h2 className='intro'>Sobre nosotros</h2>
      </div>
      <div className='presentacion'>
        <img className='barFoto' src="public/kangreburguers bar.jpg" alt="" />
      <div className='container-fluid historia'>
        <p>Historia de "Las Kangreburguers de Julio"<br></br><br></br>

Fundado en 1995 por Julio Forni en San Miguel de Tucuman, "Las Kangreburguers de Julio" comenzó como un pequeño puesto de hamburguesas en un mercado local. Su hamburguesa especial atrajo a multitudes y dio lugar a la apertura del primer restaurante en la Calle Principal. Con un enfoque en la calidad, la innovación y el servicio rápido, "Las Kangreburguers de Julio" se convirtió en un punto de encuentro para la comunidad. Hoy, con múltiples ubicaciones, menus y una presencia en línea, la visión de Julio sigue prosperando: brindar sabor y rapidez a sus clientes mientras se mantiene fiel a sus valores fundamentales..<hr color='orange'></hr><b>
Gracias por ser parte de nuestra historia!</b></p>

      </div>
      </div>
        <h2>Quienes somos?</h2>
      <div className='integrantes'>
      <h3><img className='integrante' src="public/tania.jpeg" alt="" />TANIA ARGAÑARAZ</h3>
      <h3><img className='integrante' src="/fede pistan.jpeg" alt="" /> FEDERICO PISTAN </h3>
      <h3><img className='integrante' src="/sofi.jpeg" alt="" />SOFIA ROBINSON </h3>
      <h3><img className='integrante ' src="public/maca.jpeg" alt="" />MACARENA CORONEL </h3>
      <h3><img className='integrante ' src="/gonzalo proyecto.jpg" alt="" /> GONZALO VILLAFAÑE </h3>
      <h3><img className='integrante fix' src="public/flor proyecto.jpg" alt="" /> FLORENCIA QUIROGA </h3>
      </div>
      <footer>
        
      </footer>
      </body>
    </>
  )
}

export default NosotrosPage

