export const customDropdownStyles = (isCountry = false) => ({
  //style for the dropdown  control (the box that shows the selected value)
  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
    fontSize: 16,
    backgroundColor: 'transparent',
    fontFamily: 'var(--font-family)',
    fontWeight: 400,
    // color: 'var(--black)',
    display: 'flex',
    border: 'none',
    boxShadow: state.isFocused ? 'none' : 'none',
    cursor: 'pointer',
    '&:hover': {
      // border: 'none',
      boxShadow: 'none',
    },
    '&:focus': {
      // border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      // border: 'none',
      outline: 'none',
      boxShadow: 'none',
    },
  }),
  //style for the dropdown
  menu: (provided: any) => ({
    ...provided,
    padding: '10px',
    width: isCountry ? 'fit-content' : 357, //max-content
    boxSizing: 'border-box',
    left: '50%',
    transform: 'translate(-50%, -4px)',
    outline: '1px solid #ccc',
    borderRadius: 8,
    // display: 'flex',
    // justifyContent: 'center',
    top: '60px',
  }),
  //style for the list that holds all options
  menuList: (provided: any) => ({
    ...provided,
    width: isCountry ? 'fit-content' : 337,
    maxHeight: 'fit-content',
    borderRadius: 8,
    display: 'flex',
    flexDirection: isCountry ? 'row' : 'column',
    alignItems: 'center',
    gap: isCountry ? 20 : 0,
    padding: 0,
  }),
  //style for the container that holds the value
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: 'var(--black)',
    padding: 0,
    '&:hover': {
      color: 'var(--black)',
      cursor: 'pointer',
    },
  }),
  //style for the selected value
  singleValue: (provided: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    cursor: 'pointer',
    color: 'var(--black)',
  }),
  //style for each option in the dropdown
  option: (provided: any, state: any) => ({
    ...provided,
    cursor: 'pointer',
    fontFamily: 'var(--font-family)',
    fontWeight: 400,
    boxSizing: 'border-box',
    width: isCountry ? 172 : 337, //new
    height: isCountry ? 182 : 'auto',
    padding: 0,
    borderBottom: !isCountry ? '1px solid #ccc' : 'none',
    backgroundColor: state.isSelected ? 'var(--gray-background)' : 'transparent',
    '&:hover': {
      // color: 'var(--black)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  }),
});

export const phoneInputStyles = {
  inputStyle: {
    fontFamily: 'var(--font-family)',
    fontSize: 16,
    padding: '10px 20px 10px 70px',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    transition: 'border-color 0.3s ease',
    outline: 'none',
    height: 44,
    // maxWidth: 300,
    width: '100%',

    '&::placeholder': {
      color: 'var(--white)',
    },

    '&:focus': {
      borderColor: 'var(--black)',
    },

    '&.inputError': {
      borderColor: '#e74c3c',
    },
  },
  buttonStyle: {
    borderRadius: '8px 0 0 8px',
    padding: '10px',
    background: 'var(--white)',
    border: '1px solid #e0e0e0',
  },
  dropdownStyle: {
    left: 0,
    top: 49,
    width: 300,
    background: 'var(--white)',
  },
  searchStyle: {
    maxWidth: 300,
    width: '100%',
    background: 'var(--white)',
    fontSize: '16px',
    fontFamily: 'var(--font-family)',
  },
};
