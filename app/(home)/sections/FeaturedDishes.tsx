import { fraunces } from '@/app/fonts';
import { menu } from '@/data/restaurant.data';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function FeaturedDishes() {
  return (
    <Box
      component="section"
      sx={{
        background: '#0F1A0E',
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            display: 'inline-flex',
            background: 'rgba(212,232,194,0.12)',
            borderRadius: 360,
            color: '#D4E8C2',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: 1.5,
            paddingX: 1.5,
            paddingY: 0.5,
            textTransform: 'uppercase',
          }}
        >
          🍽️ Nos incontournables
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            marginBottom: 5,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontSize: { xs: '2rem', md: 'clamp(2rem,3.5vw,3rem)' },
              '& em': {
                color: '#F2B418',
                fontStyle: 'italic',
              },
            }}
          >
            Ce qui fait <em>revenir</em>
          </Typography>

          <Link href="/menu">
            <Button variant="outlined">
              Voir toute la carte
            </Button>
          </Link>
        </Stack>

        <Grid container spacing={2}>
          {menu.featured.map((dish) => (
            <Grid
              key={dish.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                height: 'auto',
                display: 'flex',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 1,
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'background 0.3s, transform 0.35s',
                '&:hover': {
                  background: 'rgba(255,255,255,0.08)',
                  transform: 'translateY(-6px)',
                },
              }}
            >
              <Box
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  background: '#1D3A1A',
                  fontSize: '5rem',
                  justifyContent: 'center',
                  Events: 'none',
                  userSelect: 'none',
                }}
              >
                {dish.image}
              </Box>

              <Stack
                direction="column"
                sx={{
                  flex: 1,
                  padding: 3,
                }}
              >
                <Typography
                  sx={{
                    color: '#E8731A',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    marginBottom: 0.6,
                    textTransform: 'uppercase',
                  }}
                >
                  {dish.category === 'starter' ? 'Entrée · Tradition'
                    : dish.category === 'main' ? 'Plat · Signature'
                      : dish.category === 'dessert' ? 'Dessert · Maison'
                        : ''}
                </Typography>

                <Typography
                  sx={{
                    color: '#fff',
                    fontFamily: `${fraunces.style.fontFamily}, serif`,
                    fontSize: '1.15rem',
                    lineHeight: 1.25,
                    marginBottom: 1,
                  }}
                >
                  {dish.name}
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.825rem',
                    flex: 1,
                    lineHeight: 1.65,
                    marginBottom: 2,
                  }}
                >
                  {dish.description}
                </Typography>

                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography
                    sx={{
                      color: '#F2B418',
                      fontFamily: `${fraunces.style.fontFamily}, serif`,
                      fontSize: '1.4rem',
                      fontWeight: 700,
                    }}
                  >
                    {dish.price.toFixed(2)} €
                  </Typography>

                  <Typography sx={{ fontSize: '0.9rem' }}>
                    {'🌶️'.repeat(dish.spice ?? 0)}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
