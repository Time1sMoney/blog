import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
const BackToTop = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 800) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <button
      id="back-to-top"
      aria-label="Back to Top"
      className={`hover:border-accent hover:text-accent fixed bottom-10 right-40 rounded-full border-2 border-dashed bg-background p-2 max-md:hidden ${
        isShow ? 'visible' : 'invisible'
      }`}
      onClick={handleClick}
    >
      <Icon icon="tabler:arrow-big-up" fontSize={20} />
    </button>
  );
};
export default BackToTop;
