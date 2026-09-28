import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import useProduct from "../../hooks/useProducts";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

function ProductDetails() {
  const { slug } = useParams();
  console.log("Slug from URL:", slug);

  const { product, loading, error } = useProduct(slug);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const colors = useMemo(() => {
    if (!product?.variants) return [];

    return [
      ...new Set(
        product.variants
          .filter((variant) => variant.stock > 0)
          .map((variant) => variant.color),
      ),
    ];
  }, [product]);

  const availableSizes = useMemo(() => {
    if (!product?.variants || !selectedColor) return [];

    return [
      ...new Set(
        product.variants
          .filter(
            (variant) => variant.color === selectedColor && variant.stock > 0,
          )
          .map((variant) => variant.size),
      ),
    ];
  }, [product, selectedColor]);

  const selectedVariant = useMemo(() => {
    if (!product?.variants || !selectedColor || !selectedSize) {
      return null;
    }

    return (
      product.variants.find(
        (variant) =>
          variant.color === selectedColor && variant.size === selectedSize,
      ) || null
    );
  }, [product, selectedColor, selectedSize]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize("");
    setQuantity(1);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setQuantity(1);
  };

  const handleQuantityChange = (value) => {
    if (!selectedVariant) return;

    const nextQuantity = Math.max(
      1,
      Math.min(Number(value) || 1, selectedVariant.stock),
    );

    setQuantity(nextQuantity);
  };

  const currentPrice = selectedVariant?.price ?? product?.price;

  const handleAddToCart = () => {
    if (!selectedVariant) {
      alert("Please select a color and size.");
      return;
    }

    if (quantity > selectedVariant.stock) {
      alert("Quantity exceeds available stock.");
      return;
    }

    console.log("Add to cart:", {
      product: product.documentId,
      variant: selectedVariant.documentId,
      name: product.name,
      color: selectedVariant.color,
      size: selectedVariant.size,
      quantity,
      price: currentPrice,
    });

    alert("Selection is valid. Cart integration is next.");
  };

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <main>
      <section>
        <div>
          {product.images?.length > 0 ? (
            product.images.map((image) => (
              <img
                key={image.documentId || image.id}
                src={image.url}
                alt={image.alternativeText || product.name}
                width="300"
              />
            ))
          ) : (
            <p>No product images available.</p>
          )}
        </div>

        <div>
          <p>{product.category?.name}</p>

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <div>
            <strong>{currentPrice} EGP</strong>

            {product.compareAtPrice > currentPrice && (
              <del>{product.compareAtPrice} EGP</del>
            )}
          </div>

          {colors.length > 0 ? (
            <>
              <ColorSelector
                colors={colors}
                selectedColor={selectedColor}
                onColorChange={handleColorChange}
              />

              {selectedColor && (
                <SizeSelector
                  sizes={availableSizes}
                  selectedSize={selectedSize}
                  onSizeChange={handleSizeChange}
                />
              )}

              {selectedVariant && <p>{selectedVariant.stock} available</p>}

              {selectedVariant && (
                <div>
                  <label htmlFor="quantity">Quantity</label>

                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max={selectedVariant.stock}
                    value={quantity}
                    onChange={(event) =>
                      handleQuantityChange(event.target.value)
                    }
                  />
                </div>
              )}

              <button
                type="button"
                disabled={!selectedVariant}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </>
          ) : (
            <p>Currently unavailable</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
