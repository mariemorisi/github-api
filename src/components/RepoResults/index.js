import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import './style.css';

const RepoResults = ({ cards }) => (
  <Card.Group itemsPerRow="3">
    {
        cards.map((card) => (
          <Card
            className="cards"
            key={card.id}
            image={card.owner.avatar_url}
            header={card.name}
            meta={card.owner.login}
            description={card.description ? card.description : ''}
          />
        ))
      }
  </Card.Group>
);

RepoResults.protoTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      id: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default RepoResults;
