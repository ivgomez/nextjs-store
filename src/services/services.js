import { Service } from "./baseService";

export const ProductService = {
  async getUserData() {
    const result = await Service().getAllProductsService().get(`/user/me`);
    return result;
  },
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

  async productPoints(amount) {
    const result = await Service().getAllProductsService().post("/user/points", amount);
    return result;
  },
};
