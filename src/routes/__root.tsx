import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useLayoutEffect, type ReactNode } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

import appCss from "../styles.css?url";
import { FloatingContact } from "../components/floating-contact";

function NotFoundComponent() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1">404</h1>
      <h2>الصفحة غير موجودة</h2>
      <p>عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
      <a href="/" className="btn btn-primary">العودة للرئيسية</a>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="container py-5 text-center">
      <h1 className="h3">حدث خطأ ما</h1>
      <p>نعتذر عن هذا الخلل. يمكنك المحاولة مرة أخرى.</p>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="btn btn-primary me-2"
      >
        إعادة المحاولة
      </button>
      <a href="/" className="btn btn-outline-secondary">العودة للرئيسية</a>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "شبكة التشييد للمقاولات العامة" },
      { name: "description", content: "شبكة التشييد للمقاولات العامة - مكة المكرمة | نظافة، مكافحة حشرات، تبريد، تكييف، مظلات" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/favicon/apple-touch-icon.png" },
      { rel: "manifest", href: "/favicon/site.webmanifest" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/alyamama/index.css"
      }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <FloatingContact />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
