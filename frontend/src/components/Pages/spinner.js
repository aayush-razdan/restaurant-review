import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreedingSpinner = styled.div`
  height: ___CSS_0___px;
  width: ___CSS_1___px;
  position: relative;
  transform: rotate(45deg);

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: calc(___CSS_2___px / 7.5);
    width: calc(___CSS_3___px / 7.5);
    animation-duration: ___CSS_4___ms;
    top: calc(___CSS_5___px / 2.3077);
    left: calc(___CSS_6___px / 2.3077);
    background-color: ___CSS_7___;
    position: absolute;
    animation-iteration-count: infinite;
  }

  .rhombus:nth-child(2n + 0) {
    margin-right: 0;
  }

  .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(___CSS_8___ms * 1);
  }

  .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(___CSS_9___ms * 2);
  }

  .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(___CSS_10___ms * 3);
  }

  .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(___CSS_11___ms * 4);
  }

  .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(___CSS_12___ms * 5);
  }

  .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(___CSS_13___ms * 6);
  }

  .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(___CSS_14___ms * 7);
  }

  .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(___CSS_15___ms * 8);
  }

  .rhombus.big {
    height: calc(___CSS_16___px / 3);
    width: calc(___CSS_17___px / 3);
    animation-duration: ___CSS_18___ms;
    top: calc(___CSS_19___px / 3);
    left: calc(___CSS_20___px / 3);
    background-color: ___CSS_21___;
    animation: breeding-rhombus-spinner-animation-child-big
      ___CSS_22___ infinite;
    animation-delay: 0.5s;
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
`;

const propTypes = {
  size: PropTypes.number,
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  size: 150,
  color: '#fff',
  animationDuration: 2000,
  className: '',
};

function generateRhombusChildren(num) {
  return Array.from({ length: num }).map((val, index) => (
    <div key={index} className={`rhombus child-${index + 1}`} />
  ));
}

const BreedingRhombusSpinner = ({
  size,
  color,
  animationDuration,
  className,
  style,
  ...props
}) => (
  <BreedingSpinner
    size={size}
    color={color}
    animationDuration={animationDuration}
    className={`breeding-rhombus-spinner${className ? ' ' + className : ''}`}
    style={style}
    delayModifier={animationDuration * 0.05}
    {...props}
  >
    {generateRhombusChildren(8)}
    <div className="rhombus big" />
  </BreedingSpinner>
);

BreedingRhombusSpinner.propTypes = propTypes;
BreedingRhombusSpinner.defaultProps = defaultProps;

export default BreedingRhombusSpinner;