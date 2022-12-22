import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import MainNavigation from './components/MainNavigation';

import styles from './styles/tailwind.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An error occurred!</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main className="flex flex-col items-center justify-center text-center gap-10 bg-gradient-to-r from-red-500 to-blue-500 h-screen px-20">
          <h1 className="text-4xl font-semibold text-white/75">
            An unexpected error occurred!
          </h1>
          <h6 className="text-xl text-white/75">{error.message}</h6>
          <Link to="/" className="text-white/75 font-semibold">
            Go back to Home!
          </Link>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
