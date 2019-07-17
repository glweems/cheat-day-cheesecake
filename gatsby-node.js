/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions: { createNode }, createNodeId }) => {
  const apiUrl = `http://localhost:3000/events`;
  const { data: events } = await axios.get(apiUrl);

  events.forEach(event => {
    createNode({
      ...event,
      id: createNodeId(`cheesecake-event-${event.id}`),
      parent: null,
      internal: {
        type: 'cheeseCakeEvent',
        content: JSON.stringify(event),
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(event))
          .digest('hex'),
      },
    });
  });
};
