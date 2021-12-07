import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonAdd = props => {
  const { color, content, inverted } = props;
  return (
    <Button circular inverted={inverted} color={color} content={content}/>
  );
};

export { ButtonAdd };


