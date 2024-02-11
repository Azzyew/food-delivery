import { useQuery } from '@tanstack/react-query';

import { CategoriesService } from '@/services/categories.service';

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ['get-categories'],
    queryFn: () => {
      return CategoriesService.getAllCategories();
    },
  })
};
