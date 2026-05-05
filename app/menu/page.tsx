'use client';

import Hero from '@/app/menu/sections/Hero';
import { menu } from '@/data/restaurant.data';
import { Container, Grid, Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { plus_jakarta_sans } from '../fonts';
import MenuSection from './components/MenuSection';
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
      </Container>
    </main >
  );
}