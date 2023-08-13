import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <nav>
        {type}
        <Switch
          checked={isDark}
          onChange={(e: any) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </nav>
      <h1>Hola Mundo</h1>
    </>
  );
}
