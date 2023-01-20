import kafka from '../middlewares/kafka';

const consumer = kafka.consumer({ groupId: 'topic-test-1-group' });

consumer.connect();
consumer.subscribe({ topic: 'topic-test-1', fromBeginning: true });

consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message?.value?.toString(),
    });
  },
});
