import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkIcon from '@/shared/assets/icons/DarkIcon.svg?react';
import LightIcon from '@/shared/assets/icons/LightIcon.svg?react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
export default ThemeSwitcher;
