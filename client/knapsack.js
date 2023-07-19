// Función "knapsack" que resuelve el problema de la mochila utilizando programación dinámica
const knapsack = (items, capacity) => {
  const n = items.length;
  // Matriz dp para almacenar los resultados intermedios de la programación dinámica
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  // Recorre todos los ítems y capacidades posibles para encontrar la solución óptima
  for (let i = 1; i <= n; i++) {
    const { peso, calorias } = items[i - 1];
    for (let w = 1; w <= capacity; w++) {
      if (peso <= w) {
        // Si el ítem puede ser incluido en la mochila, calcula el valor máximo posible
        dp[i][w] = Math.max(calorias + dp[i - 1][w - peso], dp[i - 1][w]);
      } else {
        // Si el ítem no puede ser incluido, toma el valor del ítem anterior en la misma capacidad
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  // Reconstruye el conjunto óptimo de elementos seleccionados utilizando la matriz dp
  let w = capacity;
  const selectedItems = [];
  for (let i = n; i > 0 && dp[i][w] > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      const item = items[i - 1];
      selectedItems.unshift(item);
      w -= item.peso;
    }
  }

  // Retorna el valor máximo alcanzado y el conjunto óptimo de elementos seleccionados
  return {
    maxValue: dp[n][capacity],
    items: selectedItems,
  };
};

// Función "calculateOptimalElements" que utiliza "knapsack" para calcular el conjunto óptimo de elementos
export const calculateOptimalElements = (products, minCalories, maxWeight) => {
  // Filtra los productos elegibles que cumplen con el requisito de calorías mínimas
  const eligibleProducts = products.filter(
    (product) => product.calorias >= minCalories
  );
  // Utiliza la función "knapsack" para obtener el conjunto óptimo de elementos que cumple con la capacidad máxima de peso
  const { items, maxValue } = knapsack(eligibleProducts, maxWeight);

  // Retorna el conjunto óptimo de elementos y el valor total de calorías en el conjunto óptimo
  return {
    optimalItems: items,
    totalCalories: maxValue,
  };
};

export default knapsack;
