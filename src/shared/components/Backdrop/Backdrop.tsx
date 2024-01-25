'use client';

import { useEffect, useRef, useState } from 'react';

type BackdropProps = {
  displayBackdrop?: string;
};

export default function Backdrop({ displayBackdrop }: BackdropProps) {
  const [backdropVisible, setBackdropVisible] = useState(true);

  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (displayBackdrop === 'visible') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [displayBackdrop]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (backdropRef.current === (event.target as Node)) {
        setBackdropVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    (backdropVisible && (
      <div
        ref={backdropRef}
        className={`${displayBackdrop} w-full h-full bg-neutral-400 opacity-50 fixed top-0 left-0 z-10`}
      ></div>
    )) ||
    null
  );
}
