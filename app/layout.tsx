import Navbar from '@/components/common/Navbar';
import theme from '@/themes/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from "next";
import { fraunces, plus_jakarta_sans } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "The Restaurant",
  description: "Un modèle de site web haute performance pour établissements gastronomiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.className} ${plus_jakarta_sans.className}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Navbar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
