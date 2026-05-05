'use client';

import { fraunces } from '@/app/fonts';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '12h00',
    guests: '2 personnes',
    phone: '',
  });

  return (
    <Box
      component="section"
      id="reservation"
      sx={{
        paddingY: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: 'clamp(2rem,3.5vw,2.8rem)' },
                marginBottom: 2,
                '& em': {
                  color: '#C8311A',
                  fontStyle: 'italic',
                },
              }}
            >
              Réservez<br />votre <em>table</em>
            </Typography>

            <Typography
              sx={{
                color: '#8C6840',
                lineHeight: 1.8,
                marginBottom: 3,
                maxWidth: 380,
              }}
            >
              Pour les grands repas de famille, les anniversaires ou simplement un soir en amoureux
              — Kay Manman vous accueille avec le sourire.
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{
                alignItems: 'flex-start',
                background: '#D4E8C2',
                borderRadius: 1,
                paddingX: '1.25rem',
                paddingY: '1.1rem',
              }}
            >
              <Typography>
                🌶️
              </Typography>

              <Typography sx={{ color: '#1D3A1A', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Pour les groupes de plus de 8 personnes ou une privatisation d'espace,
                contactez-nous directement par téléphone ou WhatsApp.
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                boxShadow: '0 6px 50px rgba(15,26,14,0.08)',
                padding: { xs: 3, sm: 4 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: `${fraunces.style.fontFamily}, serif`,
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  marginBottom: 0.5,
                }}
              >
                Faire une réservation
              </Typography>

              <Typography sx={{ color: '#8C6840', fontSize: '0.875rem', marginBottom: 3 }}>
                Confirmation par message sous 2h
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Prénom"
                    value={form.firstName}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      firstName: event.target.value
                    }))}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Nom"
                    value={form.lastName}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      lastName: event.target.value
                    }))}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Date"
                    value={form.date}
                    onChange={(event) => setForm((prev) => ({
                      ...prev,
                      date: event.target.value
                    }))}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Heure</InputLabel>
                    <Select
                      label="Heure"
                      value={form.time}
                      onChange={(e) => setForm((prev) => ({
                        ...prev,
                        time: e.target.value,
                      }))}
                    >
                      {['12h00', '12h30', '13h00', '13h30', '19h30', '20h00', '20h30', '21h00'].map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel>Nombre de personnes</InputLabel>
                    <Select
                      label="Nombre de personnes"
                      value={form.guests}
                      onChange={(e) => setForm((prev) => ({
                        ...prev,
                        guests: e.target.value,
                      }))}
                    >
                      {Array.from({ length: 8 }, (_, i) => `${i + 1} personne${i > 0 ? 's' : ''}`).map((guest) => (
                        <MenuItem key={guest} value={guest}>
                          {guest}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    type="tel"
                    label="Téléphone"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))}
                  />
                </Grid>

                <Grid size={12}>
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    onClick={() => console.log(form)}
                    sx={{
                      background: '#C8311A',
                      color: '#fff',
                      borderRadius: 360,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      marginTop: 0.5,
                      paddingY: 1.6,
                      transition: 'background 0.2s, transform 0.2s',
                      '&:hover': {
                        background: '#a8270f',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    Confirmer ma réservation 🌴
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
