'use client';

import { fraunces } from '@/app/fonts';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Collapse, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: '#f5f0e8',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(242, 180, 24, 0.2)' : 'none',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href="/">
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Typography
                sx={{
                  width: 36,
                  height: 36,
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
                  color: '#1D3A1A',
                  fontFamily: `${fraunces.style.fontFamily}, serif`,
                  fontSize: { xs: '1.15rem', md: '1.35rem' },
                  fontWeight: 700,
                }}
              >
                Kay Manman
              </Typography>
            </Stack>
          </Link>

          <Stack
            direction="row"
            spacing={5}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href}>
                <Typography
                  sx={{
                    color: '#0F1A0E',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    opacity: 0.7,
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {label}
                </Typography>
              </Link>
            ))}

            <Link href="/#reservation">
              <Button
                variant="contained"
                sx={{
                  background: '#C8311A',
                  color: '#fff',
                  borderRadius: 100,
                  paddingX: 2.5,
                  fontWeight: 600,
                  '&:hover': {
                    background: '#a8270f',
                  },
                }}
              >
                Réserver
              </Button>
            </Link>
          </Stack>

          <IconButton
            aria-label="menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            sx={{
              display: { md: 'none' },
              color: '#1C1A16',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <Stack
            sx={{
              display: { md: 'none' },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingBottom: 3,
              paddingTop: 1,
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)}>
                <Typography
                  sx={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                    color: '#1C1A16',
                    fontSize: '1rem',
                    fontWeight: 600,
                    opacity: 0.7,
                    paddingY: 1.5,
                    textTransform: 'uppercase',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  {label}
                </Typography>
              </Link>
            ))}

            <Link href="/#reservation">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: '#C8311A',
                  color: '#fff',
                  borderRadius: 100,
                  paddingX: 2.5,
                  fontWeight: 600,
                  '&:hover': {
                    background: '#a8270f',
                  },
                }}
              >
                Réserver une table
              </Button>
            </Link>
          </Stack>
        </Collapse>
      </Container>
    </AppBar>
  );
}
