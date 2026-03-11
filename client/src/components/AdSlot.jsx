/* File: client/src/components/AdSlot.jsx - Shared AdSense slot wrapper */
import { useEffect } from 'react';

const ADSENSE_CLIENT_ID = 'ca-pub-5520257741352291';

const AdSlot = ({ slot, format = 'auto', layout, className = '' }) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('AdSense slot could not be initialised', error);
    }
  }, [slot]);

  const adAttributes = {
    'data-ad-client': ADSENSE_CLIENT_ID,
    'data-ad-slot': slot,
    'data-full-width-responsive': 'true',
  };

  if (format) {
    adAttributes['data-ad-format'] = format;
  }
  if (layout) {
    adAttributes['data-ad-layout'] = layout;
  }

  return (
    <aside className={`flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Sponsored</span>
      <ins className="adsbygoogle block w-full" style={{ display: 'block' }} {...adAttributes} />
      <p className="text-[11px] text-slate-500">
        Ad revenue sustains our infrastructure and helps us deliver enterprise-grade link intelligence at no cost to you.
      </p>
    </aside>
  );
};

export default AdSlot;
