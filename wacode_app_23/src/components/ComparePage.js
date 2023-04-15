import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { TextField, List, ListItem, ListItemText } from '@mui/material/';
import { db } from '../config/firebase';

function ComparePage() {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('city', '==', searchValue));
    const querySnapshot = await getDocs(q);
    const queryResults = querySnapshot.docs.map((doc) => doc.data());
    setResults(queryResults);
  };

  return (
    <div style={{ paddingTop: '50px' }}>
      <TextField
        label="Search by city"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <List>
        {results.map((result, index) => (
          <ListItem key={index}>
            <ListItemText primary={result.name} secondary={result.city} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ComparePage;