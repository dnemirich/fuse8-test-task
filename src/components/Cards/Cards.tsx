import s from './Cards.module.scss';
import { Card } from './Card/Card.tsx';
import { useStore } from '../../store.ts';
import { Pagination } from '@mui/material';
import { type ChangeEvent, useEffect } from 'react';

export const Cards = () => {
  const { characters, charactersFound, currentPage, apiPage, setCurrentPage, setApiPage } = useStore();

  const cardsPerPage = 8;
  const apiPageSize = 20;

  const paginationTotalPages = Math.ceil(charactersFound / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const charactersToShow = characters.slice(startIndex, endIndex);

  useEffect(() => {
    const isNextApiPageNeeded = endIndex > characters.length && apiPage * apiPageSize < charactersFound;
    if (isNextApiPageNeeded) {
      setApiPage(apiPage + 1);
    }
  }, [currentPage, apiPage]);

  const pageChangeHandler = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={s.cardsContainer}>
        {charactersToShow && charactersToShow.map(character => <Card key={character.id} character={character} />)}
      </div>
      {charactersFound > 8 &&
        <Pagination count={paginationTotalPages} page={currentPage} onChange={pageChangeHandler} size={'small'} sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '1.4rem',
            fontFamily: 'Montserrat',
            color: '#282626'
          },
        }} />}
    </>

  );
};