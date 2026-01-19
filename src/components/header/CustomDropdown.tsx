'use client';

import React from 'react';
import Select from 'react-select';
import { customDropdownStyles } from '@/lib/consts/customStyles';
import type { Option } from '@/lib/consts/types';
import { useRouter } from 'next/navigation';

type CustomDropdownProps = {
  options: Option[];
  defaultValue: Option;
  isCountry?: boolean;
};

function CustomDropdown({ options, defaultValue, isCountry = false }: CustomDropdownProps) {
  const router = useRouter();

  const formatOptionLabel = (option: Option) => {
    // Check if label is a React element
    if (React.isValidElement(option.label)) {
      return option.label;
    }
    // Check if label is a string containing HTML tags
    if (typeof option.label === 'string' && option.label.includes('<')) {
      return (
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          dangerouslySetInnerHTML={{ __html: option.label }}
        />
      );
    }
    return option.label;
  };

  return (
    <Select
      aria-label="Navigate to section"
      options={options}
      styles={customDropdownStyles(isCountry)}
      value={defaultValue}
      // defaultValue={defaultValue}
      onChange={selected => {
        if (!selected) return;
        router.push(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/${selected?.value}`);
      }}
      formatOptionLabel={formatOptionLabel}
      components={{
        IndicatorSeparator: null,
      }}
      isSearchable={false}
      instanceId="nav-select"
    />
  );
}

export default CustomDropdown;
