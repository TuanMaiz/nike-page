import axiosClient from "./axiosClient";
import queryString from "query-string";

const productService = {
    getAll: () => {
      const url = "/products";
      return axiosClient.get(url);
    },
    getOneProduct: (id) => {
        const url = `/products/${id}`
        return axiosClient.get(url);
    },
    getProductDecrese: () => {
        const url = `/products?sort=desc`
        return axiosClient.get(url);
    },
    getAllCategory: () => {
        const url = '/products/categories'
        return axiosClient.get(url);
    },
    getProductByCategory: (category) => {
        const url = `products/category/${category}`
        return axiosClient.get(url);
    }
  };