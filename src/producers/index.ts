import { Response, Request } from 'express';
import kafka from '../middlewares/kafka';

const producer = kafka.producer();
producer.connect();

const sendMessage = async (req: Request, res: Response) => {
  await producer.send({
    topic: 'topic-test-1', // topic name
    messages: [{ value: 'Hello KafkaJS user!' + Math.random().toString() }],
  });

  await producer.send({
    topic: 'topic-test-3', // topic name
    messages: [{ value: 'Hello KafkaJS user2!' + Math.random().toString() }],
  });

  res.send('Application works!');
};

export default sendMessage;
