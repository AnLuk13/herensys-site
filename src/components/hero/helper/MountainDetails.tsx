import MountainIcon from '../../svg-icons/hero/MountainIcon';

function MountainDetails() {
  return (
    <div
      style={{
        width: '100%',
        height: '100px',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <MountainIcon
        styles={{
          width: '100%',
          top: '50%',
          transform: 'translate(0%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
        }}
      />
    </div>
  );
}

export default MountainDetails;
