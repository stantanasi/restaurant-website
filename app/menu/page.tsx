'use client';

import Hero from '@/app/menu/sections/Hero';
import { menu } from '@/data/restaurant.data';
import { Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { plus_jakarta_sans } from '../fonts';
import DishCard from './components/DishCard';
import DrinkCard, { RumCard } from './components/DrinkCard';
import MenuSection from './components/MenuSection';
import MenuSubsection from './components/MenuSubsection';
import SetMenuCard from './components/SetMenuCard';

const TABS = [
  { id: 'set-menus', label: '🍱 Formules' },
  { id: 'starters', label: '🌶️ Entrées' },
  { id: 'mains', label: '🍖 Plats' },
  { id: 'desserts', label: '🍮 Desserts' },
  { id: 'drinks', label: '🍹 Boissons & Rhums' },
] as const;

export default function MenuPage() {
  const [active, setActive] = useState<typeof TABS[number]['id']>('set-menus');

  return (
    <main>
      <Hero />

      <Stack
        direction="row"
        sx={{
          position: 'sticky',
          top: { xs: 57, md: 65 },
          background: '#FBF6EC',
          borderBottom: '1px solid #D4E8C2',
          justifyContent: 'center',
          zIndex: 50,
        }}
      >
        <Tabs
          value={TABS.findIndex((tab) => tab.id === active)}
          onChange={(_, index) => setActive(TABS[index].id)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            '& .MuiTab-root': {
              color: '#8C6840',
              fontFamily: `${plus_jakarta_sans.style.fontFamily}, sans-serif`,
              fontSize: { xs: '0.8rem', sm: '0.85rem' },
              fontWeight: 600,
              paddingX: { xs: 1.5, sm: 2.5 },
              textTransform: 'none',
              '&.Mui-selected': { color: '#0F1A0E' },
            },
            '& .MuiTabs-indicator': {
              background: '#C8311A',
            },
          }}
        >
          {TABS.map((tab) => (
            <Tab key={tab.id} label={tab.label} />
          ))}
        </Tabs>
      </Stack>

      <Container maxWidth="lg" sx={{ paddingY: { xs: 4, md: 6 } }}>
        {active === 'set-menus' && (
          <MenuSection
            emoji="🍱"
            title={<>Nos <em>Formules</em></>}
            subtitle="Disponibles midi & soir, du mardi au samedi."
          >
            <Grid container spacing={3}>
              {menu.setMenus.map((setMenu) => (
                <SetMenuCard
                  key={setMenu.id}
                  setMenu={setMenu}
                />
              ))}
            </Grid>
          </MenuSection>
        )}

        {active === 'starters' && (
          <MenuSection
            emoji="🌶️"
            title={<>Entrées <em>Créoles</em></>}
            subtitle="Pour ouvrir l'appétit avec les saveurs de chez nous."
          >
            {Object.values(menu.starters).map(({ label, dishes }) => (
              <MenuSubsection
                key={label}
                label={label}
              >
                {dishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                  />
                ))}
              </MenuSubsection>
            ))}
          </MenuSection>
        )}

        {active === 'mains' && (
          <MenuSection
            emoji="🍖"
            title={<>Plats <em>Martiniquais</em></>}
            subtitle="Le cœur de la cuisine créole, généreux et parfumé."
          >
            {Object.values(menu.mains).map(({ label, dishes }) => (
              <MenuSubsection
                key={label}
                label={label}
              >
                {dishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                  />
                ))}
              </MenuSubsection>
            ))}
          </MenuSection>
        )}

        {active === 'desserts' && (
          <MenuSection
            emoji="🍮"
            title={<>Desserts <em>Maison</em></>}
            subtitle="Tous préparés le matin par notre équipe."
          >
            {Object.values(menu.desserts).map(({ label, dishes }) => (
              <MenuSubsection
                key={label}
                label={label}
              >
                {dishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                  />
                ))}
              </MenuSubsection>
            ))}
          </MenuSection>
        )}

        {active === 'drinks' && (
          <MenuSection
            emoji="🍹"
            title={<>Boissons & <em>Rhums</em></>}
            subtitle="Les meilleurs rhums agricoles de l'île."
          >
            <MenuSubsection label="Ti' Punch & Cocktails">
              {menu.drinks.cocktails?.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  drink={drink}
                />
              ))}
            </MenuSubsection>
            <MenuSubsection label="Rhums Agricoles — Sélection" variant="grid">
              {menu.drinks.rums?.map((rum) => (
                <RumCard
                  key={rum.id}
                  rum={rum}
                />
              ))}
            </MenuSubsection>
            <MenuSubsection label="Sans Alcool">
              {menu.drinks.soft?.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  drink={drink}
                />
              ))}
            </MenuSubsection>
          </MenuSection>
        )}


        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            alignItems: 'center',
            background: '#D4E8C2',
            borderRadius: 1,
            marginTop: 6,
            paddingX: { xs: '1.5rem', sm: '2rem' },
            paddingY: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          <Typography sx={{ fontSize: '1.5rem' }}>
            🌿
          </Typography>

          <Typography sx={{ color: '#1D3A1A', fontSize: '0.875rem', lineHeight: 1.65 }}>
            <strong>Allergènes & régimes :</strong> Nos plats contiennent du gluten, des crustacés
            et des fruits à coque. Nous adaptons nos recettes selon vos besoins — signalez-le lors
            de la réservation. Tous nos plats sont cuisinés dans la même cuisine, des traces de
            croisement peuvent exister.
          </Typography>
        </Stack>
      </Container>
    </main >
  );
}