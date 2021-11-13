const Cliente = require('./Cliente');
const SomadorAdapter = require('./SomadorAdapter');
const SomadorExistente = require('./SomadorExistente');

const somador = new SomadorExistente();
const adpter = new SomadorAdapter({ somador });
const cliente = new Cliente({ somador: adpter });

cliente.executar();