import { NextRequest, NextResponse } from 'next/server';
const locales=['es','en','ay','qu'] as const;
function localeOf(req:NextRequest){const cookie=req.cookies.get('bdp.locale')?.value;if(cookie&&locales.includes(cookie as never))return cookie;const h=(req.headers.get('accept-language')||'').toLowerCase();if(h.startsWith('en'))return'en';if(h.includes('ay'))return'ay';if(h.includes('qu'))return'qu';return'es';}
export function middleware(req:NextRequest){const p=req.nextUrl.pathname;if(locales.some(l=>p===`/${l}`||p.startsWith(`/${l}/`)))return NextResponse.next();const u=req.nextUrl.clone();u.pathname=`/${localeOf(req)}${p==='/'?'':p}`;return NextResponse.redirect(u)}
export const config={matcher:['/((?!_next|api|.*\\..*).*)']};
