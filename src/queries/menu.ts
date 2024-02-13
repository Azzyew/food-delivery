import { useQuery } from '@tanstack/react-query';

import { MenuService } from '@/services/menu.service';

export const useMenuQuery = () => {
  return useQuery({
    queryKey: ['get-menu'],
    queryFn: () => {
      return MenuService.getMenu();
    },
  })
};
