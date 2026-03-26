import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main className="gap flex min-h-screen flex-col justify-center text-center">
      <h1 className="text-2xl font-semibold">tanstack-start-template - A simple TanStack Start starter template</h1>
    </main>
  );
}
