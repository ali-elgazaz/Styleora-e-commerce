import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function Products() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#E5B96D] border-t-transparent" />
          <p className="text-xs tracking-[0.25em] text-[#777]">
            LOADING COLLECTION
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FAF9F6] px-6 text-center">
        <h1 className="mb-3 text-2xl font-medium text-[#151515]">
          Something went wrong
        </h1>
        <p className="max-w-md text-sm text-[#777]">{error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FAF9F6] px-6 text-center">
        <h1 className="mb-3 text-2xl font-medium text-[#151515]">
          No products yet
        </h1>
        <p className="text-sm text-[#777]">New pieces are coming soon.</p>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] px-4 py-12 text-[#151515] sm:px-8 lg:px-16 lg:py-20">
      {/* Page Header */}
      <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <p className="mb-4 text-[10px] font-medium tracking-[0.35em] text-[#A78349] sm:text-xs">
          HYBRID / COLLECTION
        </p>

        <h1 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          The Collection
        </h1>

        <p className="text-sm leading-7 text-[#777] sm:text-base">
          Discover pieces made for everyday style.
        </p>
      </header>

      {/* Collection Info */}
      <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
        <p className="text-[10px] tracking-[0.2em] text-[#777] sm:text-xs">
          {products.length} PRODUCTS
        </p>

        <p className="text-[10px] tracking-[0.2em] text-[#777] sm:text-xs">
          NEW SEASON
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const imageUrl = product.imageUrl || product.images?.[0]?.url;

          const availableStock =
            product.variants?.reduce(
              (total, variant) => total + (Number(variant.stock) || 0),
              0,
            ) || 0;

          return (
            <Link
              to={`/shop/${product.slug}`}
              key={product.documentId || product.id}
              className="group min-w-0"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EDEBE7]">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[10px] tracking-widest text-[#999]">
                    NO IMAGE
                  </div>
                )}

                {/* Badges */}
                {product.isNew && (
                  <span className="absolute left-2 top-2 bg-[#FAF9F6] px-2 py-1 text-[9px] tracking-widest sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
                    NEW
                  </span>
                )}

                {product.isSale && (
                  <span className="absolute left-2 top-9 bg-[#E5B96D] px-2 py-1 text-[9px] tracking-widest text-[#151515] sm:left-3 sm:top-11 sm:px-3 sm:text-[10px]">
                    SALE
                  </span>
                )}

                {/* Hover Action */}
                <div className="absolute bottom-0 left-0 right-0 hidden translate-y-full bg-[#0B0C0E]/90 px-3 py-4 text-center text-[10px] tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-y-0 sm:block">
                  VIEW PRODUCT
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-3 sm:pt-4">
                <p className="mb-1 text-[10px] uppercase tracking-wider text-[#999] sm:text-xs">
                  {product.category?.name || "Collection"}
                </p>

                <h2 className="line-clamp-2 text-xs font-medium leading-5 sm:text-sm">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-xs font-medium sm:text-sm">
                    {product.price} EGP
                  </span>

                  {product.compareAtPrice != null &&
                    Number(product.compareAtPrice) > Number(product.price) && (
                      <del className="text-[10px] text-[#999] sm:text-xs">
                        {product.compareAtPrice} EGP
                      </del>
                    )}
                </div>

                {/* Stock */}
                <p
                  className={`mt-2 text-[10px] ${
                    availableStock > 0 ? "text-[#68816B]" : "text-[#999]"
                  }`}
                >
                  {availableStock > 0 ? "Available" : "Out of stock"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
