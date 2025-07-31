// app/layout.tsx
export const metadata = {
  title: 'LeadFlow – ניהול לידים (RTL)',
  description: 'דשבורד Next.js בעברית',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans bg-slate-100">
        {children}
      </body>
    </html>
  );
}
