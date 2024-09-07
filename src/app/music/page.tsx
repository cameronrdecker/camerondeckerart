'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import PrimaryLink from '@/components/links/PrimaryLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4'>Cameron Decker</h1>
          <p className='mt-2 text-sm text-gray-800'>
            Writer, musician, programmer, etc.
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <PrimaryLink href='/about'>About</PrimaryLink>
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <PrimaryLink href='/writing'>Writing</PrimaryLink>
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <PrimaryLink href='/music'>Music</PrimaryLink>
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <PrimaryLink href='/web'>The Web</PrimaryLink>
          </p>

          <footer className='absolute bottom-2 text-gray-700'>
            © Cameron Decker
          </footer>
        </div>
      </section>
    </main>
  );
}
