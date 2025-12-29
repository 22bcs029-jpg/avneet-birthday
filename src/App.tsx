import { useState } from 'react';
import PasswordEntry from './components/PasswordEntry';
import BirthdayWebsite from './components/BirthdayWebsite';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <>
      {!isUnlocked ? (
        <PasswordEntry onCorrectPassword={() => setIsUnlocked(true)} />
      ) : (
        <BirthdayWebsite />
      )}
    </>
  );
}

export default App;
