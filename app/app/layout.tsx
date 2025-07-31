// app/layout.tsx
export const metadata = {
  title: 'LeadFlow – ניהול לידים',
  description: 'דשבורד RTL עם Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans">{children}</body>
    </html>
  );
}
