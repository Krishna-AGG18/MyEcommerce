export const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};