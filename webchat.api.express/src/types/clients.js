"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clients = /** @class */ (function () {
    function Clients() {
        this._clients = [];
        this.count = 0;
    }
    Clients.getInstance = function () {
        if (!Clients.instance) {
            Clients.instance = new Clients();
        }
        return Clients.instance;
    };
    Clients.prototype.remove = function (clientId) {
        var client = this._clients[clientId];
        if (!client) {
            return;
        }
        delete this._clients[clientId];
        this.count--;
        /*this.broadcast(client.name + ' offline', '@ChatBot');*/
    };
    Clients.prototype.add = function (clientId, response) {
        this._clients[clientId] = { sse: response };
        this.count++;
        // TODO notify everyone about new participant and the person that he is online
        this.unicast(clientId, 'Hello! Online ' + this.count + ' users', 0);
        /*this.broadcast(name + ' online', 0);*/
    };
    Clients.prototype.broadcast = function (message, index) {
        this._send(this._clients, message, index);
    };
    Clients.prototype.unicast = function (clientId, message, index) {
        var client = this._clients[clientId];
        if (!client) {
            return;
        }
        this._send([client], message, index);
    };
    Clients.prototype._send = function (clients, message, index) {
        console.log("sending \"" + message + "\" from " + index);
        if (!message || !index) {
            return;
        }
        var dataJson = JSON.stringify({
            message: message,
            userIndex: index
        });
        clients.forEach(function (client) {
            client.sse.send(dataJson);
        });
    };
    Clients.prototype.generateClientId = function () {
        return this._clients.length;
    };
    return Clients;
}());
exports.Clients = Clients;
