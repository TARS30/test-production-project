import { DropdownDirection } from '../../../types/ui';
import styles from './popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,
};
