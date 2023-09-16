import React from 'react'
import ContentLoader from 'react-content-loader';
import styles from '../../styles/globals.module.css'

export const SkeletonDashboardPokemon = () => {
  // Puedo pasarle por porps estos valores para hacerlo de manera dinamica?
  // Deberia realizar un componente que contengan todos los skeleton. (Navbar y Layout) 
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

  const rows = 18;
  const columns = 9;
  const coverHeight = 130;
  const coverWidth = 180;
  const padding = 25;
  const speed = 2
  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 95;
  const covers = Array(columns * rows).fill(1);

  return (
    <section className={styles.skeletonContainer}>
      <ContentLoader
        speed={speed}
        backgroundColor="rgba(247, 243, 243, 0.378)"
        foregroundColor="#9e9e9e"
        backgroundOpacity={0.3}
        foregroundOpacity={0.3}
        spacing={10}
        className={styles.skeletonDashboard}
      >
        <rect x="0" y="0" rx="0" ry="0" width={"100vw"} height="50px" />

        {covers.map((g, i) => {
          let vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
          let vx =
            (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
          return (
            <rect
              key={i}
              x={vx}
              y={vy}
              rx="20"
              ry="20"
              width={coverWidth}
              height={coverHeight}
            />
          );
        })}
      </ContentLoader>
    </section>
  );
};