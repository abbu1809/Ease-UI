import { Link } from 'react-router';
import { ArrowRight, Search, Sparkles } from 'lucide-react';

const pins = [
  ['Button', 'Actions and states', 'bg-[var(--primary-color)]'],
  ['Card', 'Content containers', 'bg-[var(--surface-strong)]'],
  ['Input', 'Form controls', 'bg-[var(--focus-color)]'],
  ['Modal', 'Focused decisions', 'bg-[var(--text-color)]'],
  ['Navbar', 'Page navigation', 'bg-[var(--surface-strong)]'],
  ['Carousel', 'Content browsing', 'bg-[var(--primary-color)]'],
];

const principles = [
  [
    '01',
    'Build from primitives',
    'Start with polished buttons, inputs, cards, and layouts instead of rebuilding them from scratch.',
  ],
  [
    '02',
    'Compose with confidence',
    'Consistent variants, states, and spacing make every component feel like part of the same system.',
  ],
  [
    '03',
    'TypeScript first',
    'Clear APIs and familiar props make each component easy to learn, extend, and ship.',
  ],
];

function ComponentSpecimen({ name, tone }: { name: string; tone: string }) {
  return (
    <div
      className="flex h-full min-h-28 flex-col justify-between p-4"
      style={{ background: 'var(--surface-color)' }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          &lt;{name} /&gt;
        </span>
        <span className={`h-2 w-2 rounded-full ${tone}`} />
      </div>
      <div className="mt-6 space-y-2">
        <div
          className="h-2 w-3/4 rounded-full"
          style={{ background: 'var(--surface-strong)' }}
        />
        <div
          className="h-2 w-1/2 rounded-full"
          style={{ background: 'var(--surface-strong)' }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
              style={{
                background: 'var(--surface-strong)',
                color: 'var(--primary-color)',
              }}
            >
              <Sparkles size={14} /> A thoughtful UI library
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-[-1.2px] sm:text-6xl lg:text-[70px]">
              Build better interfaces, one component at a time.
            </h1>
            <p
              className="mt-6 max-w-lg text-base leading-7"
              style={{ color: 'var(--text-muted)' }}
            >
              EaseUI is a curated React component library for building
              expressive, accessible, production-ready interfaces faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/components"
                className="inline-flex h-10 items-center gap-2 rounded-2xl px-5 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: 'var(--primary-color)' }}
              >
                Explore components <ArrowRight size={16} />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-2xl px-5 text-sm font-bold transition hover:bg-(--surface-strong)"
                style={{
                  background: 'var(--surface-soft)',
                  color: 'var(--text-color)',
                }}
              >
                View on GitHub
              </a>
            </div>
            <div
              className="mt-12 flex items-center gap-3 text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              <Search size={17} /> Browse buttons, cards, inputs, modals, and
              more
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {pins.slice(0, 5).map(([name, label, tone]) => (
              <div
                key={name}
                className="overflow-hidden rounded-2xl border"
                style={{
                  borderColor: 'var(--border-color)',
                  background: 'var(--surface-soft)',
                }}
              >
                <ComponentSpecimen name={name} tone={tone} />
                <span
                  className="block px-4 pb-4 text-xs font-bold"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="border-y px-6 py-16 sm:px-10"
          style={{
            borderColor: 'var(--border-color)',
            background: 'var(--surface-color)',
          }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--primary-color)' }}
                >
                  Explore the library
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-1.2px]">
                  Components for your next build
                </h2>
              </div>
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                style={{ background: 'var(--surface-soft)' }}
              >
                View all components <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pins.map(([name, label, tone]) => (
                <Link
                  to={`/components/${name.toLowerCase()}`}
                  key={`${name}-tile`}
                  className="group overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: 'var(--border-color)',
                    background: 'var(--surface-soft)',
                  }}
                >
                  <div className="transition duration-300 group-hover:bg-[var(--surface-strong)]">
                    <ComponentSpecimen name={name} tone={tone} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{name}</h3>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map(([number, title, description]) => (
              <article
                key={number}
                className="border-t pt-5"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: 'var(--primary-color)' }}
                >
                  {number}
                </p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10">
          <div
            className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-4xl px-8 py-12 sm:flex-row sm:items-center sm:px-12"
            style={{
              background: 'var(--text-color)',
              color: 'var(--surface-color)',
            }}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--primary-color)' }}
              >
                Start building
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-1px]">
                Your next interface starts here.
              </h2>
            </div>
            <Link
              to="/components"
              className="inline-flex h-10 items-center gap-2 rounded-2xl px-5 text-sm font-bold text-white"
              style={{ background: 'var(--primary-color)' }}
            >
              Browse components <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
