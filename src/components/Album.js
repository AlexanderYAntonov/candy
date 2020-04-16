import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import './Album.css';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'© Домашний кондитер '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Album extends React.Component {
  buildTemplate = () => {
    const { list } = this.props;
    const prefix = '/assets/images/';
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
            <Button size="small" className={'cardButton'}>
              Подробнее
            </Button>
            <Button size="small" className={'cardButton'}>
              Заказать
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  render() {
    return (
      <React.Fragment>
        {/* <CssBaseline /> */}

        <AppBar position="fixed" id={'appbar'}>
          <Toolbar className={'toolbar'}>
            <WhatsappIcon className={'icon'} />
            <Typography variant="h6" color="inherit" noWrap>
              8-913-123-45-67
            </Typography>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <div className={'heroContent'}>
            <div className={'heroButtons'}>
              <Button variant="contained" className={'mainButton'}>
                Заказать
              </Button>
            </div>
          </div>
          <Container className={'cardGrid'} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.buildTemplate()}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={'footer'}>
          {/* <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography> */}
          <Typography variant="subtitle1" align="center" component="p">
            Заказ по телефону - 8-913-123-45-56
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  list: PropTypes.array.isRequired
};

export { Album };
