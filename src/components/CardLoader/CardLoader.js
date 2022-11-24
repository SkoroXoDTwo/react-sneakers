import React from 'react';
import './CardLoader.scss';
import ContentLoader from 'react-content-loader';

const CardLoader = () => {
  return (
    <article className='card'>
      <ContentLoader
        speed={2}
        width={150}
        height={214}
        viewBox="0 0 150 214"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="81" />
        <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="129" rx="3" ry="3" width="90" height="15" />
        <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
        <rect x="114" y="154" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>
    </article>
  )
}

export default CardLoader;
