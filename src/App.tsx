import './App.css';
import { SearchField } from './components/SearchField/SearchField.tsx';
import { Cards } from './components/Cards/Cards.tsx';

export function App() {


  return (
    <main>
      <div className={"container"}>
        <div className={"wrapper"}>
          <SearchField />
          <Cards/>
        </div>
      </div>
    </main>
  );
}


