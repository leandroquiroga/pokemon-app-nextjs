import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Link, Image, Spacer } from "@nextui-org/react";

import { darkTheme, lightTheme } from '../../themes';
import { LogoPokeDark, LogoPokeLigth } from '../../assets';

import styles from "../../styles/globals.module.css";

export const NavBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type, theme } = useTheme();


  const isTheme = (): boolean => type === 'dark';

  return (
    <nav
      className={styles.navbarContainer}
      style={{
        backgroundColor: `${
          isTheme()
            ? darkTheme["colors"].background.value
            : lightTheme["colors"].background.value
        }`,
        color: `${
          isTheme()
            ? darkTheme["colors"].text.value
            : lightTheme["colors"].textNavbar.value
        }`,
      }}>
      {isTheme() ? <LogoPokeLigth /> : <LogoPokeDark />}

      <Spacer x={30} />
      <Switch
        initialChecked
        checked={isDark}
        onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </nav>
  );
}

// {type === "dark" ? (
//   <Image src={logoMoon} alt="logo-dark" />
// ) : (
//   <Image src={logoSun} alt="logo-ligth" />
// )}
// <Switch
//   checked={isDark}
//   onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
// />