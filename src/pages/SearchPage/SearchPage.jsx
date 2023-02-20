import React from 'react';

const { Container } = require('components/Container/Container');

const SearchPage = () => {
  return (
    <main
      style={{
        minHeight: '70vh',
      }}
    >
      <Container></Container>
    </main>
  );
};

export default React.memo(SearchPage);
