import styles from '@/styles/globals/buildDreamTeam.module.scss';

interface RoleCardProps {
  title: string;
  subtitle: string;
  roles: string[];
  IconComponent: React.ElementType;
  isList?: boolean;
}

function RoleCard({ title, subtitle, roles, IconComponent, isList = true }: RoleCardProps) {
  return (
    <div className="card">
      <div className={styles.roleContent}>
        <div className={`${styles.roleContent} ${styles.roleContentRow}`}>
          <IconComponent />
          <h3 className={styles.roleTitle}>{title}</h3>
          {subtitle && <p className={styles.roleSubtitle}>{subtitle}</p>}
        </div>
        {isList ? (
          <ul className={styles.roleList}>
            {roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.roleDescription}>{roles[0]}</p>
        )}
      </div>
    </div>
  );
}

export default RoleCard;
