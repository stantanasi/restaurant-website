'use client';

import { fraunces } from '@/app/fonts';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const BACKGROUND = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='60' cy='60' rx='45' ry='18' fill='none' stroke='%234C8B3F' stroke-width='0.6' opacity='0.15' transform='rotate(30 60 60)'/%3E%3Cellipse cx='60' cy='60' rx='45' ry='18' fill='none' stroke='%234C8B3F' stroke-width='0.6' opacity='0.1' transform='rotate(90 60 60)'/%3E%3Cellipse cx='60' cy='60' rx='45' ry='18' fill='none' stroke='%234C8B3F' stroke-width='0.6' opacity='0.08' transform='rotate(150 60 60)'/%3E%3C/svg%3E")`;

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: BACKGROUND,
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'center' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: 'relative',
              height: { xs: 300, sm: 400, md: 500 },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '72%',
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                background: '#1D3A1A',
                borderRadius: 2,
                fontSize: { xs: '5rem', md: '7rem' },
                justifyContent: 'center',
                userSelect: 'none',
              }}
            >
              🥘
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: '1rem', md: '1.5rem' },
                right: { xs: '0.5rem', md: '1.5rem' },
                width: '55%',
                height: '55%',
                display: 'flex',
                alignItems: 'center',
                background: '#D4E8C2',
                border: '4px solid #FBF6EC',
                borderRadius: 1,
                fontSize: { xs: '3.5rem', md: '5rem' },
                justifyContent: 'center',
                userSelect: 'none',
              }}
            >
              🌿
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: { xs: '1rem', md: '1.5rem' },
                right: { xs: '0.5rem', md: '0.75rem' },
                width: { xs: 72, md: 80 },
                height: { xs: 72, md: 80 },
                display: 'flex',
                alignItems: 'center',
                animation: 'spin 20s linear infinite',
                background: '#C8311A',
                borderRadius: '50%',
                boxShadow: '0 4px 16px rgba(200,49,26,0.3)',
                color: '#fff',
                flexDirection: 'column',
                fontSize: '0.7rem',
                fontWeight: 700,
                justifyContent: 'center',
                letterSpacing: '0.04em',
                lineHeight: 1.3,
                textAlign: 'center',
                textTransform: 'uppercase',
                '@keyframes spin': {
                  from: { transform: 'rotate(0deg)' },
                  to: { transform: 'rotate(360deg)' },
                },
              }}
            >
              Fait<br />avec<br />♥
            </Box>

            <Stack
              direction="column"
              spacing={0.5}
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '55%',
                animation: 'float 4s ease-in-out infinite',
                background: '#F2B418',
                borderRadius: 1,
                boxShadow: '0 8px 40px rgba(242,180,24,0.3)',
                padding: { xs: '1.2rem', md: '1.5rem' },
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-8px)' },
                },
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(15,26,14,0.6)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Notre promesse
              </Typography>

              <Typography
                sx={{
                  color: '#0F1A0E',
                  fontFamily: `${fraunces.style.fontFamily}, serif`,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Recettes d'antan, saveurs d'aujourd'hui
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                display: 'inline-flex',
                background: '#D4E8C2',
                borderRadius: 360,
                color: '#2D5E24',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: 2,
                paddingX: 1.5,
                paddingY: 0.5,
                textTransform: 'uppercase',
              }}
            >
              🌿 Notre histoire
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: 'clamp(2rem,3.5vw,3rem)' },
                marginBottom: 2,
                '& em': {
                  color: '#C8311A',
                  display: 'block',
                  fontStyle: 'italic',
                },
              }}
            >
              La cuisine de <em>manman</em> à votre table
            </Typography>

            <Typography
              sx={{
                color: '#8C6840',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: 3,
              }}
            >
              Kay Manman est né d'une passion simple : partager les recettes transmises de
              génération en génération. Du colombo mijoté lentement au blaff parfumé, chaque
              plat raconte l'histoire de la Martinique et de ses habitants.
            </Typography>

            <Grid container spacing={1.5} sx={{ marginBottom: 4 }}>
              {[
                { icon: '🌶️', name: 'Épices authentiques', sub: 'Importées des Îles' },
                { icon: '🐟', name: 'Pêche du jour', sub: 'Pêcheurs locaux' },
                { icon: '🌱', name: 'Légumes pays', sub: 'Marché de Fort-de-France' },
                { icon: '🍹', name: 'Rhums sélectionnés', sub: 'Distilleries martiniquaises' },
              ].map((pillar) => (
                <Grid
                  key={pillar.name}
                  size={6}
                  sx={{
                    display: 'flex',
                    background: '#D4E8C2',
                    borderRadius: 1,
                    flexDirection: 'column',
                    gap: 0.3,
                    paddingX: { xs: '1.1rem', md: '1.25rem' },
                    paddingY: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  <Typography sx={{ fontSize: '1.4rem' }}>
                    {pillar.icon}
                  </Typography>

                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>
                    {pillar.name}
                  </Typography>

                  <Typography sx={{ color: '#8C6840', fontSize: '0.78rem' }}>
                    {pillar.sub}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Link href="/menu">
              <Button
                variant="contained"
                size="large"
                sx={{ paddingX: 4, paddingY: 1.4 }}
              >
                Découvrir notre carte
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}
