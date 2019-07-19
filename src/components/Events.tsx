import React from 'react';
import { Flex, Grid, GridItem } from './Styled';

const Events = ({ events }: any) => (
  <Grid className="event-grid" rows="1fr" columns="1fr" gap=".25rem">
    {events.map((event: any) => (
      <Event key={event.node.title} values={event.node} />
    ))}
  </Grid>
);

const Event = ({ values: { title, date, address } }: any) => (
  <Grid className="event-item" columns="3fr auto" rows="auto">
    <GridItem className="info">
      <h5 className="title">{title}</h5>
      <Flex alignItems="flex-end">
        <span>{address.city}</span>
        <span>{address.street}</span>
      </Flex>
    </GridItem>

    <GridItem textAlign="center" className="date">
      {date}
    </GridItem>
  </Grid>
);

export default Events;
