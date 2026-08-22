import { Link } from 'react-router';
import { ArrowRight, Blocks, Code2, Palette, type LucideIcon } from 'lucide-react';

const components = [
  ['Button', 'Actions, states, and motion', 'button'],
  ['Card', 'Flexible content containers', 'card'],
  ['Modal', 'Focused decisions and overlays', 'modal'],
  ['Input', 'Accessible form controls', 'input'],
  ['Navbar', 'Responsive page navigation', 'navbar'],
  ['Carousel', 'Browse grouped content', 'carousel'],
  ['Tooltip', 'Helpful contextual details', 'tooltip'],
  ['Layout', 'Consistent page structure', 'layout'],
];

const stats: Array<[string, string, LucideIcon]> = [
  ['8', 'component families', Blocks],
  ['TypeScript', 'typed APIs', Code2],
  ['Light + dark', 'theme-ready surfaces', Palette],
];

const ComponentsOverview = () => (
  <div className="mx-auto max-w-6xl space-y-14 p-4 sm:p-8">
    <header className="max-w-2xl space-y-4">
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
        style={{
          background: 'var(--surface-strong)',
          color: 'var(--primary-color)',
        }}
      >
        <Blocks size={14} /> EaseUI component library
      </div>
      <h1 className="text-4xl font-bold tracking-[-1.2px] sm:text-6xl">
        Build your interface from better components.
      </h1>
      <p className="text-base leading-7" style={{ color: 'var(--text-muted)' }}>
        Explore reusable React components with familiar APIs, expressive
        variants, and thoughtful interaction states.
      </p>
    </header>

    <section className="grid gap-4 sm:grid-cols-3">
      {stats.map(([value, label, Icon]) => (
        <div
          key={String(label)}
          className="rounded-2xl border p-5"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--surface-color)',
          }}
        >
          <Icon size={18} style={{ color: 'var(--primary-color)' }} />
          <p className="mt-5 text-xl font-bold">{value}</p>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            {label}
          </p>
        </div>
      ))}
    </section>

    <section className="space-y-5">
      <div>
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: 'var(--primary-color)' }}
        >
          Browse components
        </p>
        <h2 className="mt-2 text-2xl font-bold">Choose a starting point</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {components.map(([name, description, slug]) => (
          <Link
            to={`/components/${slug}`}
            key={slug}
            className="group rounded-2xl border p-5 transition hover:-translate-y-1"
            style={{
              borderColor: 'var(--border-color)',
              background: 'var(--surface-color)',
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--primary-color)' }}
              >
                &lt;{name} /&gt;
              </span>
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </div>
            <h3 className="mt-12 text-lg font-bold">{name}</h3>
            <p
              className="mt-2 text-sm leading-6"
              style={{ color: 'var(--text-muted)' }}
            >
              {description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default ComponentsOverview;
