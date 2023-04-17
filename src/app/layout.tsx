import "./globals.css";

export const metadata = {
  title: "Login Page",
  description: "A simple login page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
