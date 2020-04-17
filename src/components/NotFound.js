import React from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className={'notFound'}>
          <h1>404 - упс, страница не нашлась</h1>
          <Link to="/">Вернуться к выбору тортика</Link>
        </main>
      </React.Fragment>
    );
  }
}
