import React from "react";
import images from '../../assets/portada1.jpg';
import images1 from '../../assets/portada2.jpg';
import images2 from '../../assets/portada3.jpg';
import '../Carousel.css'
import '../card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

function Carousel() {

  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{ paddingTop: 0, backgroundColor: "#ff81ff" }}>
        <div class="carousel-inner" style={{ height: "600", marginTop: -140 }} >
          <div class="carousel-item active">
            <img src={images} alt="Logo" className="img-logo" width="100%" height="480" />
          </div>
          <div class="carousel-item">
            <img src={images1} alt="Logo" className="img-logo" width="100%" height="480" />
          </div>
          <div class="carousel-item">
            <img src={images2} alt="Logo" className="img-logo" width="100%" height="480" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="" style={{ padding: 90, backgroundColor: "#ff81ff" }} >


        <div class="title-cards">
          <h2>Servicios que Ofrecemos</h2>
        </div>
        <div class="container-card">
          <div class="card">
            <figure>
              <img src={images2} alt="Logo" className="img-logo" width="100%" height="480" />
            </figure>
            <div class="contenido-card">
              <h3>Diseño Gràfico</h3>
              <p>Podemos crear la identidad corporativa de tu empresa. Diseño , Maquetación de folletos, Catálogos, Papelería y mucho más.</p>

            </div>
          </div>
          <div class="card">
            <figure>
              <img src={images2} alt="Logo" className="img-logo" width="100%" height="480" />
            </figure>
            <div class="contenido-card">
              <h3>Gestión de Redes</h3>
              <p>Nosotros creamos y optimizamos tus perfiles en las Redes Sociales. Importantes para que tu presencia online sea completa.</p>

            </div>
          </div>
          <div class="card">
            <figure>
              <img src={images2} alt="Logo" className="img-logo" width="100%" height="480" />
            </figure>
            <div class="contenido-card">
              <h3>Desarrollo Web</h3>
              <p>Creamos tu página web utilizando las últimas tecnologías disponibles. Una Web adaptativa a tu móvil o Tablet y con un gestor de contenido fácil.</p>

            </div>
          </div>
        </div>


      </div>
    </div>


  );
}

export default Carousel;