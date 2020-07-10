import { Service } from "./baseService";

export const ProductService = {
  async getAllProducts() {
    const result = await Service().getAllProductsService().get(`/products`);
    return result;
  },

  async getProductHistory() {
    const result = await Service().getAllProductsService().get("/user/history");
    return result;
  },

  async productRedeem(productId) {
    const result = await Service().getAllProductsService().post("/redeem", productId);
    return result;
  },
};
