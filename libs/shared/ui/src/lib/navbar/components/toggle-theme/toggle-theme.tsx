import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from '@k-workspace/shared/context';

export function ToggleTheme() {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      type="button"
      className="group flex h-6 w-6 items-center justify-center "
      onClick={changeTheme}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-darkIcon" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  );
}

export default ToggleTheme;
