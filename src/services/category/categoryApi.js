import publicAxios from "../publicAxios";

export const getAllCategories = async () => {
  const res = await publicAxios.get("/api/category/");
  return res.data;
};

export const getACategory = async (id) => {
  const res = await publicAxios.get(`/api/category/${id}`);
  return res.data;
};

export const postACategory = async (data) => {
  return await publicAxios.post(`/api/category/`, data);
};

export const updateACategory = async (data, id) => {
  const res = await publicAxios.put(`/api/category/${id}`, data);
  return res;
};

export const deleteACategory = async (id) => {
  return await publicAxios.delete(`/api/category/${id}`);
};
