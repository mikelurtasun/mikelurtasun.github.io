document.addEventListener("DOMContentLoaded", () => {
    fetch("data/portafolio.json")
      .then((response) => response.json())
      .then((data) => renderPortafolio(data))
      .catch((error) => console.error("Error cargando el portafolio:", error));
  });
  
  function renderPortfolio(trabajos) {
    const grid = document.getElementById("portfolio-grid");

    trabajos.forEach(trabajo => {

        const item = document.createElement("div");
        item.className = "grid-item";

        item.innerHTML = `
            <a href="${trabajo.enlace}" class="portfolio-item">

                <img src="${trabajo.imagenes[0]}"
                     alt="${trabajo.titulo}">

                <div class="overlay">
                    <h3>${trabajo.titulo}</h3>
                    <span>Ver proyecto</span>
                </div>

            </a>
        `;

        grid.appendChild(item);

    });
}
