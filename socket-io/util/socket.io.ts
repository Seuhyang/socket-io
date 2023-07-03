// io.ts 파일
import { Server as SocketIOServer, Socket } from 'socket.io';

let globalIO: SocketIOServer;

export const setIO = (io: SocketIOServer) => {
    globalIO = io;
};

export const getIO = () => {
    return globalIO;
};
