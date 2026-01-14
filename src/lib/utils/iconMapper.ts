import RecruitmentIcon from '@/components/svg-icons/details/RecruitmentIcon';
import BPOIcon from '@/components/svg-icons/details/BPOIcon';
import EORIcon from '@/components/svg-icons/details/EORIcon';
import ConsultingIcon from '@/components/svg-icons/details/ConsultingIcon';
import OrangeCircleIcon from '@/components/svg-icons/details/OrangeCircleIcon';
import OrangeTriangleIcon from '@/components/svg-icons/details/OrangeTriangleIcon';
import OrangeRectangularIcon from '@/components/svg-icons/details/OrangeRectangularIcon';

const iconMap = {
  recruitment: RecruitmentIcon,
  bpo: BPOIcon,
  eor: EORIcon,
  consulting: ConsultingIcon,
  circle: OrangeCircleIcon,
  triangle: OrangeTriangleIcon,
  rectangular: OrangeRectangularIcon,
} as const;

export type IconType = keyof typeof iconMap;

export function getIconComponent(iconType: IconType) {
  return iconMap[iconType];
}

export function mapCardsWithIcons<T extends { icon: string }>(
  cards: T[],
): Array<T & { IconComponent: React.ComponentType }> {
  return cards.map(card => ({
    ...card,
    IconComponent: getIconComponent(card.icon as IconType),
  }));
}
