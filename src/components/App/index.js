// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


// == Import
import './styles.css';
import SearchBar from '../SearchBar';
import Message from '../MessageResult';
import RepoResults from '../RepoResults';
import githubLogo from './logo-github.png';
// import cards from '../../data/repos';

const URL = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState('react');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [activePage, setActivePage] = useState(1);

  const fetchCards = () => {
    setLoading(true);
    const filters = `&sort=stars&order=desc&page=${activePage}&per_page=9`;
    axios({
      method: 'get',
      url: `${URL}/${input}${filters}`,
    })
      .then((response) => {
        setCards([...cards, ...response.data.items]);
        const newMessage = `La recherche a généré ${response.data.total_count} résultats`;
        setMessage(newMessage);
      })

      .catch((error) => {
        console.trace(error);
      })

      .finally(() => {
        console.log('finally');
        setLoading(false);
      });
  };

  const handleInputChange = (textSaisi) => {
    setInput(textSaisi);
  };

  const handleFormSubmit = () => {
    fetchCards();
  };

  const handleShowMore = () => {
    setActivePage(activePage + 1);
  };

  useEffect(fetchCards, [activePage]);

  return (
    <div className="app">
      <img src={githubLogo} alt="logo github" />
      <SearchBar
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
        inputValue={input}
        loading={loading}
      />
      <Message message={message} />
      <RepoResults cards={cards} />
      <Button
          fluid
          color="teal"
          icon="plus"
          size="massive"
          content="Afficher plus..."
          onClick={handleShowMore}
          loading={loading}
          disabled={loading}
        />

    </div>
  );
};

// == Export
export default App;
