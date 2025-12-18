type DropdownSelectProps = {
  title: string;
  description?: string;
};

export const DropdownSelect = ({ title, description }: DropdownSelectProps) => (
  <div
    style={{
      height: description ? '' : 'fit-content',
      display: 'flex',
      minHeight: description ? '62px' : '',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: description ? 10 : 0,
      padding: '10px',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'var(--font-family)' }}>
      {title}
    </div>
    {description && (
      <div style={{ fontSize: '12px', fontFamily: 'var(--font-family)' }}>{description}</div>
    )}
  </div>
);
