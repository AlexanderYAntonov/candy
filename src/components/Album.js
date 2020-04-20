import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Album.css';
import '../styles.css';

class Album extends React.Component {
  buildTemplate = () => {
    const { list } = this.props;
    const prefix = '/candy/assets/images/';
    return list.map((card) => (
      <Grid
        item
        key={card.id}
        xs={12}
        sm={12}
        md={6}
        xl={4}
        className={'albumGrid'}
      >
        <Card className={'card'}>
          <CardMedia
            className={'cardMedia'}
            image={prefix + card.imgSrc}
            title={card.title}
          />
          <CardContent className={'cardContent'}>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              className={'cardTitle'}
            >
              {card.title}
            </Typography>
            <Typography className={'cardText'}>
              {card.shortDescription}
            </Typography>
          </CardContent>
          <CardActions className={'cardActions'}>
            <Link to={'/details/' + card.id}>
              <Button size="small" className={'cardButton'}>
                Подробнее
              </Button>
            </Link>
            <Link to="/order">
              <Button size="small" className={'cardButton'}>
                Заказать
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <main>
          <div className={'hero-content'}>
            <div className={'heroButtons'}>
              <Link to="/order">
                <Button variant="contained" className={'mainButton'}>
                  Заказать
                </Button>
              </Link>
            </div>
            <div className={'hero-title'}>
              Домашний кондитер - выпечка на заказ
            </div>
          </div>
          <Container className={'cardGrid'} maxWidth="md">
            <Grid container spacing={4}>
              {this.buildTemplate()}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  list: PropTypes.array.isRequired
};

export { Album };
