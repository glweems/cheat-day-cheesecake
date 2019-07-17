import React from 'react';
import styled from 'styled-components';
import { Flex, Grid, GridItem } from './Styled';

const EventGrid = styled(Grid)`
  background: ${props => props.theme.colors.light};
  /* border: 1px solid black; */
  .info {
    padding: 0.25rem 1rem;
  }
  .title {
    margin-bottom: 0.125rem;
    padding: 0;
    font-size: 1.5rem;
  }
  .date {
    margin: 0;
    margin-right: 1rem;
    padding: 1rem;
    font-size: 2rem;
    background: white;
    border-top: 3px solid ${props => props.theme.colors.light};
    border-bottom: 3px solid ${props => props.theme.colors.light};
    border-radius: 0.25rem;
  }
`;

const Event = ({
  values: { title, date, address },
}: {
  values: CheesecakeEvent;
}) => (
  <EventGrid columns="3fr 10rem" rows="auto">
    <GridItem className="info">
      <h4 className="title">{title}</h4>
      <Flex alignItems="flex-end">
        <span>{address.city}</span>
        <span>{address.street}</span>
      </Flex>
    </GridItem>

    <GridItem textAlign="center" className="date">
      {date}
    </GridItem>
  </EventGrid>
);

const StyledEvents = styled.div`
  max-width: 98%;
  margin: 0 auto;
`;

export default ({ events }: { events: QueryNode<CheesecakeEvent>[] }) => (
  <StyledEvents>
    <h3>Upcoming Events</h3>
    <Grid rows="1fr" columns="1fr" gap=".25rem">
      {events.map(event => (
        <Event key={event.node.title} values={event.node} />
      ))}
    </Grid>
  </StyledEvents>
);
