import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        background: '#0F1A0E',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingBottom: { xs: 6, md: 10 },
          paddingTop: { xs: 14, md: 18 },
        }}
      >
        <Typography
          sx={{
            display: 'inline-flex',
            background: 'rgba(242,180,24,0.12)',
            border: '1px solid rgba(242,180,24,0.25)',
            borderRadius: 360,
            color: '#F2B418',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            marginBottom: 2.5,
            paddingX: 2,
            paddingY: 0.6,
            textTransform: 'uppercase',
          }}
        >
          🌴 Cuisine Créole Martiniquaise
        </Typography>

        <Typography
          variant="h1"
          sx={{
            color: '#fff',
            fontSize: { xs: '2.8rem', sm: '4rem', md: 'clamp(3rem,6vw,5.5rem)' },
            marginBottom: 2,
            textAlign: 'center',
            '& em': {
              color: '#F2B418',
              fontStyle: 'italic',
            },
          }}
        >
          La <em>carte</em><br />de Kay Manman
        </Typography>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: 440,
            textAlign: 'center',
          }}
        >
          Des plats préparés avec amour, des recettes qui traversent les générations, et les
          saveurs authentiques de la Martinique.
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 3 }}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 4,
          }}
        >
          {[
            '🌶️ Légèrement épicé',
            '🌶️🌶️ Bien épicé',
            '🌶️🌶️🌶️ Très épicé',
            '🌱 Végétarien',
          ].map((spice) => (
            <Typography
              key={spice}
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
              }}
            >
              {spice}
            </Typography>
          ))}
        </Stack>
      </Container>

      <Box sx={{ background: '#0F1A0E', lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 60 }}
        >
          <path
            d="M0,60 L0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 Z"
            fill="#FBF6EC"
          />
        </svg>
      </Box>
    </Box>
  );
}
