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
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h4>Keynotes</h4>
        <Grid className="demo-grid-ruler">
          <Cell col={6}>
            <Card shadow={0} >
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>Welcome</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button colored>More</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>

        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
