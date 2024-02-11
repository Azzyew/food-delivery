import { useQuery } from '@tanstack/react-query';

import { ProductsService } from '@/services/products.service';

export const useProductQuery = () => {
  return useQuery({
    queryKey: ['get-products'],
    queryFn: () => {
      return ProductsService.getAllProducts();
    },
  })
};
