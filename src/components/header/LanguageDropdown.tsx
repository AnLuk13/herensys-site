// 'use client';

// import React from 'react';
// import Select from 'react-select';
// import { usePathname, useRouter } from '@/i18n/routing';
// import { useLocale } from 'next-intl';
// import { languages } from '@/lib/consts/common';

// function LanguageDropdown({ isMobileNav }: { isMobileNav: boolean }) {
//   const pathname = usePathname();
//   const locale = useLocale();
//   const router = useRouter();

//   const languageOptions = languages.map(({ value, label, flag }) => ({
//     value,
//     label: (
//       <span
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <img
//           src={flag}
//           alt={label}
//           style={{
//             width: 24,
//             height: 24,
//             borderRadius: '50%',
//             objectFit: 'cover',
//           }}
//         />
//       </span>
//     ),
//   }));

//   const languageStyles = {
//     control: provided => ({
//       ...provided,
//       backgroundColor: 'var(--background)',
//       borderRadius: '99px',
//       padding: 4,
//       display: 'flex',
//       width: 48,
//       boxSizing: 'contain',
//       border: 'none',
//       boxShadow: 'none',
//       '&:hover': {
//         border: 'none',
//         boxShadow: 'none',
//       },
//       '&:focus': {
//         border: 'none',
//         outline: 'none',
//         boxShadow: 'none',
//       },
//       '&:active': {
//         border: 'none',
//         outline: 'none',
//         boxShadow: 'none',
//       },
//     }),
//     menu: provided => ({
//       ...provided,
//       width: 56,
//       padding: 0,
//       ...(isMobileNav && { top: '-140px' }),
//     }),
//     menuList: provided => ({
//       ...provided,
//       width: 56,
//       padding: 0,
//       borderRadius: 4,
//     }),
//     valueContainer: provided => ({
//       ...provided,
//       padding: 0,
//     }),
//     indicatorSeparator: () => ({ display: 'none' }),
//     dropdownIndicator: provided => ({
//       ...provided,
//       color: '#000',
//       padding: 0,
//       '&:hover': {
//         color: '#000',
//         cursor: 'pointer',
//       },
//     }),
//     singleValue: provided => ({
//       ...provided,
//       width: 24,
//       height: 24,
//       display: 'flex',
//       alignItems: 'center',
//       padding: 0,
//       cursor: 'pointer',
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       width: 56,
//       cursor: 'pointer',
//       '&:hover': {
//         backgroundColor: state.isSelected ? {} : 'var(--background)', // Red hover for non-selected items
//       },
//       backgroundColor: state.isSelected ? '#519eff' : 'transparent', // Red hover for non-selected items
//     }),
//   };

//   return (
//     <Select
//       options={languageOptions}
//       styles={languageStyles}
//       defaultValue={languageOptions.find(opt => opt.value === locale)}
//       isSearchable={false}
//       onChange={selected => {
//         router.push(pathname, { locale: selected?.value, scroll: false });
//       }}
//       instanceId="language-select"
//       inputId="language-select"
//       aria-label="Select language"
//     />
//   );
// }

// export default LanguageDropdown;
