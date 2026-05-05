import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  label?: string;
  variant?: 'default' | 'grid';
}>;

export default function MenuSubsection({ label, variant = 'default', children }: Props) {
  return (
    <Box>
      {label ? (
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            alignItems: 'center',
            paddingBottom: 0.75,
            paddingTop: 3,
          }}
        >
          <Typography
            sx={{
              color: '#2D5E24',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </Typography>

          <Box
            sx={{
              height: '1.5px',
              background: '#D4E8C2',
              flex: 1,
            }}
          />
        </Stack>
      ) : null}

      {variant === 'default' ? (
        <Stack divider={<Divider sx={{ borderColor: 'rgba(15,26,14,0.06)' }} />}>
          {children}
        </Stack>
      ) : variant === 'grid' ? (
        <Grid
          container
          spacing="1px"
          sx={{
            background: 'rgba(15,26,14,0.06)',
            border: '1px solid rgba(15,26,14,0.06)',
            borderRadius: 1,
            marginTop: 0.5,
            overflow: 'hidden',
          }}
        >
          {children}
        </Grid>
      ) : null}
    </Box>
  );
}