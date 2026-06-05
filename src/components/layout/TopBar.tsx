export default function TopBar() {
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
        <span>{today}</span>

        <span>
          Breaking News • Loudoga News
        </span>
      </div>
    </div>
  );
}