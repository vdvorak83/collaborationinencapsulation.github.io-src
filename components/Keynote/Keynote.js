import { Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton, Chip } from 'react-mdl';
import React, { PropTypes } from 'react';
import Link from '../Link';
import s from './Keynote.css';


const Keynote = (props) => {
  const { file, title, tags, description, banner } = props.post;

  return (
    <Card shadow={1} className={s.card}>
      <CardTitle style={{ color: '#fff', height: '176px', background: `rgb(0, 47, 70) url(${banner}) center / cover` }}>
        {title}
      </CardTitle>
      <CardText>
        {description}
      </CardText>
      <CardText>
        {tags.split(/\s/).map(tag => <Chip onClick={() => { alert('Clicked!'); }}>{tag}</Chip>)}
      </CardText>
      <CardActions border>
        <Link to={`/posts/${file}`}><Button ripple colored>More</Button></Link>
      </CardActions>
      <CardMenu style={{ color: '#fff' }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
};

Keynote.propTypes = {
  post: PropTypes.shape({
    file: PropTypes.string,
    html: PropTypes.string,
    title: PropTypes.string,
    banner: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default Keynote;
