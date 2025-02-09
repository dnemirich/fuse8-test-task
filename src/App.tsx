import './App.css';
import { SearchField } from './components/SearchField/SearchField.tsx';
import { Cards } from './components/Cards/Cards.tsx';
import { LinearProgress } from '@mui/material';
import { useStore } from './store.ts';

export function App() {
  const { isLoading } = useStore();
  return (
    <>
      {isLoading && <LinearProgress sx={{ color: '#656ec2' }} />}
      <main>
        <h1>Find a character from Rick and Morty series</h1>
        <div className={'container'}>
          <div className={'wrapper'}>
            <SearchField />
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
}


