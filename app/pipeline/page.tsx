export default function PipelinePage() {
  const stages = ["חדש", "נוצר קשר", "נקבעה פגישה", "סגור"];
  return (
    <section dir="rtl" className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">פייפליין לידים</h1>
      <div className="flex gap-4 overflow-x-auto">
        {stages.map((stage) => (
          <div key={stage} className="bg-slate-100 p-4 rounded min-w-64">
            <h2 className="font-bold mb-2">{stage}</h2>
            <div className="space-y-2">
              {/* Placeholder cards */}
              <div className="bg-white p-2 rounded shadow">ליד 1</div>
              <div className="bg-white p-2 rounded shadow">ליד 2</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
