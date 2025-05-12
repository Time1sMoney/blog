import type { CollectionEntry } from 'astro:content';
/**
 * Get latest item of collection
 * @param collection
 * @param num
 * @returns
 */
export function getLatestItem(
  collection: CollectionEntry<'blog'>[],
  num: number
) {
  if (num > collection.length) return collection;
  collection.sort(
    (a, b) => b.data.pubDateTime.getTime() - a.data.pubDateTime.getTime()
  );
  return collection.slice(0, num);
}
/**
 * Sortings collection
 * @param collection
 * @param order
 * @returns
 */
export function getSortedCollection(
  collection: CollectionEntry<'blog'>[],
  order: 'asc' | 'desc' = 'desc'
) {
  const sortedCollection = [...collection].sort((a, b) => {
    if (order === 'asc') {
      return a.data.pubDateTime.getTime() - b.data.pubDateTime.getTime();
    }
    return b.data.pubDateTime.getTime() - a.data.pubDateTime.getTime();
  });
  return sortedCollection;
}
