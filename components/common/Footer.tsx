import { fraunces } from '@/app/fonts';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Réservation', href: '/#reservation' },
];

const CONTACT_LINKS = [
  { label: '0596 XX XX XX', href: 'tel:0596000000' },
  { label: 'contact@kaymanman.mq', href: 'mailto:contact@kaymanman.mq' },
  { label: 'Fort-de-France, Martinique', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: '#0F1A0E',
        paddingBottom: { xs: 3, md: 4 },
        paddingTop: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            paddingBottom: { xs: 4, md: 6 },
          }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 5 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography
                sx={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  background: '#2D5E24',
                  borderRadius: '50%',
                  fontSize: '1.1rem',
                  justifyContent: 'center',
                }}
              >
                🌴
              </Typography>

              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: `${fraunces.style.fontFamily}, serif`,
                  fontSize: '1.4rem',
                  fontWeight: 700,
                }}
              >
                Kay Manman
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.875rem',
                lineHeight: 1.75,
                maxWidth: 300,
                marginTop: 1.5,
              }}
            >
              Cuisine créole authentique, saveurs martiniquaises et accueil chaleureux — bienvenue chez nous.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </Typography>

            <Stack direction="column" spacing={0.75} sx={{ marginTop: 2 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: '#F2B418',
                      },
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </Typography>

            <Stack direction="column" spacing={0.75} sx={{ marginTop: 2 }}>
              {CONTACT_LINKS.map(({ label, href }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  sx={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: '#F2B418',
                    },
                  }}
                >
                  {label}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            marginTop: 3,
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.78rem',
            }}
          >
            © {currentYear} Kay Manman — Tous droits réservés
          </Typography>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Link href="#">
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.78rem',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#F2B418',
                  },
                }}
              >
                Mentions légales
              </Typography>
            </Link>

            <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
              •
            </Typography>

            <Link href="#">
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.78rem',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#F2B418',
                  },
                }}
              >
                Politique de confidentialité
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
