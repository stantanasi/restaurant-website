'use client';

import { Box, Stack, SxProps, Theme } from '@mui/material';
import { Fragment, PropsWithChildren, useEffect, useRef, useState } from 'react';

type Props = PropsWithChildren<{
  repeat?: number;
  speed?: number;
  spacing?: number;
  pauseOnHover?: boolean;
  sx?: SxProps<Theme>;
}>;

export default function Marquee({
  children,
  repeat = 3,
  speed = 50,
  spacing = 6,
  pauseOnHover = false,
  sx,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const distanceToScroll = contentWidth / 2;
      const calculatedDuration = distanceToScroll / speed;

      setDuration(calculatedDuration);
    }
  }, [children, repeat, speed]);

  return (
    <Box
      sx={[{
        width: '100%',
        overflow: 'hidden',
      }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Stack
        ref={contentRef}
        direction="row"
        spacing={spacing}
        sx={{
          width: 'fit-content',
          alignItems: 'center',
          animation: duration > 0 ? `slide ${duration}s linear infinite` : 'none',
          whiteSpace: 'nowrap',
          '@keyframes slide': {
            from: { transform: 'translateX(0px)' },
            to: { transform: 'translateX(-50%)' },
          },
          '&:hover': {
            animationPlayState: pauseOnHover ? 'paused' : 'running',
          },
        }}
      >
        {Array(repeat).fill(children).flat().map((child, index) => (
          <Fragment key={index}>
            {child}
          </Fragment>
        ))}
      </Stack>
    </Box >
  );
};
