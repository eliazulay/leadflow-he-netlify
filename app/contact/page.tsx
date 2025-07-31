export default function ContactPage() {
  return (
    <section dir="rtl" className="max-w-lg mx-auto p-6 text-right">
      <h1 className="text-3xl font-bold mb-4">צור קשר</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="שם מלא"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          placeholder="אימייל"
          className="w-full border rounded p-2"
        />
        <textarea
          rows={4}
          placeholder="הודעה"
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-sky-600 text-white px-4 py-2 rounded"
        >
          שלח
        </button>
      </form>
    </section>
  );
}
