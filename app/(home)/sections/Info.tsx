import { fraunces } from '@/app/fonts';
import { Box, Container, Stack, Typography } from '@mui/material';

export default function Info() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        background: '#1D3A1A',
        paddingY: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3.5}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: '1.75rem', marginBottom: 1.25 }}>
              🕐
            </Typography>

            <Typography
              sx={{
                color: '#F2B418',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: 0.75,
                textTransform: 'uppercase',
              }}
            >
              Horaires
            </Typography>

            <Typography
              sx={{
                color: '#fff',
                fontFamily: `${fraunces.style.fontFamily}, serif`,
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: 0.5,
              }}
            >
              Mar - Dim : 11h30 - 15h
              <br />
              Mar - Sam : 18h30 - 22h
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
              Fermé dimanche soir & lundi
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: 'auto', sm: '1px' },
              height: { xs: '1px', sm: 'auto' },
              background: 'rgba(255,255,255,0.1)',
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: '1.75rem', marginBottom: 1.25 }}>
              📍
            </Typography>

            <Typography
              sx={{
                color: '#F2B418',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: 0.75,
                textTransform: 'uppercase',
              }}
            >
              Adresse
            </Typography>

            <Typography
              sx={{
                color: '#fff',
                fontFamily: `${fraunces.style.fontFamily}, serif`,
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: 0.5,
              }}
            >
              Rue de la Savane
              <br />
              97200 Fort-de-France
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
              Face à la Baie des Flamands
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: 'auto', sm: '1px' },
              height: { xs: '1px', sm: 'auto' },
              background: 'rgba(255,255,255,0.1)',
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: '1.75rem', marginBottom: 1.25 }}>
              📞
            </Typography>

            <Typography
              sx={{
                color: '#F2B418',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                marginBottom: 0.75,
                textTransform: 'uppercase',
              }}
            >
              Réservations
            </Typography>

            <Typography
              component="a"
              href="tel:0596000000"
              sx={{
                color: '#fff',
                fontFamily: `${fraunces.style.fontFamily}, serif`,
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: 0.5,
                '&:hover': {
                  color: '#F2B418',
                },
              }}
            >
              0596 XX XX XX
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
              ou via WhatsApp
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
