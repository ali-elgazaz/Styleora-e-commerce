import axiosClient from "./axiosClient";

export const getProductVariants = async () => {
  const response = await axiosClient.get("/product-variants?populate=*");

  return response.data.data;
};

export const getProductVariantsByProduct = async (documentId) => {
  const response = await axiosClient.get(
    `/product-variants?filters[product][documentId][$eq]=${documentId}&populate=*`,
  );

  return response.data.data;
};
