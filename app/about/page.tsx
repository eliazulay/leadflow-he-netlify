export default function AboutPage() {
  return (
    <section dir="rtl" className="max-w-3xl mx-auto p-6 text-right">
      <h1 className="text-3xl font-bold mb-4">אודות LeadFlow</h1>
      <p className="mb-2">
        LeadFlow היא מערכת ניהול לידים חכמה, בעברית ו-RTL, שמאפשרת לך לסרוק, לנהל ולשלוח הודעות ישירות מפלטפורמות החברתיות.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>אינטגרציה עם Facebook, Instagram, LinkedIn</li>
        <li>דשבורד RTL מלא</li>
        <li>תמיכה ב-GDPR ו-ניהול צוותים</li>
      </ul>
    </section>
  );
}
