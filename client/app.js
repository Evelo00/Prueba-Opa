
// const resultadosContainer = document.getElementById('resultados');
const resultados = [];

// const elementosOptimos = obtenerElementosOptimos(elementos, minCalorias, maxPeso);


const listaElementos = document.getElementById('listaElementos');
const pesoTotalElemento = document.getElementById('pesoTotal');
const caloriasTotalesElemento = document.getElementById('caloriasTotales');

listaElementos.innerHTML = '';

elementosOptimos.conjuntoOptimo.forEach(elemento => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = `Elemento ${elemento.id} - Peso: ${elemento.peso} - Calorías: ${elemento.calorias}`;
    listaElementos.appendChild(li);
});

pesoTotalElemento.textContent = `Peso total: ${elementosOptimos.pesoTotalOptimo}`;
caloriasTotalesElemento.textContent = `Calorías totales: ${elementosOptimos.caloriasTotalOptimo}`;
