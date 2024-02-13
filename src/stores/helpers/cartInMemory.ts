import { ProductType } from "@/types/product";
import { ProductCartProps } from "../cartStore";

export const add = (products: ProductCartProps[], newProduct: ProductType) => {
  const existingProduct = products.find(({ id }) => newProduct.id === id);

  if (existingProduct) {
    return products.map((product) =>
      product.id === existingProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, { ...newProduct, quantity: 1 }];
};

export const remove = (products: ProductCartProps[], removeProductId: string) => {
  const updatedProducts = products.map((product) => 
    product.id === removeProductId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product
  );

  return updatedProducts.filter((product) => product.quantity > 0);
}
