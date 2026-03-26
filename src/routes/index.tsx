import { createFileRoute } from '@tanstack/react-router';
import { Title } from '#/components/Title';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main className="gap flex min-h-screen flex-col justify-center text-center">
      <Title />
    </main>
  );
}
