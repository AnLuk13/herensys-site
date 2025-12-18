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
    // Check if label contains HTML tags
    if (option.label && option.label.includes('<')) {
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
      options={options}
      styles={customDropdownStyles(isCountry)}
      value={defaultValue}
      defaultValue={defaultValue}
      onChange={selected => {
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
