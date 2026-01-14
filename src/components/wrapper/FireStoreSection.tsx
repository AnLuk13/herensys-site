'use client';

import React from 'react';
import { useApiQuery } from '@/lib/hooks/useRetrieveData';
import { MoonLoader } from 'react-spinners';

type FirestoreSectionProps = {
  route: string;
  Component: React.FC<{ data: any; [key: string]: any }>;
  additionalProps?: Record<string, any>;
};

function FirestoreSection({ route, Component, additionalProps = {} }: FirestoreSectionProps) {
  const { data, isLoading, error } = useApiQuery(route, `${route}`);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80dvh',
          width: '100%',
        }}
      >
        <MoonLoader color="var(--accent)" size={60} />
      </div>
    );
  }

  if (error) {
    console.error(`API error for ${route}:`, error);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50dvh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontWeight: 'bold',
              fontSize: '4rem',
              marginBottom: '0.5rem',
              color: 'var(--accent)',
            }}
          >
            Failed to load content
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '2rem',
              color: 'var(--text-secondary)',
            }}
          >
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return <Component data={data} {...additionalProps} />;
}
export default FirestoreSection;
