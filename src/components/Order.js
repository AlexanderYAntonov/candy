import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Order.css';
import '../styles.css';

export class Order extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className={'order__main'}>
          <div className={'hero-content order__hero'}>
            <div className={'hero-title'}>Как сделать заказ</div>
          </div>
          <Container maxWidth="md" className={'order__container'}>
            <p>
              Чтобы заказать торт, вам нужно написать или позвонить в Whatsapp
              8-913-123-45-67. Мы договоримся о весе торта и сроках его выпечки.
              Вы можете забрать торт по адресу: наш адрес.
            </p>

            <Link to="/" className={'icon-link'}>
              <KeyboardBackspaceIcon className={'icon'} />Вернуться к выбору
              тортика
            </Link>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
