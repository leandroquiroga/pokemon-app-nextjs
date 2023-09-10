import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Spacer, Link, Text } from "@nextui-org/react";
import { Button } from '@nextui-org/button'
import NextLink from 'next/link'

import { darkTheme, lightTheme } from '../../themes';
import { LogoPokeDark, LogoPokeLigth, LogoMoon, LogoSun } from '../../assets';

import styles from "../../styles/globals.module.css";

export const NavBar = () => {
  const { setTheme, theme } = useNextTheme();
  const { isDark, type } = useTheme();

  const isTheme = (): boolean => type === "dark";
  const handleChangeTheme = () => setTheme(!isDark ? "dark" : "light");

  return (
    <nav
      className={styles.navbarContainer}
      style={{
        backgroundColor: `${
          isTheme()
            ? darkTheme["colors"].backgroundNavbar.value
            : lightTheme["colors"].backgroundNavbar.value
        }`,
        color: `${
          isTheme()
            ? darkTheme["colors"].text.value
            : lightTheme["colors"].textNavbar.value
        }`,
      }}>
      {isTheme() ? <LogoPokeLigth /> : <LogoPokeDark />}
      <NextLink href="/" passHref>
        <Link>
          <Text h4>Pokemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1}} />

      <Button
        isIconOnly
        onClick={handleChangeTheme}
        value={theme}
        className={styles.buttonNavBarContainer}>
        {isTheme() ? <LogoSun /> : <LogoMoon />}
      </Button>
      <NextLink href="/favorites" passHref>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </nav>
  );
};