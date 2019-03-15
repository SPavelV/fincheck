import React from 'react';
import Link from '../components/router/Link';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Страница не найдена :(</h2>
      <Link to="/">
        <button>Перейти на главную</button>
      </Link>
    </div>
  )
}

export default NotFound;