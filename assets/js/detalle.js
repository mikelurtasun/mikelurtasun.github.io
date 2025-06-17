document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    if (!id) {
      document.getElementById("detalle").innerHTML = "<p>Diseño no especificado.</p>";
      return;
    }
  
    fetch("data/portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        const diseño = data.find(item => item.id === id);
        if (diseño) {
          mostrarDetalle(diseño);
        } else {
          document.getElementById("detalle").innerHTML = "<p>Diseño no encontrado.</p>";
        }
      })
      .catch(error => {
        console.error("Error cargando el detalle:", error);
        document.getElementById("detalle").innerHTML = "<p>Error al cargar el diseño.</p>";
      });
  });
  
  function mostrarDetalle(diseño) {
    const contenedor = document.getElementById("detalle");
  
    let html = `<h1>${diseño.titulo}</h1>`;
    html += `<p>${diseño.descripcion}</p>`;
  
    if (diseño.imagenes && diseño.imagenes.length > 0) {
      html += `<div class="detalle-imagenes">`;
      diseño.imagenes.forEach(img => {
        html += `<img src="${img}" alt="${diseño.titulo}" />`;
      });
      html += `</div>`;
    }
  
    if (diseño.video) {
      html += `
        <div class="detalle-video">
          <iframe width="560" height="315" src="${diseño.video}" 
          frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    }
  
    contenedor.innerHTML = html;
  }
  