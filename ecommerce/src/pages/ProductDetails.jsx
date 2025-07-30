import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../services/CartContext';
import ProductDetailsSkeleton from './ProductDetailsSkeleton';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);
  const {addToCart} = useCart();

  useEffect(() => {
    // Replace this with your API call logic
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setMainImage(data.images?.[0] || data.thumbnail);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-white p-6 bg-black"><ProductDetailsSkeleton /></div>;


  const handleAddToCart = (e) => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  return (
    <>
    <div className="p-6 text-white w-full mx-auto space-y-8 bg-black ">
      {/* Title & Category */}
      <div>
        <h1 className="text-3xl max-xs:text-xl font-bold text-cemter">{product.title}</h1>
        <p className="text-sm text-gray-400 capitalize">{product.category}</p>
      </div>

      {/* Image & Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full rounded-xl border border-gray-700 object-contain"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setMainImage(img)}
                className="w-20 h-20 object-cover rounded border border-gray-700 cursor-pointer hover:scale-105 transition"
                alt={`Thumb ${idx}`}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <p className="text-gray-300">{product.description}</p>

          <div className="text-xl font-semibold">
            ${product.price}{' '}
            <span className="text-green-500 text-sm">
              ({product.discountPercentage}% off)
            </span>
          </div>

          <div>
            <span className="text-yellow-400">Rating: {product.rating} ⭐</span>
            <p className="text-gray-400">Stock: {product.stock}</p>
            <p className="text-green-400">{product.availabilityStatus}</p>
          </div>

          <div className="space-x-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-700 text-sm px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Weight:</strong> {product.weight}g</p>
            <p>
              <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}
            </p>
          </div>

          <div>
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
          </div>

          <button className="bg-gray-800 hover:bg-gray-700 text-sm px-4 py-2 max-sm:w-full rounded-md text-white font-medium transition duration-200" onClick={handleAddToCart}>
              Add to Cart
            </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800  p-6 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews?.map((rev, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-2">
              <div className="text-yellow-400">Rating: {rev.rating} ⭐</div>
              <p className="text-gray-300 italic">"{rev.comment}"</p>
              <p className="text-sm text-gray-500">
                – {rev.reviewerName} ({rev.reviewerEmail})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Policies & Metadata */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800  p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
          <p>{product.returnPolicy}</p>
        </div>
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800  p-4 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Product Metadata</h3>
          <p><strong>Barcode:</strong> {product.meta.barcode}</p>
          <p><strong>Created:</strong> {new Date(product.meta.createdAt).toLocaleDateString()}</p>
          <p><strong>Updated:</strong> {new Date(product.meta.updatedAt).toLocaleDateString()}</p>
          <img
            src={product.meta.qrCode}
            alt="QR Code"
            className="w-28 mt-3"
          />
        </div>
      </div>
    </div>

    {
        addedToCart && 
        (<div
          className="fixed bottom-4 right-1/2 translate-x-1/2 bg-[#d8d5db] text-[#2d3142] px-6 py-3 rounded-lg shadow-xl z-50 border border-gray-400 transition-opacity duration-500 opacity-100 max-xs:text-[10px]"
        >
          Item added to cart!
        </div>)
      }
    </>
  );
};

export default ProductDetails;
