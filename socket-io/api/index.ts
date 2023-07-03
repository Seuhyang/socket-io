import express from 'express';
import http from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { setIO } from '../util/socket-io';

import indexRouter from './router';
import ioRouter from './io/router';

const app = express();

const PORT = 33030;

// express 4.16 버전 이후에는 'body-parser'가 내장 되어있어 기본 제공, 이전 저번이라면 'body-parser' 별도 설치해서 사용.
app.use(express.json()); // JSON 데이터 파싱을 을 위한 미들웨어
app.use(express.urlencoded({ extended: false })); // 폼 데이터 파싱을 위한 미들웨어

const server = http.createServer(app);
//
// socket.io server
const io = new SocketIOServer(server);

// socket.io 연결 이벤트 처리
io.on('connection', (socket: Socket) => {
    setIO(io);
    console.log('socket io connected :: ', socket.id);

    // 메시지 수신 이벤트 처리
    socket.on('message', (data: string) => {
        console.log('Received message :: ', data);

        // 메시지 브로드캐스트 -> 현재 소켓을 제외한 다른 모든 연결된 소켓에 메시지를 전달
        socket.broadcast.emit('message', data);
    });

    // 연결 해제 이벤트 처리
    socket.on('disconnect', () => {
        console.log('Socket.IO disconnected:', socket.id);
    });
});

app.use('/', indexRouter);
app.use('/io', ioRouter);

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
