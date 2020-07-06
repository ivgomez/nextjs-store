import { Service } from "./baseService";

export const ProductService = {
  async getAllProducts() {
    const result = await Service().getAllProductsService().get(`/products`);
    return result;
  },
};
