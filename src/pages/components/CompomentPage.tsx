import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Search,
  Copy,
  Check,
  ChevronRight,
  ExternalLink,
  Code2,
} from 'lucide-react';

type ThemeState = {
  theme: {
    mode: 'light' | 'dark';
  };
};

const componentList = [
  {
    name: 'Button',
    slug: 'button',
    description:
      'Buttons allow users to perform actions and make choices with a single click.',
  },
  {
    name: 'Card',
    slug: 'card',
    description:
      'Cards are flexible containers for grouping related information and actions.',
  },
  {
    name: 'Modal',
    slug: 'modal',
    description:
      'Modals display important content or actions that require user attention.',
  },
  {
    name: 'Input',
    slug: 'input',
    description:
      'Inputs allow users to enter and edit information using familiar form controls.',
  },
  {
    name: 'Navbar',
    slug: 'navbar',
    description:
      'Navigation bars provide users with access to the main sections of an application.',
  },
  {
    name: 'Carousel',
    slug: 'carousel',
    description:
      'Carousels allow users to browse through a collection of content.',
  },
  {
    name: 'Tooltip',
    slug: 'tooltip',
    description:
      'Tooltips provide additional information when users hover over an element.',
  },
  {
    name: 'Layout',
    slug: 'layout',
    description:
      'Layout components provide consistent structure and spacing for your application.',
  },
];

export default function Components() {
  const { mode } = useSelector((state: ThemeState) => state.theme);

  const isDark = mode === 'dark';

  const [selectedComponent, setSelectedComponent] = useState('button');

  const [search, setSearch] = useState('');

  const [copied, setCopied] = useState(false);

  const selected = componentList.find(
    (component) => component.slug === selectedComponent
  );

  const filteredComponents = componentList.filter((component) =>
    component.name.toLowerCase().includes(search.toLowerCase())
  );

  const copyCode = async () => {
    await navigator.clipboard.writeText(getCode(selectedComponent));

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-[#080808] text-white' : 'bg-white text-zinc-900'
      }`}
    >
      {/* ================================================= */}
      {/* DOCUMENTATION LAYOUT */}
      {/* ================================================= */}

      <div className="mx-auto flex max-w-[1500px]">
        {/* ================================================= */}
        {/* SIDEBAR */}
        {/* ================================================= */}

        <aside
          className={`sticky top-0 hidden h-[calc(100vh-80px)] w-[250px] shrink-0 border-r px-6 py-8 lg:block ${
            isDark ? 'border-white/[0.07]' : 'border-zinc-200'
          }`}
        >
          {/* Sidebar title */}

          <div className="mb-7">
            <p
              className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? 'text-white/30' : 'text-zinc-400'
              }`}
            >
              Components
            </p>

            <p
              className={`mt-2 text-xs ${
                isDark ? 'text-white/25' : 'text-zinc-400'
              }`}
            >
              Build your interface
            </p>
          </div>

          {/* Search */}

          <div className="relative mb-6">
            <Search
              className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${
                isDark ? 'text-white/30' : 'text-zinc-400'
              }`}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={`w-full rounded-lg border py-2 pl-9 pr-3 text-sm outline-none transition ${
                isDark
                  ? 'border-white/10 bg-white/[0.03] text-white placeholder:text-white/25 focus:border-orange-500/40'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500/40'
              }`}
            />
          </div>

          {/* Component list */}

          <div className="space-y-1">
            {filteredComponents.map((component) => {
              const active = selectedComponent === component.slug;

              return (
                <button
                  key={component.slug}
                  onClick={() => setSelectedComponent(component.slug)}
                  className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    active
                      ? isDark
                        ? 'bg-orange-500/10 font-medium text-orange-400'
                        : 'bg-orange-500/10 font-medium text-orange-600'
                      : isDark
                        ? 'text-white/45 hover:bg-white/[0.04] hover:text-white'
                        : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  <span>{component.name}</span>

                  {active && <ChevronRight className="h-3.5 w-3.5" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-14">
          {/* Breadcrumb */}

          <div
            className={`mb-8 flex items-center gap-2 text-xs ${
              isDark ? 'text-white/30' : 'text-zinc-400'
            }`}
          >
            <span>Components</span>

            <ChevronRight className="h-3 w-3" />

            <span className={isDark ? 'text-white/60' : 'text-zinc-600'}>
              {selected?.name}
            </span>
          </div>

          {/* Component heading */}

          <div className="mb-10">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {selected?.name}
              </h1>

              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                  isDark
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-green-500/10 text-green-600'
                }`}
              >
                Stable
              </span>
            </div>

            <p
              className={`mt-3 max-w-2xl text-sm leading-6 ${
                isDark ? 'text-white/45' : 'text-zinc-500'
              }`}
            >
              {selected?.description}
            </p>
          </div>

          {/* ================================================= */}
          {/* PREVIEW */}
          {/* ================================================= */}

          <section>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">Preview</h2>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? 'text-white/30' : 'text-zinc-400'
                  }`}
                >
                  Interactive component preview
                </p>
              </div>
            </div>

            <div
              className={`relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl border ${
                isDark
                  ? 'border-white/[0.08] bg-[#0d0d0d]'
                  : 'border-zinc-200 bg-zinc-50'
              }`}
            >
              {/* Preview grid */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: isDark
                    ? 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)'
                    : 'linear-gradient(rgba(0,0,0,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.5) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Actual preview */}

              <Preview component={selectedComponent} isDark={isDark} />
            </div>
          </section>

          {/* ================================================= */}
          {/* CODE */}
          {/* ================================================= */}

          <section className="mt-12">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">Usage</h2>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? 'text-white/30' : 'text-zinc-400'
                  }`}
                >
                  Copy and use this component in your project.
                </p>
              </div>

              <button
                onClick={copyCode}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                  isDark
                    ? 'border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.07] hover:text-white'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Code block */}

            <div
              className={`overflow-hidden rounded-xl border ${
                isDark
                  ? 'border-white/[0.08] bg-[#0d0d0d]'
                  : 'border-zinc-200 bg-zinc-50'
              }`}
            >
              <div
                className={`flex items-center gap-2 border-b px-4 py-3 ${
                  isDark ? 'border-white/[0.07]' : 'border-zinc-200'
                }`}
              >
                <Code2 className="h-3.5 w-3.5 text-orange-500" />

                <span
                  className={`text-xs ${
                    isDark ? 'text-white/35' : 'text-zinc-400'
                  }`}
                >
                  {selected?.name}.tsx
                </span>
              </div>

              <pre className="overflow-x-auto p-5 text-sm leading-7">
                <code className={isDark ? 'text-white/70' : 'text-zinc-600'}>
                  {getCode(selectedComponent)}
                </code>
              </pre>
            </div>
          </section>

          {/* ================================================= */}
          {/* NEXT COMPONENT */}
          {/* ================================================= */}

          <div
            className={`mt-16 flex justify-end border-t pt-8 ${
              isDark ? 'border-white/[0.07]' : 'border-zinc-200'
            }`}
          >
            <button
              onClick={() => {
                const currentIndex = componentList.findIndex(
                  (item) => item.slug === selectedComponent
                );

                const next = componentList[currentIndex + 1];

                if (next) {
                  setSelectedComponent(next.slug);
                }
              }}
              className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                isDark
                  ? 'border-white/10 hover:bg-white/[0.04]'
                  : 'border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              <div>
                <p
                  className={`text-[10px] uppercase tracking-wider ${
                    isDark ? 'text-white/25' : 'text-zinc-400'
                  }`}
                >
                  Next component
                </p>

                <p className="mt-1 text-sm font-medium">
                  {getNextComponent(selectedComponent)}
                </p>
              </div>

              <ChevronRight className="h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================================================= */
