import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import ComponentLayout from '../layouts/ComponentLayout';
import HomePage from '../pages/HomePage';
import ButtonPage from '../pages/components/ButtonPage';
import CardPage from '@/pages/components/CardPage';
import ModalPage from '@/pages/components/ModalPage';
import InputPage from '@/pages/components/InputPage';
import NavbarPage from '@/pages/components/NavbarPage';
import CarouselPage from '@/pages/components/CarouselPage';
import ToolTipPage from '@/pages/components/ToolTipPage';
import LayoutPage from '@/pages/components/LayoutPage';
import ComponentsOverview from '@/pages/components/ComponentsOverview';

type Props = {};

const AppRouter = ({}: Props) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'components',
          element: <ComponentLayout />,
          children: [
            {
              index: true,
              element: <ComponentsOverview />,
            },
            {
              path: 'button',
              element: <ButtonPage />,
            },
            {
              path: 'card',
              element: <CardPage />,
            },
            {
              path: 'modal',
              element: <ModalPage />,
            },
            {
              path: 'input',
              element: <InputPage />,
            },
            {
              path: 'navbar',
              element: <NavbarPage />,
            },
            {
              path: 'carousel',
              element: <CarouselPage />,
            },
            {
              path: 'tooltip',
              element: <ToolTipPage />,
            },
            {
              path: 'layout',
              element: <LayoutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
