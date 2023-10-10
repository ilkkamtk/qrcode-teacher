import './style.css';
import { io, Socket } from 'socket.io-client';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from './interfaces/Socket';

const codeImage = document.getElementById(
  'code-image',
) as HTMLImageElement | null;

const fetchImages = async () => {
  try {
    const response = await fetch('http://localhost:3002/api/v1/code');
    const data = await response.json();
    codeImage!.src = data;
  } catch (error) {
    console.error(error);
  }
};

// socket.io client
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  'http://localhost:3002',
);

socket.on('updateCode', (data) => {
  console.log(data);
  fetchImages();
});

fetchImages();
