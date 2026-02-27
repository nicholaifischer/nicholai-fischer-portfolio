import "./globals.css";

export const metadata = {
  title: "Nicholai Fischer - Product Designer",
  description: "Product Designer based in Venice. Building brands and digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
