import { ProductModel } from "@/models/product.model";

export const ProductsAPI = {
  async getProducts(
    currentPage: number,
    limit: number
  ): Promise<{ products: ProductModel[] }> {
    const skip = (currentPage - 1) * limit;
    return fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    ).then((res) => res.json());
  },
};
