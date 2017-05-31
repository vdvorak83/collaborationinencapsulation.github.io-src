/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {
  static propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    const { title, background } = this.props;

    return (
      <header
        className={`mdl-layout__header mdl-layout__header--scroll ${s.header} ${background ? s.banner : ''}`} ref={node => (this.root = node)}
        style={{ background: this.props.background }}
      >
        {
          title && (
            <h1 className={s.name}>
              {title}
            </h1>
          )
        }
        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to="/">
            coinen.io
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
