export type Tag =
  | 'new'
  | 'bestseller'
  | 'signature'
  | 'must_try'
  | 'chef_recommendation'
  | 'seasonal'
  | 'limited'
  | 'spicy'
  | 'very_spicy'
  | 'vegetarian'
  | 'vegan'
  | 'gluten_free'
  | 'dairy_free'
  | 'nut_free'
  | 'halal'
  | 'kosher'
  | 'organic'
  | 'local'
  | 'homemade'
  | 'raw'
  | 'low_calorie'
  | 'high_protein';

export type AllergenCode =
  | 'gluten'
  | 'crustaceans'
  | 'eggs'
  | 'fish'
  | 'peanuts'
  | 'soybeans'
  | 'milk'
  | 'nuts'
  | 'celery'
  | 'mustard'
  | 'sesame'
  | 'sulphites'
  | 'lupin'
  | 'molluscs';

export interface SetMenu {
  id: string;
  name: string;
  description: string;
  price: number;
  courses: {
    label: string;
    choices: Dish[];
  }[];
  image?: string;
  tags?: Tag[];
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: 'starter' | 'main' | 'dessert';
  price: number;
  image?: string;
  tags?: Tag[];
  allergens?: {
    contains: AllergenCode[];
    mayContain: AllergenCode[];
  };
  spice?: 0 | 1 | 2 | 3;
}

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: Tag[];
}

export interface Rum extends Omit<Drink, 'price'> {
  origin: string;
  price: {
    glass: number;
    bottle: number;
  };
}

export interface Wine extends Omit<Drink, 'price'> {
  appellation: string;
  region: string;
  country: string;
  color: 'red' | 'white' | 'rosé' | 'sparkling' | 'sweet' | 'fortified';
  vintage?: number;
  price: {
    glass: number;
    bottle: number;
  };
}

export interface Beer extends Omit<Drink, 'price'> {
  brewery: string;
  style: string;
  country: string;
  alcoholContent: number;
  price: {
    small: number;
    pint: number;
  };
}

export interface Cocktail extends Drink {
  base: 'rum' | 'vodka' | 'gin' | 'whisky' | 'tequila' | 'cognac' | 'champagne' | 'beer' | 'wine';
}

export interface HotBeverage extends Drink {
  category: 'coffee' | 'tea' | 'infusion' | 'hot_chocolate' | 'other';
}

export interface SoftDrink extends Drink {
  size?: string;
}

export interface Menu {
  featured: (Dish & { category: string; })[];

  setMenus: SetMenu[];
  starters: {
    [name: string]: {
      label: string;
      dishes: Dish[];
    };
  };
  mains: {
    [name: string]: {
      label: string;
      dishes: Dish[];
    };
  };
  desserts: {
    [name: string]: {
      label: string;
      dishes: Dish[];
    };
  };
  drinks: {
    rums?: Rum[];
    wines?: Wine[];
    beers?: Beer[];
    cocktails?: Cocktail[];
    mocktails?: Cocktail[];
    hotBeverages?: HotBeverage[];
    soft?: SoftDrink[];
    water?: SoftDrink[];
  };
}


export const TagLabel: Record<Tag, string> = {
  new: 'Nouveau',
  bestseller: 'Populaire',
  signature: 'Signature',
  must_try: 'À ne pas manquer',
  chef_recommendation: 'Recommandé par le Chef',
  seasonal: 'De saison',
  limited: 'Édition limitée',
  spicy: 'Pimenté',
  very_spicy: 'Très pimenté',
  vegetarian: 'Végétarien',
  vegan: 'Végétalien',
  gluten_free: 'Sans gluten',
  dairy_free: 'Sans lactose',
  nut_free: 'Sans fruits à coque',
  halal: 'Halal',
  kosher: 'Casher',
  organic: 'Bio',
  local: 'Produit local',
  homemade: 'Fait maison',
  raw: 'Cru',
  low_calorie: 'Léger',
  high_protein: 'Riche en protéines',
};
