import { getIO } from '../../util/socket-io';
const socket = getIO();

export async function sendMessage(to: string, message: string) {
    if (!to) {
        to = 'message';
    }
    socket.emit(to, message);

    return true;
}

export function message(to: string, message: string) {
    console.log('to :: ', to);
    console.log('message :: ', message);
}
