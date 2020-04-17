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
        this.setState({ isLoading: false, list: data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, list: [] });
      });
  }

  DetailsWrapper = (props) => {
    const { id } = props.match.params;
    const { list } = this.state;
    const data = list.filter((item) => item.id === id);

    return <Details data={data[0]} key={id} />;
  };

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

        <div className={'switch'}>
          <Switch>
            <Route exact path="/" render={() => <Album list={list} />} />
            {/* <Route
              path="/details/:id"
              render={(props) => <Details {...props} list={list} />}
            /> */}
            <Route path="/details/:id" component={this.DetailsWrapper} />
            <Route path="/order" component={Order} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <footer className={'footer'}>
          <Typography
            variant="subtitle1"
            align="center"
            component="p"
            className={'footerText'}
          >
            <WhatsappIcon className={'icon'} /> 8-913-123-45-56
          </Typography>
          <Copyright />
        </footer>
      </div>
    );
  }
}

export default App;
