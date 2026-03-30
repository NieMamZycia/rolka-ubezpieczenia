export default function AdminPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-7xl p-4">
        <h1 className="mb-4 text-2xl font-bold">Panel TinaCMS</h1>
        <div className="h-screen w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <iframe
            src="/admin/index.html"
            title="TinaCMS Admin Panel"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </main>
  );
}
