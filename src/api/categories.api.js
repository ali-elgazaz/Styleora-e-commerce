import axiosClient from "./axiosClient";

export const getCategories = async () => {
  const response = await axiosClient.get("/categories?populate=*");

  return response.data.data;
};

export const getCategoryBySlug = async (slug) => {
  const response = await axiosClient.get(
    `/categories?filters[slug][$eq]=${slug}&populate=*`,
  );

  return response.data.data[0] || null;
};
