import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer mx-4 my-2 rounded-lg sm:shadow-md sm:border sm:border-slate-400'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https:image.tmdb.org/t/p/original${result.poster_path}`}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-60 transition-opacity'
          alt={result.title || result.original_name}
        />
        <div className=''>
          <h2 className='text-lg font-bold text-amber-500 truncate mx-1'>{result.title || result.original_name}</h2>
          <p className='line-clamp-2 mx-1'>{result.overview}</p>
          <div className='flex items-center mx-1'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='h-5 mx-2'/>
            {result.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
}
