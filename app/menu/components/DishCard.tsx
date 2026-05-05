import { fraunces } from '@/app/fonts';
import { Dish, TagLabel } from '@/types/restaurant.types';
import { Box, Chip, Stack, Typography } from '@mui/material';

type Props = {
  dish: Dish;
};

export default function DishCard({ dish }: Props) {
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
        {dish.tags?.map((tag) => (
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
            {dish.name} {'🌶️'.repeat(dish.spice ?? 0)}
          </Typography>

          {dish.description && (
            <Typography sx={{ color: '#8C6840', fontSize: '0.875rem', lineHeight: 1.65 }}>
              {dish.description}
            </Typography>
          )}
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
          {dish.price.toFixed(2)} €
        </Typography>
      </Stack>
    </Box>
  );
}