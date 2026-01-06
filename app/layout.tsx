import './globals.css';

export const metadata = {
  title: 'GeoFAIR',
  description: 'A community resource hub for FAIR geoscience data'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
