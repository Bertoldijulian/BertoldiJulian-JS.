let titulo = document.getElementById("titulo");
titulo.innerHTML = "Hoteles en bariloche";

let subt = document.getElementById("subt");
subt.innerHTML = "Elegí la fecha de tu viaje para ver los mejores precios y ofertas de alojamientos en San Carlos de Bariloche";

let primerD = document.getElementById("primerD");
primerD.innerHTML = "<h2>Ofertas de Hoteles en San Carlos de Bariloche</h2><p>Estos son los hoteles más elegidos de San Carlos de Bariloche. Encontrá la mejor opción para tu alojamiento</p>"



const Hoteles = [{id: 1, nombre: "Hotel Cristal", descripcion: "Situado en el centro de San Carlos de Bariloche, el Hotel Cristal dispone de piscina interior, bañera de hidromasaje, además de spa con sauna y masaje.", distancia: "A 454 m del centro", precio: 10100},
                 {id: 2, nombre: "Hotel Nevada", descripcion: "El Hotel Nevada se encuentra en el centro de Bariloche, a 50 m de la Calle Mitre y a 5 minutos a pie del Centro Cívico.", distancia: "A 388 m del centro", precio: 9500},
                 {id: 3, nombre: "Alt Interlaken Hotel", descripcion: "Cuenta con wi-fi gratis en zonas comunes, servicio de spa y sauna, además de salón de juegos.", distancia: "A 478 m del centro", precio: 11700},
                 {id: 4, nombre: "Panamericano Bariloche", descripcion: "El Hotel Panamericano Bariloche ofrece piscina cubierta climatizada y sirve desayuno buffet.", distancia: "A 551 m del centro", precio: 10000}
]

for(const hotel of Hoteles) {
    let cHoteles = document.createElement("div");
    cHoteles.innerHTML = `<h5>${hotel.nombre}</h5>
                          <p> ${hotel.descripcion}</p>
                          <p> ${hotel.distancia}</p>
                          <p>$${hotel.precio}</p>`;
    document.body.appendChild(cHoteles);
}

