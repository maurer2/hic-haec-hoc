'use client'

import React, { useState, type PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient()); // prevent shared client/state

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}