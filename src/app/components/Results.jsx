import React from 'react';
import Card from './Card';

export default function Results({ results }) {
  return (
    <div className='sm:grid sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto gap-6'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
