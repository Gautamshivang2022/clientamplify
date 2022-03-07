import io from 'socket.io-client';
// const sockets = io('http://server.eba-arbcesy3.us-east-1.elasticbeanstalk.com', { autoConnect: true, forceNew: true });
const sockets = io('https://999a-103-179-8-210.ngrok.io', { autoConnect: true, forceNew: true });
export default sockets;
