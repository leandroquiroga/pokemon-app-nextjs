import React from 'react';
import Head from 'next/head';
import { useTheme } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/themes";

import { LayoutProps } from '../../interfaces/index';
import { NavBar } from '../index';

import styles from "../../styles/globals.module.css";

// URL origin
const baseURL = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { isDark } = useTheme();
  
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Leandro Quiroga" />
        <meta name="description" content="Informacion sobre pokemones" />
        <meta
          name="keywords"
          content="Pokedex, Next.js, Typescript, Pokemon, App, React.js"
        />
        <meta
          property="og:title"
          content={`Informacion sobre ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${baseURL}/img/banner.png`}
        />
      </Head>

      <NavBar />
      <main
        className={styles.mainContainer}
        style={{
          backgroundColor: `${
            isDark
              ? darkTheme["colors"].background.value
              : lightTheme["colors"].background.value
          }`,
        }}>
        {children}
      </main>
    </>
  );
};
