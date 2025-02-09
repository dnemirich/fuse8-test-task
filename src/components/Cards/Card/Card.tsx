import s from './Card.module.scss';
import type { CharacterType } from '../../../api/api.ts';
import { formatDate } from '../../../utils/formatDate.ts';

type PropsType = { character: CharacterType }

export const Card = (props: PropsType) => {
  const { character } = props;
  const formattedDate = formatDate(character.created);

  return (
    <div className={s.card}>
      <h2 className={s.cardTitle}>{character.name}</h2>
      <div className={s.supportInfo}>
        <span className={s.status}>Status: <span
          className={character.status === 'Alive' ? s.alive : character.status === 'Dead' ? s.dead : ''}>{character.status}</span></span>
        <span className={s.date}>Created: {formattedDate}</span>
      </div>
    </div>
  );
};