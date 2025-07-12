import { Icon } from '@iconify/react';
import type { CollectionEntry } from 'astro:content';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SearchPanel from './SearchPanel';
interface Props {
  posts: CollectionEntry<'blog'>[];
}
const SearchButton = ({ posts }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const openModal = () => setShow(true);
  const closeModal = useCallback(() => setShow(false), []);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === '/') {
        e.preventDefault();
        openModal();
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }, []);
  return (
    <div
      id="search-input"
      className="border-border flex w-1/2 cursor-pointer items-center justify-between rounded-full border-2 bg-transparent px-2 py-1 hover:border-primary max-md:mx-auto"
      onClick={openModal}
    >
      <Icon icon="tabler:search" fontSize={18} className="text-black dark:text-white" />
      <span className="border-border rounded border-2 px-2 text-sm">
        /
      </span>
      {show &&
        createPortal(
          <SearchPanel posts={posts} closeModal={closeModal} />,
          document.body
        )}
    </div>
  );
};
export default SearchButton;
