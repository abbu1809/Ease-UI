import { Carousel } from '@/components/Carousel';
import ComponentDemo from '../ComponentsDemo';
import PropsTable from '@/components/Personal/PropsTable';

const CarouselPage = () => {
  const usageCode = `import { Carousel } from "@/components/Carousel";

<Carousel autoPlay interval={4000}>
  <div className="h-48 bg-indigo-600 p-8 text-white">First slide</div>
  <div className="h-48 bg-orange-500 p-8 text-white">Second slide</div>
</Carousel>`;

  const propsData = [
    {
      prop: 'children',
      type: 'React.ReactNode',
      default: '-',
      description: 'Slides displayed in the carousel.',
    },
    {
      prop: 'autoPlay',
      type: 'boolean',
      default: 'false',
      description: 'Automatically advances through the slides.',
    },
    {
      prop: 'interval',
      type: 'number',
      default: '4000',
      description: 'Delay between automatic slide changes in milliseconds.',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-4">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-lg text-gray-600">
          Browse a collection of content with controls and optional automatic
          playback.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full max-w-xl">
            <Carousel autoPlay interval={4000}>
              <div className="flex h-48 items-center bg-indigo-600 p-8 text-white">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Slide 01
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Design with intention
                  </h3>
                </div>
              </div>
              <div className="flex h-48 items-center bg-orange-500 p-8 text-white">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Slide 02
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Ship delightful interfaces
                  </h3>
                </div>
              </div>
              <div className="flex h-48 items-center bg-emerald-600 p-8 text-white">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/70">
                    Slide 03
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Keep moving forward
                  </h3>
                </div>
              </div>
            </Carousel>
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

export default CarouselPage;
