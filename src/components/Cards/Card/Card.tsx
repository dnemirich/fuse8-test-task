import s from './Card.module.scss';

export const Card = () => {
  return (
    <div className={s.card}>
      <h2 className={s.cardTitle}>Stair Goblin - Mythological Creature</h2>
      <div className={s.supportInfo}>
        <span className={s.status}>Status: <span className={s.alive}>Alive</span></span>
        <span className={s.date}>Created: 04.11.2017</span>
      </div>
    </div>
  );
};