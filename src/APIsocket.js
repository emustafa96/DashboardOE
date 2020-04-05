import io from 'socket.io-client';

function APIsocket(api) {
    return io('https://api.powermail.icu')
}
export default APIsocket;