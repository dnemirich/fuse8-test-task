import s from './SearchField.module.scss';

export const SearchField = () => {
  return (
    <div className={s.searchField}>
      <input type={'text'} placeholder={'Search characters...'} autoFocus={true} className={s.input}/>
      <span className={s.searchResultText}>Found characters: 8</span>
    </div>

  )
}