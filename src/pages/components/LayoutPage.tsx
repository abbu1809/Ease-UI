import { Layout } from '@/components/Layout';
import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';

const LayoutPage = () => {
  const usageCode = `import { Layout } from "@/components/Layout";

<Layout sidebar={<nav>Navigation</nav>} header={<h1>Dashboard</h1>}>
  <p>Main content</p>
</Layout>`;
  const propsData = [
    {
      prop: 'sidebar',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Optional content rendered in the side column.',
    },
    {
      prop: 'header',
      type: 'React.ReactNode',
      default: 'undefined',
      description: 'Optional content rendered in the top row.',
    },
    {
      prop: 'children',
      type: 'React.ReactNode',
      default: '-',
      description: 'Primary content rendered in the main area.',
    },
    {
      prop: 'className',
      type: 'string',
      default: '-',
      description: 'Additional classes for custom layout styling.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Layout</h1>
        <p className="text-lg text-gray-600">
          A simple responsive shell for consistent sidebar, header, and content
          structure.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full">
            <Layout
              sidebar={
                <div className="space-y-3 text-xs text-indigo-700">
                  <strong>EaseUi</strong>
                  <span className="block">Overview</span>
                  <span className="block">Settings</span>
                </div>
              }
              header={<h3 className="text-sm font-semibold">Dashboard</h3>}
            >
              <div className="space-y-2">
                <div className="h-3 w-2/3 rounded bg-gray-300" />
                <div className="h-3 w-1/2 rounded bg-gray-200" />
              </div>
            </Layout>
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

export default LayoutPage;
