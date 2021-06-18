import EventEmitter from 'eventemitter3';

export default class Socket extends EventEmitter {
  /**
   * @param {String} url
   * @param {String} protocol
   * @param {String} sid screenID
   */
  constructor(url, protocol, sid) {
    super();
    this.url = url;
    this.protocol = protocol || 'echo-protocol';
    this.sid = sid;
    this.socket = null;
    this.initSocket();
    this.initProtectEvent();
  }

  initSocket = () => {
    this.socket = new WebSocket('ws://47.110.95.92:8888/', this.protocol);
    const socket = this.socket;
    socket.onopen = () => {
      this.on('socket-broadcast', (data) => {
        const info = { ...data, sid: this.sid };
        socket.send(JSON.stringify(info));
      });
      this.checkHeartBeat();
    };
    socket.onmessage = (ev) => {
      try {
        if (ev.data === 'pong') {
          clearTimeout(this.closeSocketTimeout);
          this.closeSocketTimeout = null;
          return;
        }
        const data = JSON.parse(ev.data);
        if (data.sid === this.sid) {
          // console.log(data);
          this.emit(data.type, data.payload);
        }
      } catch (err) {}
    };
    socket.onclose = (ev) => {
      // eslint-disable-next-line
      console.log('reconnection socket for close', ev);
      this.closeSocketTimeout = null;
      this.initSocket();
    };
    socket.onerror = (ev) => {
      // eslint-disable-next-line
      console.log('reconnection socket for error', ev);
      this.closeSocketTimeout = null;
      this.initSocket();
    };
  }

  initProtectEvent() {
    window.addEventListener('online', () => {
      console.error('online'); // eslint-disable-line
      this.checkHeartBeat();
    });
    window.addEventListener('focus', (ev) => {
      console.warn('focus'); // eslint-disable-line
      this.checkHeartBeat();
    });
  }

  checkHeartBeat() {
    if (this.heartBeatTimeout) {
      clearTimeout(this.heartBeatTimeout);
    }
    if (this.closeSocketTimeout) {
      return;
    }

    const socket = this.socket;
    socket.send('ping');
    this.closeSocketTimeout = setTimeout(() => {
      socket.close();
    }, 2000);
    this.heartBeatTimeout = setTimeout(() => {
      this.checkHeartBeat();
    }, 30000);
  }
}