/* PREVIEW COMPONENT */
/* ================================================= */

function Preview({
  component,
  isDark,
}: {
  component: string;
  isDark: boolean;
}) {
  switch (component) {
    /* ---------------- BUTTON ---------------- */

    case 'button':
      return (
        <div className="relative z-10 flex flex-wrap justify-center gap-3">
          <button className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600">
            Primary
          </button>

          <button
            className={`rounded-lg border px-5 py-2.5 text-sm font-medium ${
              isDark
                ? 'border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]'
                : 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            Secondary
          </button>

          <button
            className={`rounded-lg px-5 py-2.5 text-sm font-medium ${
              isDark ? 'bg-white text-black' : 'bg-zinc-900 text-white'
            }`}
          >
            Solid
          </button>

          <button className="rounded-lg px-5 py-2.5 text-sm font-medium text-orange-500 hover:bg-orange-500/10">
            Ghost
          </button>
        </div>
      );

    /* ---------------- CARD ---------------- */

    case 'card':
      return (
        <div
          className={`relative z-10 w-[300px] rounded-xl border p-5 shadow-xl ${
            isDark ? 'border-white/10 bg-[#151515]' : 'border-zinc-200 bg-white'
          }`}
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Project Card</h3>

              <p className="mt-1 text-xs text-zinc-400">Updated recently</p>
            </div>
          </div>

          <p className="text-sm leading-6 text-zinc-500">
            A simple card component for displaying related content and actions.
          </p>

          <button className="mt-5 w-full rounded-lg bg-orange-500 py-2 text-xs font-semibold text-white">
            View project
          </button>
        </div>
      );

    /* ---------------- MODAL ---------------- */

    case 'modal':
      return (
        <div
          className={`relative z-10 w-[320px] rounded-xl border p-6 shadow-2xl ${
            isDark ? 'border-white/10 bg-[#151515]' : 'border-zinc-200 bg-white'
          }`}
        >
          <h3 className="text-base font-semibold">Delete project?</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            This action cannot be undone. Are you sure you want to continue?
          </p>

          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-lg border border-zinc-200 px-4 py-2 text-xs font-medium dark:border-white/10">
              Cancel
            </button>

            <button className="rounded-lg bg-red-500 px-4 py-2 text-xs font-medium text-white">
              Delete
            </button>
          </div>
        </div>
      );

    /* ---------------- INPUT ---------------- */

    case 'input':
      return (
        <div className="relative z-10 w-[320px]">
          <label className="mb-2 block text-sm font-medium">
            Email address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className={`w-full rounded-lg border px-4 py-3 text-sm outline-none ${
              isDark
                ? 'border-white/10 bg-white/[0.04] text-white placeholder:text-white/25'
                : 'border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400'
            }`}
          />

          <p className="mt-2 text-xs text-zinc-400">
            We'll never share your email.
          </p>
        </div>
      );

    /* ---------------- NAVBAR ---------------- */

    case 'navbar':
      return (
        <div
          className={`relative z-10 flex w-[420px] items-center justify-between rounded-xl border px-5 py-3 ${
            isDark ? 'border-white/10 bg-[#151515]' : 'border-zinc-200 bg-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-orange-500" />

            <span className="text-sm font-semibold">EaseUi</span>
          </div>

          <div className="flex items-center gap-5 text-xs text-zinc-400">
            <span>Components</span>
            <span>About</span>
            <span>Templates</span>
          </div>
        </div>
      );

    /* ---------------- CAROUSEL ---------------- */

    case 'carousel':
      return (
        <div
          className={`relative z-10 w-[350px] overflow-hidden rounded-xl border ${
            isDark ? 'border-white/10 bg-[#151515]' : 'border-zinc-200 bg-white'
          }`}
        >
          <div className="flex h-32 items-center justify-center bg-orange-500/10">
            <div className="text-center">
              <p className="text-xs text-orange-500">SLIDE 01</p>

              <h3 className="mt-2 font-semibold">Beautiful interfaces</h3>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 p-3">
            <span className="h-1.5 w-5 rounded-full bg-orange-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-white/20" />
          </div>
        </div>
      );

    /* ---------------- TOOLTIP ---------------- */

    case 'tooltip':
      return (
        <div className="relative z-10">
          <div className="mb-3 rounded-lg bg-zinc-900 px-3 py-2 text-xs text-white shadow-xl dark:bg-white dark:text-black">
            This is a tooltip
          </div>

          <button className="mx-auto block rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-medium text-white">
            Hover me
          </button>
        </div>
      );

    /* ---------------- LAYOUT ---------------- */

    case 'layout':
      return (
        <div className="relative z-10 grid w-[350px] grid-cols-[80px_1fr] gap-2">
          <div className="h-36 rounded-lg bg-orange-500/10" />

          <div className="space-y-2">
            <div className="h-8 rounded-lg bg-orange-500/20" />

            <div className="grid grid-cols-2 gap-2">
              <div className="h-24 rounded-lg bg-zinc-200 dark:bg-white/10" />

              <div className="h-24 rounded-lg bg-zinc-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ================================================= */
/* CODE */
/* ================================================= */

function getCode(component: string) {
  switch (component) {
    case 'button':
      return `<Button variant="primary">
  Click me
</Button>`;

    case 'card':
      return `<Card>
  <CardHeader>
    <CardTitle>Project</CardTitle>
  </CardHeader>

  <CardContent>
    Your content goes here.
  </CardContent>
</Card>`;

    case 'modal':
      return `<Modal
  open={open}
  onClose={() => setOpen(false)}
>
  <ModalTitle>
    Delete project?
  </ModalTitle>

  <ModalActions />
</Modal>`;

    case 'input':
      return `<Input
  label="Email address"
  placeholder="you@example.com"
/>`;

    case 'navbar':
      return `<Navbar>
  <NavbarBrand>EaseUi</NavbarBrand>
  <NavbarLinks />
</Navbar>`;

    case 'carousel':
      return `<Carousel>
  <CarouselItem>
    Content
  </CarouselItem>

  <CarouselItem>
    Content
  </CarouselItem>
</Carousel>`;

    case 'tooltip':
      return `<Tooltip content="This is a tooltip">
  <Button>
    Hover me
  </Button>
</Tooltip>`;

    case 'layout':
      return `<Layout>
  <Sidebar />
  <MainContent />
</Layout>`;

    default:
      return '';
  }
}

/* ================================================= */
/* NEXT COMPONENT */
/* ================================================= */

function getNextComponent(current: string) {
  const index = componentList.findIndex((item) => item.slug === current);

  return componentList[index + 1]?.name ?? componentList[0].name;
}
