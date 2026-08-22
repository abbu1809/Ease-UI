# EaseUI

EaseUI is a React and TypeScript component library for building expressive, accessible interfaces quickly. This repository includes a Vite-powered documentation site with live previews, usage examples, API tables, light and dark themes, and interactive component demos.

## Features

- Reusable React components with typed props
- Light and dark theme support
- Button variants, sizes, entrance animations, and hover animations
- Flexible cards with image ratios, variants, and GSAP interactions
- Modal overlays with configurable actions and sizes
- Standard and specialized input components
- Carousel with navigation controls and optional autoplay
- Tooltip with hover and focus support
- Layout primitive for sidebar, header, and content areas
- Documentation pages with copyable code examples
- Tailwind CSS styling with Class Variance Authority

## Component Catalog

The documentation site currently includes:

- `Button`
- `Card`
- `Modal`
- `Input`
- `Navbar`
- `Carousel`
- `Tooltip`
- `Layout`

Input variants are also available: `AnimatedInput`, `FloatingLabelInput`, `InputWithIcon`, `PasswordInput`, `NumberInput`, and `Textarea`.

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Start the documentation site

```bash
npm run dev
```

Open the local URL printed by Vite. The main documentation entry point is `/components`.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Using Components

Components can be imported from the package entry point:

```tsx
import { Button, Card, Input } from 'dev-ease-ui';
import 'dev-ease-ui/style.css';

export function Example() {
  return (
    <Card title="Welcome" description="A reusable EaseUI card.">
      <Input label="Email" placeholder="you@example.com" />
      <Button className="mt-4" variant="primary">
        Continue
      </Button>
    </Card>
  );
}
```

During local development, components can also be imported directly from the source tree:

```tsx
import { Button } from '@/components/Button/Button';
```

## Documentation Routes

| Route                  | Component                  |
| ---------------------- | -------------------------- |
| `/components`          | Component library overview |
| `/components/button`   | Button                     |
| `/components/card`     | Card                       |
| `/components/modal`    | Modal                      |
| `/components/input`    | Input and input variants   |
| `/components/navbar`   | Navbar                     |
| `/components/carousel` | Carousel                   |
| `/components/tooltip`  | Tooltip                    |
| `/components/layout`   | Layout                     |

Each component page includes a live usage preview, a code example, and an API reference table.

## Theme Support

The documentation site stores the selected theme in `localStorage` and applies it to the root document through the `data-theme` attribute:

```html
<html data-theme="dark"></html>
```

Theme tokens are defined in `src/index.css`. The available modes are `light` and `dark`.

## Project Structure

```text
src/
├── components/       Reusable UI components
├── features/         Redux theme state
├── layouts/          Home and documentation layouts
├── libs/             Utilities and animation helpers
├── pages/            Landing page and component documentation
├── router/           Application routes
└── store/            Redux store configuration
```

## Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the Vite development server                       |
| `npm run build`   | Create the production bundle and generate library types |
| `npm run preview` | Preview the production bundle locally                   |

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit and React Redux
- React Router
- Lucide React
- GSAP
- Radix Slot
- Class Variance Authority

## License

This project is released under the MIT License.
