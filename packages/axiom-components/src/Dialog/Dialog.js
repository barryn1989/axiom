import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Modal from '../Modal/Modal';
import './Dialog.css';

export default class Dialog extends Component {
  static propTypes = {
    /** Content inside the Dialog */
    children: PropTypes.node,
    /** Control for the Dialog stretching to the windows size */
    fullscreen: PropTypes.bool,
    /** Visibility toggle for the Dialog */
    isOpen: PropTypes.bool.isRequired,
    /** Callback for closing the Dialog by clicking on the overlay */
    onRequestClose: PropTypes.func.isRequired,
    /** Overlay shade */
    overlayShade: PropTypes.oneOf([
      'shade-1',
      'shade-2',
      'shade-3',
      'shade-4',
    ]),
    /** Theme applied to the overlay */
    overlayTheme: PropTypes.oneOf(['day', 'night']),
    /** Maximum size of the Dialog */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Theme of the dialog */
    theme: PropTypes.oneOf(['day', 'night']),
  };

  static defaultProps = {
    size: 'small',
    theme: 'day',
  };

  static childContextTypes = {
    onRequestClose: PropTypes.func.isRequired,
  };

  getChildContext() {
    return {
      onRequestClose: this.props.onRequestClose,
    };
  }

  render() {
    const {
      children,
      size,
      fullscreen,
      onRequestClose,
      overlayShade,
      overlayTheme,
      theme,
      ...rest
    } = this.props;

    const classes = classnames('ax-dialog', {
      'ax-dialog--fullscreen': fullscreen,
      [`ax-dialog--${size}`]: !fullscreen && size,
    });

    return (
      <Modal { ...rest }
          onOverlayClick={ onRequestClose }
          overlayShade={ overlayShade }
          overlayTheme={ overlayTheme }>
        <Base className={ classes } theme={ theme }>
          { children }
        </Base>
      </Modal>
    );
  }
}
