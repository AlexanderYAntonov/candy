import React from 'react';
import './App.css';
import { Album } from './components/Album';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import AppBar from '@material-ui/core/AppBar';
import { Switch, Route } from 'react-router-dom';
import { Details } from './components/Details';
import { NotFound } from './components/NotFound';
import { Order } from './components/Order';

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

class App extends React.Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount() {
    const url = '/candy/assets/json/cakesList.json';
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ isLoading: false, list: data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, list: [] });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <AppBar position="fixed" id={'appbar'}>
          <Toolbar className={'toolbar'}>
            <WhatsappIcon className={'icon'} />
            <Typography variant="h6" color="inherit" noWrap>
              8-913-123-45-67
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/" render={() => <Album list={list} />} />
          <Route path="/details/:id" component={Details} />
          <Route path="/order" component={Order} />
          <Route component={NotFound} />
          {/* <Album list={list} /> */}
        </Switch>

        <footer className={'footer'}>
          {/* <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography> */}
          <Typography variant="subtitle1" align="center" component="p">
            Заказ по телефону - 8-913-123-45-56
          </Typography>
          <Copyright />
        </footer>
      </div>
    );
  }
}

export default App;
