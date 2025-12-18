// import createMiddleware from 'next-intl/middleware';
// import { routing } from '@/i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

// export default createMiddleware(routing);

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // matcher: ["/((?!_next/static|favicon.ico|assets).*)"],
  matcher: ['/((?!_next|_vercel|favicon.ico|assets|.*\\..*).*)'],
};
