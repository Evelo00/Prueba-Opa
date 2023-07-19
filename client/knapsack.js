const knapsack = (items, capacity) => {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { peso, calorias } = items[i - 1];
    for (let w = 1; w <= capacity; w++) {
      if (peso <= w) {
        dp[i][w] = Math.max(calorias + dp[i - 1][w - peso], dp[i - 1][w]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = capacity;
  const selectedItems = [];
  for (let i = n; i > 0 && dp[i][w] > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      const item = items[i - 1];
      selectedItems.unshift(item);
      w -= item.peso;
    }
  }

  return {
    maxValue: dp[n][capacity],
    items: selectedItems,
  };
};

export const calculateOptimalElements = (products, minCalories, maxWeight) => {
  const eligibleProducts = products.filter(
    (product) => product.calorias >= minCalories
  );
  const { items, maxValue } = knapsack(eligibleProducts, maxWeight);

  return {
    optimalItems: items,
    totalCalories: maxValue,
  };
};

export default knapsack;