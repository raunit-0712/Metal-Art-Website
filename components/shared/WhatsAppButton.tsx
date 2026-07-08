'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/config/contact';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [activeDivision, setActiveDivision] = useState<'steel' | 'art'>('steel');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const categoryParam = searchParams.get('category');

      if (pathname?.startsWith('/art-gallery') || categoryParam === 'art') {
        setActiveDivision('art');
      } else if (pathname?.startsWith('/steel-works') || categoryParam === 'steel') {
        setActiveDivision('steel');
      } else {
        setActiveDivision('steel');
      }
    }
  }, [pathname]);

  const currentContact = CONTACT[activeDivision];
  const whatsappUrl = `https://wa.me/${currentContact.whatsapp}?text=${encodeURIComponent(currentContact.whatsappMessage)}`;

  return (
    <>
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .whatsapp-float {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          whatsapp-float
          fixed bottom-6 right-6 z-50
          group
          flex items-center
          rounded-full
          bg-[#1C1C1C]
          text-[#B08D57]
          shadow-[0_8px_30px_rgba(37,211,102,0.45)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]
        "
      >
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center">
          <MessageCircle size={26} />
        </div>

        {/* Tooltip Text */}
        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap
            pr-0
            transition-all
            duration-500
            group-hover:max-w-[220px]
            group-hover:pr-5
          "
        >
          Chat with us instantly
        </span>

        {/* Pulse Ring */}
        <span
          className="
            absolute
            inset-0
            -z-10
            rounded-full
            bg-[#B08D57]
            opacity-30
            animate-ping
          "
        />
      </a>
    </>
  );
}