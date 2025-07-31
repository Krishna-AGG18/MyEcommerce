export const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.in/api/products');
  
  return await res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};

export const fetchProductByCategory = async (category) => {
  const cat = category.toLowerCase();
  const res = await fetch(`https://dummyjson.com/products/category/${cat}`)
  return await res.json();
}

export const fetchAllProducts = async ()=> {
  const res = await fetch('https://dummyjson.com/products?limit=300&skip=0');
  const items = await res.json();
  // console.log(items)
  return items;
}

export const fetchBySearch = async (search)=> {
  const res = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=300&skip=0`)
 const items = await res.json();
  // console.log(items)
  return items;
}