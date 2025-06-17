document.addEventListener("DOMContentLoaded", () => {
    fetch("data/portafolio.json")
      .then((response) => response.json())
      .then((data) => renderPortafolio(data))
      .catch((error) => console.error("Error cargando el portafolio:", error));
  });
  
  function renderPortafolio(trabajos) {
    const grid = document.getElementById("portafolio-grid");
  
    trabajos.forEach((trabajo) => {
      const item = document.createElement("div");
      item.classList.add("grid-item");
  
      const imagen = document.createElement("img");
      imagen.src = trabajo.imagenes[0]; // Usa la primera imagen
      imagen.alt = trabajo.titulo;
  
      const titulo = document.createElement("h3");
      titulo.textContent = trabajo.titulo;
  
      const descripcion = document.createElement("p");
      descripcion.textContent = trabajo.descripcion;
  
      const enlace = document.createElement("a");
      enlace.href = trabajo.enlace;
      enlace.textContent = "Ver más";
  
      item.appendChild(imagen);
      item.appendChild(titulo);
      item.appendChild(descripcion);
      item.appendChild(enlace);
  
      grid.appendChild(item);
    });
  }  