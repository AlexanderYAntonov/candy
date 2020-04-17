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
      const { id, title, fullDescription, imgSrc } = data ? data : {};
      console.log(id);
      console.log(imgSrc);

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
                <Link to="/order">
                  <Button size="small" className={'cardButton'}>
                    Заказать
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </main>

          {/* <main className={'details__container'}>
            <CardMedia
              className={'cardMedia'}
              image={prefix + imgSrc}
              title={title}
            />
            <div>
              <h1>{title}</h1>
              <p>{fullDescription}</p>

              <pre>{JSON.stringify(data)}</pre>
              <Link to="/">Вернуться к выбору тортика</Link>
            </div>
          </main> */}
        </React.Fragment>
      );
    } else {
      return <React.Fragment />;
    }
  }
}
