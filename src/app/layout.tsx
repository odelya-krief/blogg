import "../globals.css";
export const metadata = {
  title: "Blogg",
  description: "Travel blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-b from-orange-50 to-orange-200">
        <h1 className="text-7xl text-orange-700 font-sans">Blogg</h1>
        {children}
      </body>
    </html>
  );
}
