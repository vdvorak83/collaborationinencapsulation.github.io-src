/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Posts from '../posts';
import s from './styles.css';
import history from '../history';

class Post extends React.Component {
  constructor() {
    super();

    this.state = Posts.find(/^\/posts\/(.*?)$/.exec(history.location.pathname)[1]);

    if (!this.state) {
      const error = new Error('Page not found');

      error.status = 404;

      throw error;
    }
  }
  componentDidMount() {
    document.title = this.state.title;
  }

  render() {
    const { html, title, banner } = this.state;

    return (
      <Layout className={s.content} header={{ background: `rgba(20, 67, 90, 0.3) url(${banner}) center / cover`, title }}>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    );
  }

}

export default Post;
