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
import Layout from '../../components/Layout';
import s from './styles.css';

class Post extends React.Component {
  static propTypes = {
    file: PropTypes.string,
    html: PropTypes.string,
    title: PropTypes.string,
    banner: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string,
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { file, html, title, banner, tags } = this.props;
    const 
    return (
      <Layout className={s.content}>
        <h1>{title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    );
  }

}

export default Post;
