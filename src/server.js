// import {createServer, IncomingMessage, ServerResponse} from 'http';
// import {hostname} from 'os';
//
// export class ElectronNodeServer {
//     private readonly nodePort: number;
//
//     constructor(port: number) {
//         this.nodePort = port;
//     }
//
//     private onRequest(request: IncomingMessage, response: ServerResponse) {
//         console.log('New request: ' + request.url);
//
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.end();
//     }
//
//     public onStart() {
//         console.log('test');
//         const httpServer = createServer(this.onRequest());
//         console.log('test 2');
//         httpServer.listen(this.nodePort);
//         console.log('test 3');
//         console.log('Server listenning on http://' + hostname() + ':' + this.nodePort + '/');
//     }
// }

// import {createServer, IncomingMessage, ServerResponse, Server} from 'http';
//
// export class ElectronNodeServer {
//     private port: number = 5000;
//     private server: Server | undefined = undefined;
//
//     constructor() {
//         console.log('here');
//         this.server = createServer((request: IncomingMessage, response: ServerResponse) => {
//             response.end('Hello world!');
//         });
//
//         this.server.listen(this.port, () => {
//             console.log(`Server listening on port ${this.port}`);
//         });
//     }
// }

// import {createServer, IncomingMessage, ServerResponse} from 'http';
//
//
// createServer(function (req: IncomingMessage, res: ServerResponse) {
//     res.end("Hello from server started by Electron app!");
// }).listen(9000)

var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    window.dispatchEvent(
        new CustomEvent("run-local-application", {
            detail: { appParam, data },
        })
    );
    res.end();
}).listen(8080);

console.log('Node.js web server at port 5000 is running..')

