import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const roleProtectedRoutes: Record<string, readonly string[]> = {
  "/admin": ["admin"],
  "/editor": ["admin", "editor"],
};

function matchesRoute(pathname: string, route: string) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const shouldCheckAuth = requireAuth.some((route) =>
      matchesRoute(pathname, route),
    );

    if (shouldCheckAuth) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        const Url = new URL("/auth/login", req.url);
        Url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(Url);
      }

      const protectedRoute = Object.entries(roleProtectedRoutes).find(
        ([route]) => matchesRoute(pathname, route),
      );

      if (protectedRoute) {
        const [, allowedRoles] = protectedRoute;

        if (!allowedRoles.includes(token.role as string)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}
