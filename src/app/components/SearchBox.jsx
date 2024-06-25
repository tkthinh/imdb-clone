'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search/${search}`);
  }

  return (
    <form
      className='flex justify-between mx-auto px-5 max-w-7xl'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Search keyword...'
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className='text-amber-600 disabled:text-gray-400'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}
