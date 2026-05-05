import { Menu } from '@/types/restaurant.types';

export const menu: Menu = {
  featured: [
    {
      id: 'accras-dores',
      category: 'starter',
      name: 'Accras de morue dorés',
      description: 'Beignets de morue légèrement épicés, croustillants dehors, fondants dedans. Servis avec sauce chien maison.',
      price: 9.00,
      image: '🌶️',
      spice: 2,
    },
    {
      id: 'colombo-riz',
      category: 'main',
      name: 'Colombo de poulet & riz créole',
      description: 'Poulet fermier mijoté aux épices colombo, christophines et riz blanc parfumé à la cive.',
      price: 18.00,
      image: '🍖',
      spice: 3,
    },
    {
      id: 'tourment-amour',
      category: 'dessert',
      name: "Tourment d'amour",
      description: "Le gâteau emblématique des Saintes — pâte sablée, noix de coco râpée et confiture de coco maison.",
      price: 7.00,
      image: '🍮',
    },
  ],

  setMenus: [
    {
      id: 'ti-faim',
      name: "Ti' Faim",
      description: "1 plat au choix + 1 boisson incluse (jus, eau ou ti' punch)",
      price: 15.00,
      courses: [],
      image: '☀️',
    },
    {
      id: 'zassiet-complete',
      name: "Zassiet' Complète",
      description: '1 entrée + 1 plat au choix + 1 dessert',
      price: 25.00,
      courses: [],
      image: '🌴',
    },
    {
      id: 'prestige',
      name: 'Kay Maman Prestige',
      description: "1 entrée + 1 plat fruits de mer + 1 dessert + punch d'accueil",
      price: 38.00,
      courses: [],
      image: '🦞',
    },
    {
      id: 'repas-maman',
      name: 'Le Repas de Maman — 5 services',
      description: "Un voyage complet dans la cuisine martiniquaise : accras d'accueil, velouté de giraumon, plat signature du chef, dessert du jour et rhum vieux pour finir. Pour toute la table.",
      price: 49.00,
      courses: [],
      tags: ['signature'],
    },
  ],

  starters: {
    classics: {
      label: 'Classiques',
      dishes: [
        {
          id: 'accras-morue',
          name: 'Accras de morue',
          description: "Beignets de morue salée, persil, piment végétarien. Dorés à la perfection. Servis avec sauce chien fraîche et citron vert.",
          category: 'starter',
          price: 9.00,
          tags: ['signature'],
          spice: 2,
        },
        {
          id: 'boudin-grille',
          name: 'Boudin antillais grillé',
          description: 'Boudin noir créole épicé, grillé minute. Accompagné de banane jaune et piment confit.',
          category: 'starter',
          price: 10.00,
          spice: 3,
        },
        {
          id: 'feroce-avocat',
          name: "Féroce d'avocat",
          description: "Avocat écrasé, morue effilochée, farine de manioc, citron vert et piment. Une entrée emblématique des Antilles.",
          category: 'starter',
          price: 11.00,
          tags: ['vegetarian'],
          spice: 2,
        },
      ],
    },
    soups: {
      label: 'Soupes & Veloutés',
      dishes: [
        {
          id: 'veloute-giraumon',
          name: 'Velouté de giraumon & lait de coco',
          description: 'Soupe onctueuse au giraumon (potiron antillais), lait de coco, noix muscade et cive fraîche.',
          category: 'starter',
          price: 9.00,
          tags: ['new'],
          spice: 1,
        },
        {
          id: 'soupe-poissons',
          name: 'Soupe de poissons du pêcheur',
          description: 'Bouillon parfumé aux poissons du jour, légumes pays, thym, laurier et piment.',
          category: 'starter',
          price: 12.00,
          spice: 2,
        },
      ],
    },
  },

  mains: {
    meat: {
      label: 'Viandes & Volailles',
      dishes: [
        {
          id: 'colombo-poulet',
          name: 'Colombo de poulet & riz créole',
          description: 'Poulet fermier mijoté aux épices colombo, christophines, riz blanc parfumé à la cive et aux champignons djon-djon.',
          category: 'main',
          price: 18.00,
          tags: ['signature'],
          spice: 3,
        },
        {
          id: 'ragout-cochon',
          name: 'Ragoût de cochon & banane plantain',
          description: "Morceaux de porc mijotés longuement dans une sauce braisée aux épices, accompagnés de banane plantain dorée et d'igname.",
          category: 'main',
          price: 19.00,
          spice: 2,
        },
        {
          id: 'poulet-boucane',
          name: 'Poulet boucané & chutney mangue',
          description: "Poulet fumé à l'ancienne, marinade créole, servi avec un chutney de mangue maison et riz créole.",
          category: 'main',
          price: 21.00,
          tags: ['new'],
          spice: 2,
        },
      ],
    },
    fish: {
      label: 'Poissons & Fruits de Mer',
      dishes: [
        {
          id: 'blaff-poisson',
          name: 'Blaff de poisson du jour',
          description: 'Poisson blanc poché dans un court-bouillon parfumé au piment, thym, laurier, citron vert et ail. Servi avec farine de manioc.',
          category: 'main',
          price: 22.00,
          tags: ['signature'],
          spice: 2,
        },
        {
          id: 'langouste-grillee',
          name: 'Langouste grillée, beurre créole',
          description: "Langouste de Martinique grillée au feu de bois, beurre à l'ail, persil et piment doux. Frites maison.",
          category: 'main',
          price: 38.00,
          spice: 1,
        },
        {
          id: 'fricassee-lambis',
          name: 'Fricassée de lambis',
          description: 'Lambis mijoté en fricassée créole, sauce tomate aux épices et légumes pays. Un trésor des fonds marins martiniquais.',
          category: 'main',
          price: 26.00,
          spice: 2,
        },
        {
          id: 'tatou-thon',
          name: 'Tatou de thon, sauce chien & riz',
          description: "Thon de l'Atlantique poêlé, sauce chien maison (cives, piment, citron), riz créole et légumes grillés.",
          category: 'main',
          price: 24.00,
          tags: ['new'],
          spice: 2,
        },
      ],
    },
    vegetarian: {
      label: 'Végétarien',
      dishes: [
        {
          id: 'gratin-christophines',
          name: 'Gratin de christophines & fromage',
          description: 'Christophines (chayotes) gratinées, béchamel créole, fromage fondant, cive et noix muscade.',
          category: 'main',
          price: 16.00,
          tags: ['vegetarian'],
          spice: 1,
        },
        {
          id: 'riz-pois-rouges',
          name: 'Riz collé aux pois rouges',
          description: 'Riz créole cuisiné avec des pois rouges, coco râpé, lait de coco, cives et épices douces. Accompagné de légumes pays sautés.',
          category: 'main',
          price: 14.00,
          tags: ['vegetarian'],
          spice: 1,
        },
      ],
    },
  },

  desserts: {
    desserts: {
      label: '',
      dishes: [
        {
          id: 'tourment-amour-dessert',
          name: "Tourment d'amour",
          description: "Le gâteau emblématique des Saintes — pâte sablée généreuse, confiture de noix de coco maison et coco râpé. Servie tiède.",
          category: 'dessert',
          price: 7.00,
          tags: ['signature'],
        },
        {
          id: 'blanc-manger',
          name: 'Blanc-manger coco',
          description: 'Dessert crémeux à base de lait de coco, vanille de Tahiti et coulis de fruit de la passion. Frais et délicat.',
          category: 'main',
          price: 7.00,
        },
        {
          id: 'fondant-chocolat-banane',
          name: 'Fondant banane-chocolat noir',
          description: 'Fondant au chocolat noir 70%, cœur coulant à la banane des Antilles caramélisée, glace coco maison.',
          category: 'main',
          price: 9.00,
          tags: ['new'],
        },
        {
          id: 'sorbet-corossol',
          name: 'Soursop sorbet & zeste de citron vert',
          description: 'Sorbet maison au corossol (soursop) des jardins martiniquais, zeste de citron vert et feuilles de menthe.',
          category: 'main',
          price: 6.00,
        },
        {
          id: 'confiture-coco-pain',
          name: 'Assiette de confiture de coco & pain doux',
          description: "Confiture de coco artisanale, pain doux antillais grillé et beurre salé. Un goûter d'enfance.",
          category: 'main',
          price: 6.00,
        },
      ],
    },
  },

  drinks: {
    cocktails: [
      {
        id: 'ti-punch',
        name: "Ti' punch maison",
        description: "Rhum blanc agricole Martinique AOC, sucre de canne pur jus, citron vert de l'île. Préparé à votre goût.",
        base: 'rum',
        price: 7.00,
        tags: ['must_try'],
      },
      {
        id: 'planteur',
        name: 'Planteur Kay Maman',
        description: "Rhum vieux, jus d'ananas, jus de goyave, sirop de canne, grenadine et jus d'orange. Frappé.",
        base: 'rum',
        price: 9.00,
      },
      {
        id: 'shrubb',
        name: 'Shrubb Orange & Rhum',
        description: "Liqueur de rhum et d'écorce d'orange, spécialité des fêtes de Noël en Martinique. Servie avec des glaçons.",
        base: 'rum',
        price: 8.00,
      },
    ],

    rums: [
      {
        id: 'clement-blanc',
        origin: 'Martinique AOC · Blanc',
        name: 'Rhum Clément Blanc 50°',
        description: "Fruité, canne fraîche, vivace. Le classique pour un ti' punch authentique.",
        price: {
          glass: 6.00,
          bottle: 38.00,
        },
      },
      {
        id: 'jm-vsop',
        origin: 'Martinique AOC · Vieux',
        name: 'Rhum J.M Vieux VSOP',
        description: 'Ambré, vanillé, notes de bois précieux. Élevé 3 ans en fûts de chêne.',
        price: {
          glass: 9.00,
          bottle: 54.00,
        },
      },
      {
        id: 'james-xo',
        origin: 'Martinique AOC · XO',
        name: 'Rhum Saint-James XO',
        description: "Complexe, chocolaté, long en bouche. Pour les amateurs de rhums d'exception.",
        price: {
          glass: 14.00,
          bottle: 78.00,
        },
      },
      {
        id: 'depaz-piment',
        origin: 'Martinique AOC · Épicé',
        name: 'Rhum Depaz Piment-Vanille',
        description: 'Macéré artisanalement avec piment végétarien et vanille. Signature de la maison.',
        price: {
          glass: 8.00,
          bottle: 44.00,
        },
      },
    ],

    soft: [
      {
        id: 'jus-frais',
        name: 'Jus de fruits frais',
        description: 'Maracudja (fruit de la passion), corossol, goyave ou ananas. Pressés minute.',
        price: 5.00,
      },
      {
        id: 'sirop-maison',
        name: "Sirop maison à l'eau ou limonade",
        description: 'Orchidée, grenadine, tamarin, citron vert — faits par nos soins.',
        price: 4.00,
      },
      {
        id: 'eau-coco',
        name: 'Eau de coco fraîche',
        description: "Coco vert de l'île, servie à la paille dans la noix.",
        price: 5.00,
      },
      {
        id: 'eau-didier',
        name: 'Eau minérale (Didier)',
        description: 'Source martiniquaise, plate ou gazeuse.',
        price: 3.00,
      },
    ],
  },
};