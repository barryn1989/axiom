import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addDisplayName, addPropTypes, addClassName } from '../../utils/components';

export class CardListItem extends Component {
  static propTypes = {
    children: { node: true },
  };

  render() {
    const { className, children } = this.props;
    const classes = classnames(className, 'ax-card__list-item');

    return (
      <li {...this.props} className={classes}>
        {children}
      </li>
    );
  }
}

export default enhance(CardListItem)(
  addDisplayName('CardListItem'),
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);