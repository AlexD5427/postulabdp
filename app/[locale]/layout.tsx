import {notFound} from 'next/navigation';import type {ReactNode} from 'react';import {locales} from '@/lib/i18n';import type {Locale} from '@/lib/types';import {Providers} from '@/components/Providers';
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:ReactNode,params:Promise<{locale:string}>}){const {locale}=await params;if(!locales.includes(locale as Locale))notFound();return <Providers locale={locale as Locale}>{children}</Providers>}
