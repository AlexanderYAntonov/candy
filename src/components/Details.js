import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import './Details.css';
export class Details extends React.Component {
  render() {
    const { data } = this.props;
    if (data) {
      const { title, fullDescription, imgSrc } = data ? data : {};

      const prefix = '/candy/assets/images/';
      return (
        <React.Fragment>
          <main className={'details__container'}>
            <Card className={'details__card'}>
              <CardMedia
                className={'details__image'}
                image={prefix + imgSrc}
                title={title}
              />
              <div className={'details__text'}>
                <CardContent className={'details__content'}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    className={'details__title'}
                  >
                    {title}
                  </Typography>
                  <Typography className={'details__description'}>
                    {fullDescription}
                  </Typography>
                </CardContent>
                <CardActions className={'details__actions'}>
                  <Link to="/">
                    <Button size="small" className={'details__card-btn'}>
                      Назад
                    </Button>
                  </Link>
                  <Link to="/order">
                    <Button size="small" className={'details__card-btn'}>
                      Заказать
                    </Button>
                  </Link>
                </CardActions>
              </div>
            </Card>
          </main>
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}
