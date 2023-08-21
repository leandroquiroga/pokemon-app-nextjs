import React from 'react';
import Head from 'next/head';

import { LayoutProps } from '../../interfaces/index';
import { NavBar } from '../index';

import styles from "../../styles/globals.module.css";

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Leandro Quiroga" />
        <meta name="description" content="Informacion sobre pokemones" />
        <meta
          name="keywords"
          content="Pokedex, Next.js, Typescript, Pokemon, App, React.js"
        />
      </Head>

      <NavBar />
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};
