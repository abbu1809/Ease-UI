import { Navbar } from '@/components/navbar';
import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";

<Navbar variant="primary" size="lg" animation="slideUp" />`;
  const propsData = [
    {
      prop: 'variant',
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: 'Visual style of the navigation bar.',
    },
    {
      prop: 'size',
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: 'Controls the navigation bar height.',
    },
    {
      prop: 'animation',
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: 'Entrance animation applied on mount.',
    },
    {
      prop: 'hoverAnimation',
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: 'Hover interaction applied to the bar.',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-lg text-gray-600">
          A flexible navigation bar with built-in variants, sizing, and motion.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full">
            <Navbar variant="primary" size="lg" animation="slideUp" />
          </div>
        </ComponentDemo>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
