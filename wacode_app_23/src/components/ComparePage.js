import { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { TextField, List, ListItem, ListItemText } from '@mui/material/';
import { db } from '../config/firebase';
import Menu from "./MainDropMenu";


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
      <Menu className="absolute top-5 left-5" />
      <p className="text-xl font-bold mb-5">Compare Your Lifestyle Impact to Others!</p>
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