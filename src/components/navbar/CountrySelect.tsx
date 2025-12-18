export const CountrySelect = ({
  ComponentSVG,
  label,
}: {
  ComponentSVG: React.FC;
  label: string;
}) => (
  <div
    style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '172px',
      height: '182px',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        borderRadius: '10px 10px 0 0',
        padding: '10px',
        width: '172px',
        height: '145px',
        borderBottom: '1px solid #ccc',
        boxSizing: 'border-box',
      }}
    >
      <ComponentSVG />
    </div>
    <div
      style={{
        fontFamily: 'var(--font-family)',
        fontWeight: 700,
        fontSize: '14px',
        color: '#000',
        height: '37px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {label}
    </div>
  </div>
);
