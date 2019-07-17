/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions: { createNode }, createNodeId }) => {
  const { data: events } = await axios.get(
    `${process.env.GATSBY_API_URL}/events`,
  );

  events.forEach(event => {
    createNode({
      ...event,
      id: createNodeId(`cheesecake-event-${event.id}`),
      parent: null,
      internal: {
        type: 'cheesecakeEvent',
        content: JSON.stringify(event),
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(event))
          .digest('hex'),
      },
    });
  });
};
