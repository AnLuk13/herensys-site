import React from 'react';

export type NavTab = {
  type: 'link' | 'dropdown' | string;
  label: string;
  href?: string; // Only for 'link'
  defaultValue?: Option; // Only for 'dropdown'
  options?: Option[]; // Only for 'dropdown'
  isCountry?: boolean; // Only for 'dropdown'
};

export type Option = {
  value: string;
  label: string | React.ReactNode;
};
