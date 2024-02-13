type MenuItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  cover: string;
  thumbnail: string;
  ingredients: string[];
};

export type MenuType = {
  title: string;
  data: MenuItem[];
};
