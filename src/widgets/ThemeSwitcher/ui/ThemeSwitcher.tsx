import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import { Button, ThemeButton } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";
import DarkIcon from "shared/assets/icons/theme_dark.svg";
import LightIcon from "shared/assets/icons/theme_Light.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
export default ThemeSwitcher;
