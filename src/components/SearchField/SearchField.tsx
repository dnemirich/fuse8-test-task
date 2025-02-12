import s from './SearchField.module.scss';
import { type ChangeEvent, useEffect } from 'react';
import { api } from '../../api/api.ts';
import { useStore } from '../../store.ts';

export const SearchField = () => {
  const {
    updateCharacters,
    updateLoadingStatus,
    updateSearchQuery,
    searchQuery,
    apiPage,
    setTotalPages,
    charactersFound,
    setCharactersFound,
    hasResults,
    setHasResults,
    setApiPage,
  } = useStore();

  useEffect(() => {
    if (searchQuery.length >= 3) {
      updateCharacters([])
      updateLoadingStatus(true);

      api.getAllCharacters({ name: searchQuery, page: apiPage })
        .then((res) => {
            setCharactersFound(res.data.info.count);
            setTotalPages(res.data.info.pages);
            // updateCharacters([...characters, ...res.data.results]);
          updateCharacters((prev) => [...prev, ...res.data.results]);
            setHasResults(true);
          },
        ).catch((e) => {
        if (e.response.status === 404) {
          setHasResults(true);
          setCharactersFound(0);
          updateCharacters([]);
        }
      })
        .finally(() => updateLoadingStatus(false));
    } else {
      updateCharacters([]);
      setHasResults(false);
      setCharactersFound(0);
      setTotalPages(0)
    }
  }, [searchQuery, apiPage]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.currentTarget.value;
    setApiPage(1);
    if (newQuery !== searchQuery) {
      updateSearchQuery(e.currentTarget.value);
    }
  };

  return (
    <div className={s.searchField}>
      <input type={'text'} placeholder={'Search characters...'} autoFocus={true} className={s.input}
             onChange={changeHandler} value={searchQuery} />
      {hasResults && <span className={s.searchResultText}>Found characters: {charactersFound} </span>}
    </div>
  );
};