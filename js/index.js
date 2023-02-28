const { port1, port2 } = new MessageChannel()
port1.postMessage('123')

port2.onmessage = e => {
  console.log(e.data)
}
