import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';
// import { useParams } from 'react-router-dom';

export function useProductSearch() {
  // use params dind't work here :(
  const { search } = window.location;
  const searchTerm = new URLSearchParams(search).get('q');
  const page = new URLSearchParams(search).get('page') || 1;
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchParam, setSearch] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getSearch() {
      try {
        console.log(searchTerm, page);
        setSearch({ data: {}, isLoading: true });
        const endpoint = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "product")]]'
        )}&q=${encodeURIComponent(
          `[[fulltext(document, "${searchTerm}")]]`
        )}&lang=en-us&page=${page}&pageSize=20`;
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });
        const data = await response.json();

        setSearch({ data, isLoading: false });
      } catch (err) {
        setSearch({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getSearch();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return searchParam;
}
