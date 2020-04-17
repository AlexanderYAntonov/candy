import React from 'react';
import { Link } from 'react-router-dom';

export class Details extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <main>
          <h1>Страница описания</h1>
          <p>ID: {id}</p>

          <Link to="/">Вернуться к выбору тортика</Link>
        </main>
      </React.Fragment>
    );
  }
}
