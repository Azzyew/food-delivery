import { useQuery } from '@tanstack/react-query';

import { OrderService } from '@/services/order.service';

export const useOrderQuery = () => {
  return useQuery({
    queryKey: ['get-order'],
    queryFn: () => {
      return OrderService.getOrder();
    },
  })
};
