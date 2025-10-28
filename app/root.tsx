// app/root.tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./app.css";

// This is the default root layout for the Remix app
export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg" href="/images/matat logo title.png" />
        <Meta />
        <Links />
      </head>
      <body className="font-[Poppins] bg-white text-gray-900">
        {/* This is where all our pages (home, article, etc.) will render */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
