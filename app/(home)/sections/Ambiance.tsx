import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export default function Ambiance() {
  return (
    <Box
      component="section"
      sx={{
        background: '#F0E0C0',
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: { xs: '160px 160px', md: '200px 200px' },
                gap: 2,
              }}
            >
              {[
                { emoji: '🌴', background: '#1D3A1A' },
                { emoji: '🥥', background: '#2D5E24' },
                { emoji: '🦞', background: '#E8731A' },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    background: item.background,
                    alignItems: 'center',
                    borderRadius: 1,
                    fontSize: { xs: '3.5rem', md: index === 0 ? '5rem' : '4rem' },
                    gridRow: { md: index === 0 ? 'span 2' : undefined },
                    justifyContent: 'center',
                    transition: 'transform 0.4s',
                    userSelect: 'none',
                    '&:hover': {
                      transform: 'scale(1.04)',
                    },
                  }}
                >
                  {item.emoji}
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                display: 'inline-flex',
                background: 'rgba(45, 94, 36, 0.15)',
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
              🌺 L'ambiance
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: 'clamp(2rem,3.5vw,3rem)' },
                marginBottom: 2.5,
                '& em': {
                  color: '#C8311A',
                  fontStyle: 'italic',
                },
              }}
            >
              Une terrasse sous<br />les <em>cocotiers</em>
            </Typography>

            <Typography
              sx={{
                color: '#8C6840',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: 3,
              }}
            >
              Chez Kay Manman, on dîne les pieds dans le sable ou sous la véranda fleurie.
              La musique zouk en fond, les couleurs vives partout — vous êtes ici chez vous.
            </Typography>

            <Stack direction="column" spacing={1.5}>
              {[
                { icon: '🌊', label: 'Vue sur le lagon depuis la terrasse' },
                { icon: '🎶', label: 'Musique live le vendredi & samedi soir' },
                { icon: '🎉', label: "Salle privatisable pour événements (jusqu'à 50 pers.)" },
                { icon: '👶', label: 'Espace enfants et menu spécial petits' },
              ].map((feature) => (
                <Stack
                  key={feature.label}
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      background: '#1D3A1A',
                      borderRadius: '50%',
                      color: '#F2B418',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography sx={{ color: '#0F1A0E', fontSize: '0.9rem', fontWeight: 500 }}>
                    {feature.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
