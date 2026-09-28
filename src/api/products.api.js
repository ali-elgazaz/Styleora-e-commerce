import axiosClient, { STRAPI_URL } from "./axiosClient";

const getImageUrl = (image) => {
  if (!image?.url) {
    return null;
  }

  if (image.url.startsWith("http")) {
    return image.url;
  }

  return `${STRAPI_URL}${image.url}`;
};

const formatProduct = (product) => ({
  ...product,
  imageUrl: getImageUrl(product.images?.[0]),
  images:
    product.images?.map((image) => ({
      ...image,
      url: getImageUrl(image),
    })) || [],
  variants: product.product_variants || [],
});

export const getProducts = async () => {
  const response = await axiosClient.get("/products", {
    params: {
      populate: "*",
    },
  });

  return (response.data.data || []).map(formatProduct);
};

export const getProductById = async (documentId) => {
  const response = await axiosClient.get(`/products/${documentId}`, {
    params: {
      populate: "*",
    },
  });

  return formatProduct(response.data.data);
};

// export const getProductBySlug = async (slug) => {
//   console.log("Searching for slug:", slug);
//   const response = await axiosClient.get("/products", {
//     params: {
//       "filters[slug][$eq]": slug,
//       populate: "*",
//     },
//   });
//   console.log("Strapi response:", response.data);

//   const product = response.data.data[0];

//   return product ? formatProduct(product) : null;
// };

export const getProductBySlug = async (slug) => {
  console.log("Searching for slug:", slug);

  const query = new URLSearchParams({
    "filters[slug][$eq]": slug,
    populate: "*",
  });

  const url = `/products?${query.toString()}`;

  console.log("Request URL:", url);

  const response = await axiosClient.get(url);

  console.log("Axios response:", response.data);

  const product = response.data.data?.[0];

  console.log("Found product:", product);

  return product ? formatProduct(product) : null;
};
