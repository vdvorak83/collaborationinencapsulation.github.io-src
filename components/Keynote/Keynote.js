import { Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton, Chip } from 'react-mdl';
import React, { PropTypes } from 'react';
import s from './Keynote.css';


const Keynote = (props) => {
  const { title, tags, description } = props.post;

  return (
    <Card shadow={1} className={s.card}>
      <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>
        {title}
      </CardTitle>
      <CardText>
        {description}
      </CardText>
      <CardText>
        {tags.split(/\s/).map(tag => <Chip onClick={() => { alert('Clicked!'); }}>{tag}</Chip>)}
      </CardText>
      <CardActions border>
        <Button colored>More</Button>
      </CardActions>
      <CardMenu style={{ color: '#fff' }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
};

Keynote.propTypes = {
  post: PropTypes.shape({
    html: PropTypes.string,
    title: PropTypes.number,
    description: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default Keynote;
