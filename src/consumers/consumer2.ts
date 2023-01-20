import kafka from '../middlewares/kafka';

const consumer2 = kafka.consumer({ groupId: 'topic-test-2-group' });

consumer2.connect();
consumer2.subscribe({ topic: 'topic-test-3', fromBeginning: true });

consumer2.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      topic,
      partition,
      offset: message?.offset,
      timestamp: message.timestamp,
      // headers: (Object.keys(message?.headers) || []).reduce(
      //   (headers, key) => ({
      //     ...headers,
      //     [key]: message?.headers?.[key].toString(),
      //   }),
      //   {}
      // ),
      key: message?.key?.toString(),
      value: message?.value?.toString(),
    });
  },
});
