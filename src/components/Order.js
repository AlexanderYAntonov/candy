import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css';

export class Order extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className={'order__main'}>
          <h1>Страница заказа</h1>
          <Link to="/">Вернуться к выбору тортика</Link>
        </main>
      </React.Fragment>
    );
  }
}
