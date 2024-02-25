import publicAxios from "../publicAxios";

export const getAllProducts = async () => {
  const res = await publicAxios.get("/api/product/");
  return res.data;
};

export const getAProduct = async (id) => {
  const res = await publicAxios.get(`/api/product/${id}`);
  return res.data;
};

export const postAProduct = async (data) => {
  return await publicAxios.post(`/api/product/`, data);
};

export const updateAProduct = async (data, id) => {
  const res = await publicAxios.put(`/api/product/${id}`, data);
  return res.data;
};

export const deleteAProduct = async (id) => {
  return await publicAxios.delete(`/api/product/${id}`);
};
