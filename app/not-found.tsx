export default function NotFound() {
  return (
    <section dir="rtl" className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl mb-2">הדף לא נמצא</p>
      <a href="/" className="text-sky-600 underline">
        חזור לדף הבית
      </a>
    </section>
  );
}
