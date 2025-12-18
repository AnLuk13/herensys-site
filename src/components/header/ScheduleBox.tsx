import type { CSSProperties } from 'react';
import React from 'react';
import styles from '@/app/styles/header/heading.module.scss';

interface ScheduleBoxProps {
  styleProps?: CSSProperties | undefined;
  title: string;
  weekdays: string;
  saturday: string;
}

function ScheduleBox({ styleProps, title, weekdays, saturday }: ScheduleBoxProps) {
  return (
    <div className={styles.scheduleBox} style={styleProps}>
      <div className={styles.scheduleTitle}>{title}</div>
      <div className={styles.scheduleTextBox}>
        <div className={styles.scheduleText}>{weekdays}</div>
        <div className={styles.scheduleText}>{saturday}</div>
      </div>
    </div>
  );
}

export default ScheduleBox;
