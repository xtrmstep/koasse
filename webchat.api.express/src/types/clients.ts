export interface Client {
    sse: any;
}

export class Clients {
    private static instance: Clients;

    static getInstance() {
        if (!Clients.instance) {
            Clients.instance = new Clients();
        }
        return Clients.instance;
    }

    _clients: Client[] = [];
    count: number = 0;

    remove(clientId: number) {
        let client = this._clients[clientId];
        if (!client) {
            return;
        }
        client.sse.end();

        delete this._clients[clientId];
        this.count--;

        /*this.broadcast(client.name + ' offline', '@ChatBot');*/
    }

    add(clientId: number, response: any) {
        this._clients[clientId] = {sse: response};
        this.count++;

        // TODO notify everyone about new participant and the person that he is online
        this.unicast(clientId, 'Hello! Online ' + this.count + ' users', 0);
        /*this.broadcast(name + ' online', 0);*/
    }

    broadcast(message: any, index: any) {
        this._send(this._clients, message, index);
    }

    unicast(clientId: number, message: string, index: number) {
        let client = this._clients[clientId];
        if (!client) {
            return;
        }
        this._send([client], message, index);
    }

    _send(clients: Client[], message: string, index: number) {
        console.log(`sending "${message}" from ${index}`);

        if (!message || !index) {
            return;
        }

        let dataJson = JSON.stringify({
            message: message,
            userIndex: index
        });

        clients.forEach(function (client: Client) {
            client.sse.send(dataJson);
        });
    }

    public generateClientId() : number {
        return this._clients.length;
    }
}
