'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { phoneInputStyles } from '@/lib/consts/customStyles';

function PhoneInputField({ value, selectedCountry, onChange }: {
  value: string;
  selectedCountry: string;
  onChange: (value: string, country: any) => void;
}) {
  return (
    <PhoneInput
      country={selectedCountry}
      enableSearch
      {...phoneInputStyles}
      value={value}
      onChange={(number, country) => onChange(number, country)}
    />
  );
}

export default PhoneInputField;
