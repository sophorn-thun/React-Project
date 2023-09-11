import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import type { Info } from '../components/Pagination/Pagination';

export interface ArtProps {
  id?: number;
  title?: string;
  image_id?: string;
  date_start?: number;
  artist_id?: number;
  artist_title?: string;
  artwork_type_title?: string;
  style_title?: string;
  classification_title?: string;
  place_of_origin?: string;
}

export interface ApiResponse {
  data: ArtProps[];
  info?: Info;
}

export type SortType = 'date' | 'title' | 'artist' | null;
export type ArtworkType = 'Painting' | 'Sculpture' | 'Print' | null;

function useArtWork(
  searchTerm: string = '',
  size: number = 12,
  sortType: SortType = null,
  artworkType: ArtworkType = null,
  page: number = 1,
) {
  const endpoint = `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(
    searchTerm,
  )}&size=${size}&page=${page}&fields=id,title,image_id,date_start,artist_id,artist_title,artwork_type_title,style_title,classification_title`;

  const { data, isLoading, isError, error } = useFetch<ApiResponse>(endpoint);

  const [sortedData, setSortedData] = useState<ArtProps[]>([]);

  useEffect(() => {
    if (data) {
      let processedData = [...data.data];

      // Filtering based on artwork type
      switch (artworkType) {
        case 'Painting':
          processedData = processedData.filter((item) => item.artwork_type_title === 'Painting');
          break;
        case 'Sculpture':
          processedData = processedData.filter((item) => item.artwork_type_title === 'Sculpture');
          break;
        case 'Print':
          processedData = processedData.filter((item) => item.artwork_type_title === 'Print');
          break;
        default:
          break;
      }

      // Sorting on the data
      switch (sortType) {
        case 'date':
          processedData.sort((a, b) => (b.date_start || -Infinity) - (a.date_start || -Infinity));
          break;
        case 'title':
          processedData.sort((a, b) => a.title?.localeCompare(b.title || '') || 0);
          break;
        case 'artist':
          processedData.sort((a, b) => a.artist_title?.localeCompare(b.artist_title || '') || 0);
          break;
        default:
          break;
      }

      setSortedData(processedData);
    }
  }, [data, sortType, artworkType]);

  return { data: sortedData, info: data?.info, isLoading, isError, error };
}

export default useArtWork;
