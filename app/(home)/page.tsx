import Hero from '@/app/(home)/sections/Hero';
import Marquee from '@/components/ui/Marquee';
import { Typography } from '@mui/material';
import { Fragment } from 'react';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee repeat={3} speed={110} sx={{ background: '#F2B418', paddingY: 1.25 }}>
        {[
          '🍖 Colombo de poulet',
          '🦞 Langouste grillée',
          '🌶️ Accras de morue',
          '🍹 Ti\' punch maison',
          '🐟 Blaff de poissons',
          '🥘 Boudin antillais',
          '🍮 Tourment d\'amour',
        ].map((item, index) => (
          <Fragment key={index}>
            <Typography
              sx={{
                color: '#0F1A0E',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {item}
            </Typography>

            <Typography sx={{ color: '#C8311A', fontSize: '1rem' }}>
              ✦
            </Typography>
          </Fragment>
        ))}
      </Marquee>
    </main>
  );
}
