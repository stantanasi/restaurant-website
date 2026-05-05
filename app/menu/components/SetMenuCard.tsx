import { fraunces } from '@/app/fonts';
import { SetMenu } from '@/types/restaurant.types';
import { Box, Grid, Stack, Typography } from '@mui/material';

type Props = {
  setMenu: SetMenu;
};

export default function SetMenuCard({ setMenu }: Props) {
  if (setMenu.tags?.includes('signature')) {
    return (
      <Grid
        key={setMenu.name}
        size={12}
        sx={{
          display: 'flex',
          background: 'linear-gradient(135deg, #1D3A1A, #0F1A0E)',
          borderRadius: 2,
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'space-between',
          paddingX: 6,
          paddingY: 5,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: '#F2B418',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              marginBottom: 1,
              textTransform: 'uppercase',
            }}
          >
            ✦ Expérience complète
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontFamily: `${fraunces.style.fontFamily}, serif`,
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: 1.5,
            }}
          >
            {setMenu.name}
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.875rem',
              lineHeight: 1.7,
            }}
          >
            {setMenu.description}
          </Typography>
        </Box>

        <Stack
          sx={{
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
            padding: '1.5rem 2rem',
          }}
        >
          <Typography
            sx={{
              color: '#F2B418',
              fontFamily: `${fraunces.style.fontFamily}, serif`,
              fontSize: '3rem',
              fontWeight: 700,
            }}
          >
            {setMenu.price} €
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            par personne
          </Typography>
        </Stack>
      </Grid>
    );
  }

  return (
    <Grid
      key={setMenu.name}
      size={{ xs: 12, md: 4 }}
      sx={{
        border: '2px solid #D4E8C2',
        borderRadius: 1,
        overflow: 'hidden',
        transition: 'border-color 0.2s, transform 0.2s',
        '&:hover': {
          borderColor: '#2D5E24',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          background: '#1D3A1A',
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography sx={{ fontSize: '2.5rem' }}>
          {setMenu.image}
        </Typography>

        <Typography
          sx={{
            color: '#fff',
            fontFamily: `${fraunces.style.fontFamily}, serif`,
            fontSize: '1.1rem',
            marginTop: 1,
          }}
        >
          {setMenu.name}
        </Typography>
      </Box>

      <Box
        sx={{
          paddingY: 2.5,
          paddingX: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: '0.8rem',
            color: '#8C6840',
            lineHeight: 1.7,
            marginBottom: 2,
          }}
        >
          {setMenu.description}
        </Typography>

        <Typography
          sx={{
            color: '#0F1A0E',
            fontFamily: `${fraunces.style.fontFamily}, serif`,
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          {setMenu.price} €
        </Typography>

        <Typography sx={{ color: '#8C6840', fontSize: '0.7rem' }}>
          par personne
        </Typography>
      </Box>
    </Grid>
  );
}