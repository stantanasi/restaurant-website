import { Box, Stack, Typography } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  emoji: string;
  title: ReactNode;
  subtitle: string;
}>;

export default function MenuSection({ emoji, title, subtitle, children }: Props) {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          alignItems: { xs: 'flex-start', sm: 'center' },
          borderBottom: '1px solid rgba(15,26,14,0.08)',
          justifyContent: 'space-between',
          marginBottom: 3,
          paddingBottom: 2.5,
        }}
      >
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
          <Box
            sx={{
              background: '#1D3A1A',
              color: '#F2B418',
              width: 56,
              height: 56,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.75rem',
              flexShrink: 0,
            }}
          >
            {emoji}
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem' },
              '& em': {
                color: '#C8311A',
                fontStyle: 'italic',
              },
            }}
          >
            {title}
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: '#8C6840',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            maxWidth: 300,
            textAlign: { xs: 'left', sm: 'right' },
          }}
        >
          {subtitle}
        </Typography>
      </Stack>

      {children}
    </Box>
  );
}