/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions: { createNode }, createNodeId }) => {
  const { data: events } = await axios.get(
    `${process.env.GATSBY_API_URL}/events`,
  );

  const { data: menuItems } = await axios.get(
    `${process.env.GATSBY_API_URL}/menu`,
  );

  menuItems.forEach(item => {
    createNode({
      ...item,
      id: createNodeId(`cheesecake-menu-${item.id}`),
      parent: null,
      internal: {
        type: 'cheesecakeMenu',
        content: JSON.stringify(item),
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(item))
          .digest('hex'),
      },
    });
  });

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
