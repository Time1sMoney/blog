import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  pathname: string;
}
const menu = [
  {
    title: 'Posts',
    url: '/posts'
  },
  {
    title: 'Tags',
    url: '/tags'
  }
];
const NavMenu: React.FC<Props> = ({ pathname }) => {
  const [show, setShow] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const openMenu = () => {
    setShow((state) => !state);
  };
  const handleClick = () => {
    setShow(false);
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target !== menuContainerRef.current) {
        setShow(false);
      }
    };
    if (maskRef.current) {
      maskRef.current.addEventListener('click', handleClick);
    }
    return () => {
      if (maskRef.current) {
        maskRef.current.removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <>
      <button
        title="menu"
        aria-label="Menu"
        className={`hover:text-primary cursor-pointer hover:scale-110 md:hidden dark:text-slate-300`}
        onClick={openMenu}
      >
        <Icon icon="tabler:menu-2" fontSize={20} />
      </button>
      <div
        ref={maskRef}
        className={`absolute left-0 right-0 top-0 z-[990] mt-[64px] h-full w-full opacity-40 transition-all duration-300 ease-in-out max-sm:bg-black ${
          show ? 'animate-in fade-in block' : 'animate-out fade-out hidden'
        }`}
      ></div>
      <nav
        ref={menuContainerRef}
        className={`max-sm:bg-background flex gap-8 max-sm:absolute max-sm:right-0 max-sm:top-0 max-sm:z-[999] max-sm:mt-[64px] max-sm:flex max-sm:h-full max-sm:flex-col max-sm:gap-2 max-sm:overflow-hidden max-sm:rounded-bl-md max-sm:duration-500 ${
          show ? 'max-sm:w-1/2' : 'max-sm:w-0'
        }`}
      >
        {menu.map((item) => (
          <a
            key={item.url}
            href={item.url}
            className={`hover:text-foreground max-sm:not-last:border-b max-sm:border-border max-sm:flex max-sm:justify-center max-sm:p-4 max-sm:focus:bg-gray-100 ${
              pathname.includes(item.url)
                ? 'decoration-primary text-primary font-extrabold underline decoration-wavy underline-offset-4 max-sm:decoration-transparent'
                : ''
            }`}
            onClick={handleClick}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </>
  );
};
export default NavMenu;
