import s from './Cards.module.scss';
import { Card } from './Card/Card.tsx';

export const Cards = () => {
  return (
    <div className={s.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};