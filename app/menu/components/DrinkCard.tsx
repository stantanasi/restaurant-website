import { fraunces } from '@/app/fonts';
import { Drink, Rum, TagLabel } from '@/types/restaurant.types';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

export function RumCard({ rum }: {
  rum: Rum;
}) {
  return (
    <Grid
      size={{ xs: 12, sm: 6 }}
      sx={{
        background: '#FBF6EC',
        padding: { xs: 2.5, sm: 3 },
        transition: 'background 0.2s',
        '&:hover': {
          background: '#fff',
        },
      }}
    >
      <Typography
        sx={{
          color: '#C8311A',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          marginBottom: 0.4,
          textTransform: 'uppercase',
        }}
      >
        {rum.origin}
      </Typography>

      <Typography
        sx={{
          fontFamily: `${fraunces.style.fontFamily}, serif`,
          fontSize: '1rem',
          marginBottom: 0.4,
        }}
      >
        {rum.name}
      </Typography>

      <Typography
        sx={{
          color: '#8C6840',
          fontSize: '0.82rem',
          lineHeight: 1.5,
          marginBottom: 1.25,
        }}
      >
        {rum.description}
      </Typography>

      <Stack direction="row" spacing={3}>
        <Box>
          <Typography sx={{ color: '#8C6840', fontSize: '0.62rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Verre 4cl
          </Typography>
          <Typography sx={{ fontFamily: `${fraunces.style.fontFamily}, serif`, fontSize: '1rem', fontWeight: 700 }}>
            {rum.price.glass.toFixed(2)} €
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: '#8C6840', fontSize: '0.62rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Bouteille
          </Typography>
          <Typography sx={{ fontFamily: `${fraunces.style.fontFamily}, serif`, fontSize: '1rem', fontWeight: 700 }}>
            {rum.price.bottle.toFixed(2)} €
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}


type Props = {
  drink: Drink;
};

export default function DrinkCard({ drink }: Props) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        paddingX: { xs: 0.5, sm: 1 },
        paddingY: { xs: 2, sm: 2.5 },
        transition: 'background 0.2s',
        '&:hover': {
          background: 'rgba(212,232,194,0.2)',
        },
      }}
    >
      <Stack direction="row" sx={{ marginBottom: 0.6 }}>
        {drink.tags?.map((tag) => (
          <Chip
            key={tag}
            label={TagLabel[tag]}
            size="small"
            sx={{
              background: tag === 'new' ? '#F2B418'
                : tag === 'vegetarian' ? '#D4E8C2'
                  : '#C8311A',
              color: tag === 'new' ? '#0F1A0E'
                : tag === 'vegetarian' ? '#2D5E24'
                  : '#fff',
              fontSize: '0.62rem',
              fontWeight: 700,
            }}
          />
        ))}
      </Stack>

      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <Stack spacing={0.4} sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: `${fraunces.style.fontFamily}, serif`,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            {drink.name}
          </Typography>

          <Typography sx={{ color: '#8C6840', fontSize: '0.875rem', lineHeight: 1.65 }}>
            {drink.description}
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: '#C8311A',
            fontFamily: `${fraunces.style.fontFamily}, serif`,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
            fontWeight: 700,
            textAlign: 'right',
            whiteSpace: 'nowrap',
          }}
        >
          {drink.price.toFixed(2)} €
        </Typography>
      </Stack>
    </Box>
  );
}