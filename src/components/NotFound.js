import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Container from '@material-ui/core/Container';
import './NotFound.css';
import '../styles.css';

export class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className={'notFound'}>
          <div className={'hero-content not-found__hero'}>
            <div className={'hero-title'}>404</div>
          </div>
          <Container maxWidth="md" className={'order__container'}>
            <h1>Упс, страница не нашлась</h1>
            <Link to="/" className="icon-link">
              <KeyboardBackspaceIcon className={'icon'} />Вернуться к выбору
              тортика
            </Link>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
