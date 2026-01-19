'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { phoneInputStyles } from '@/lib/consts/customStyles';

function PhoneInputField({ value, selectedCountry, onChange, hasError = false, id = 'phone', name = 'phone' }: {
  value: string;
  selectedCountry: string;
  onChange: (value: string, country: any) => void;
  hasError?: boolean;
  id?: string;
  name?: string;
}) {
  return (
    <PhoneInput
      country={selectedCountry}
      enableSearch
      {...phoneInputStyles}
      inputProps={{
        id,
        name,
      }}
      containerClass={hasError ? 'phone-input-error' : ''}
      inputClass={hasError ? 'input-error' : ''}
      value={value}
      onChange={(number, country) => onChange(number, country)}
    />
  );
}

export default PhoneInputField;
