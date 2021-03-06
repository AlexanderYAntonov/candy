import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './ScrollButton.scss';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  componentDidMount() {
    const arrowTop = window.document.getElementById('scroll-top-button');
    window.addEventListener('scroll', function() {
      arrowTop.hidden = window.pageYOffset === 0;
    });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        id="scroll-top-button"
        title="Наверх"
        className={'scroll'}
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <ExpandLessIcon className={'scroll-top__icon'} />
      </button>
    );
  }
}

export { ScrollButton };
