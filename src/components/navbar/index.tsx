import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Spacer } from "@nextui-org/react";
import { Button } from '@nextui-org/button'

import { darkTheme, lightTheme } from '../../themes';
import { LogoPokeDark, LogoPokeLigth, LogoMoon, LogoSun } from '../../assets';

import styles from "../../styles/globals.module.css";

export const NavBar = () => {
  const { setTheme, theme } = useNextTheme();
  const { isDark, type } = useTheme();

  const isTheme = (): boolean => type === 'dark';
  const handleChangeTheme = () => setTheme(!isDark ? "dark" : "light");

  return (
    <nav
      className={styles.navbarContainer}
      style={{
        backgroundColor: `${
          isTheme()
            ? darkTheme["colors"].primary.value
            : lightTheme["colors"].primary.value
        }`,
        color: `${
          isTheme()
            ? darkTheme["colors"].text.value
            : lightTheme["colors"].textNavbar.value
        }`,
      }}>
      {isTheme() ? <LogoPokeLigth /> : <LogoPokeDark />}

      <Spacer x={30} />

      <Button
        isIconOnly
        onClick={handleChangeTheme}
        value={theme}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}>
        {isTheme() ? <LogoSun /> : <LogoMoon />}
      </Button>
    </nav>
  );
}
{/* <Switch
  initialChecked
  checked={isDark}
  onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
/> */}

// {type === "dark" ? (
//   <Image src={logoMoon} alt="logo-dark" />
// ) : (
//   <Image src={logoSun} alt="logo-ligth" />
// )}
// <Switch
//   checked={isDark}
//   onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
// />