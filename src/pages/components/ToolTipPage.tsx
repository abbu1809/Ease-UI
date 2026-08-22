import { Button } from '@/components/Button/Button';
import { Tooltip } from '@/components/Tooltip';
import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';

const ToolTipPage = () => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip";

<Tooltip content="More information">
  <Button>Hover me</Button>
</Tooltip>`;
  const propsData = [
    {
      prop: 'content',
      type: 'React.ReactNode',
      default: '-',
      description: 'Content shown when the trigger is hovered or focused.',
    },
    {
      prop: 'side',
      type: '"top" | "bottom"',
      default: '"top"',
      description: 'Position of the tooltip relative to its trigger.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-gray-600">
          Add concise context to controls without interrupting the user’s flow.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="flex flex-wrap items-center gap-8">
            <Tooltip content="More information">
              <Button>Hover me</Button>
            </Tooltip>
            <Tooltip content="Shown below" side="bottom">
              <Button variant="outline">Bottom tooltip</Button>
            </Tooltip>
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

export default ToolTipPage;
