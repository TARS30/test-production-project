import { lazy } from 'react';

export const AboutPageLazy = lazy(async () => import('./AboutPage'));

// (async () => await import('./AboutPage'));
