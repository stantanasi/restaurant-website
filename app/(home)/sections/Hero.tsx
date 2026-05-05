import { fraunces } from '@/app/fonts';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        background: '#1D3A1A',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {[
          { top: '-5%', right: '5%', size: '14rem', opacity: 0.06, delay: '0s' },
          { bottom: '10%', right: '20%', size: '10rem', opacity: 0.07, delay: '2s' },
          { top: '30%', left: '-3%', size: '9rem', opacity: 0.05, delay: '4s' },
          { bottom: '-5%', left: '30%', size: '12rem', opacity: 0.05, delay: '1s' },
        ].map((leaf, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              top: leaf.top,
              bottom: leaf.bottom,
              left: leaf.left,
              right: leaf.right,
              animation: 'sway 8s ease-in-out infinite',
              animationDelay: leaf.delay,
              fontSize: leaf.size,
              opacity: leaf.opacity,
              userSelect: 'none',
              '@keyframes sway': {
                '0%, 100%': { transform: 'rotate(-3deg) scale(1)' },
                '50%': { transform: 'rotate(3deg) scale(1.04)' },
              },
            }}
          >
            🌿
          </Box>
        ))}

        <Box
          sx={{
            width: { xs: '80vw', md: '56vw' },
            position: 'absolute',
            top: '50%',
            right: { xs: '-20%', md: '-6%' },
            display: 'flex',
            alignItems: 'center',
            aspectRatio: 1 / 1,
            background: 'radial-gradient(circle at 40% 40%, #2D5E24, #0F1A0E)',
            borderRadius: '50%',
            fontSize: { xs: '12rem', md: '22rem' },
            justifyContent: 'center',
            maxWidth: 720,
            opacity: 0.15,
            Events: 'none',
            transform: 'translateY(-50%)',
            userSelect: 'none',
          }}
        >
          🍽️
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            marginTop: { xs: 8, md: 10 },
            marginX: 0,
            maxWidth: { md: 650 },
            paddingX: { xs: 3, sm: 5, md: 8 },
            paddingY: { xs: 6, md: 8 },
            '@keyframes fadeUp': {
              from: { opacity: 0, transform: 'translateY(24px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              animation: 'fadeUp 0.7s 0.15s forwards',
              background: 'rgba(242,180,24,0.15)',
              border: '1px solid rgba(242,180,24,0.3)',
              borderRadius: 360,
              color: '#F2B418',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              marginBottom: 3,
              opacity: 0,
              paddingX: 1.75,
              paddingY: 0.6,
              textTransform: 'uppercase',
            }}
          >
            🌴 Cuisine Créole Martiniquaise
          </Typography>

          <Typography
            variant="h1"
            sx={{
              animation: 'fadeUp 0.7s 0.3s forwards',
              color: '#fff',
              fontSize: { xs: '3rem', sm: '4rem', md: 'clamp(3.2rem,6vw,5.5rem)' },
              marginBottom: 2.5,
              opacity: 0,
              '& em': {
                color: '#F2B418',
                display: 'block',
                fontStyle: 'italic',
              },
            }}
          >
            La vraie <em>cuisine</em> d'ici
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              animation: 'fadeUp 0.7s 0.45s forwards',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              opacity: 0,
              marginBottom: 4,
              maxWidth: 430,
            }}
          >
            Kay Manman, c'est la table de famille qu'on n'oublie pas. Des saveurs authentiques,
            des épices soigneusement choisies et tout l'amour des Antilles dans chaque assiette.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              alignItems: { xs: 'flex-start', sm: 'center' },
              animation: 'fadeUp 0.7s 0.6s forwards',
              marginBottom: 5,
              opacity: 0,
            }}
          >
            <Link href="/menu">
              <Button
                variant="contained"
                size="large"
                sx={{ paddingX: 4, paddingY: 1.4 }}
              >
                Voir la carte →
              </Button>
            </Link>

            <Link href="/#reservation">
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                📅 Réserver une table
              </Typography>
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              animation: 'fadeUp 0.7s 0.75s forwards',
              flexWrap: 'wrap',
              opacity: 0,
            }}
          >
            {[
              { value: '20+', label: 'Ans de cuisine' },
              { value: '100%', label: 'Fait maison' },
              { value: 'Locaux', label: 'Producteurs île' },
            ].map(({ value, label }) => (
              <Stack
                key={label}
                direction="column"
                spacing={0.25}
                sx={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 1,
                  paddingX: { xs: 2, md: 2.5 },
                  paddingY: 1.5,
                }}
              >
                <Typography
                  sx={{
                    color: '#F2B418',
                    fontFamily: `${fraunces.style.fontFamily}, serif`,
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {value}
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: '#1D3A1A', lineHeight: 0 }}>
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
