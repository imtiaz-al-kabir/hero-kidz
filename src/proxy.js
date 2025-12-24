import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privateRoute = ["/cart", "/checkout"];
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req,secret:process.env.NEXTAUTH_SECRET });
  const isAuthenticate = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  const isPrivateReq = privateRoute.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  if (!isAuthenticate && isPrivateReq) {


    return NextResponse.redirect(new URL(`/login?callbackUrl=${reqPath}`, req.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/cart/:path*", "/checkout/:path*"],
};
