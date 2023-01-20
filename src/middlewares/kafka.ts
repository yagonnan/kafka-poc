import { Kafka } from 'kafkajs';
import server from '../config/server';

const kafka = new Kafka({
  clientId: server.clientId,
  brokers: ['kafka:9092', 'kafka:9093'], // url 'kafka' is the host and port is 9092
});

export default kafka;
