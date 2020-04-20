import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

export const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>title</Card.Header>
        <Card.Meta>
          <span className="date">date</span>
        </Card.Meta>
        <Card.Description>description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
