import Head from 'next/head';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ThemeToggleButton from './ThemeToggleButton'; // BU IMPORT EKSİKTİ
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'Sentiric Platform' }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sentiric Communication OS" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      {/* <html> tag'ine dark class'ı ThemeContext tarafından eklendiği için,
          body ve altındaki tüm elemanlar artık dark: ön ekini kullanabilir.
          Ana arkaplan rengini globals.css'e taşıdık. */}
      <div>
        {/* Mobil için kapalı (off-canvas) menü */}
        {sidebarOpen && (
           <div className="relative z-50 lg:hidden" role="dialog" aria-modal="true">
             <div className="fixed inset-0 bg-gray-900/80 transition-opacity ease-linear duration-300" />
             <div className="fixed inset-0 flex">
               <div className="relative mr-16 flex w-full max-w-xs flex-1">
                 <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                   <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                     <span className="sr-only">Close sidebar</span>
                     <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                   </button>
                 </div>
                 <Sidebar />
               </div>
             </div>
           </div>
        )}

        {/* Masaüstü için statik Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>

        {/* Mobil için üst bar ve ana içerik alanı */}
        <div className="lg:pl-72">
          {/* Mobil için "Hamburger" ikonunu içeren yapışkan üst bar */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            
            {/* Dikey ayırıcı */}
            <div className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden" aria-hidden="true" />
            
            {/* Üst barın sağ tarafı için bir konteyner */}
            <div className="flex flex-1 items-center justify-end gap-x-4 self-stretch lg:gap-x-6">
               <ThemeToggleButton />
            </div>

          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}