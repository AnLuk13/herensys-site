// import createMiddleware from 'next-intl/middleware';
// import { routing } from '@/i18n/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// export default createMiddleware(routing);

export function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // matcher: ["/((?!_next/static|favicon.ico|assets).*)"],
  matcher: ['/((?!_next|_vercel|favicon.ico|assets|.*\\..*).*)'],
};
