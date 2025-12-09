import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('mx-auto max-w-[1280px] max-[460px]:justify-center max-md:p-4 max-[460px]:flex-wrap  max-xl:p-5' , className)}>{children}</div>;
};