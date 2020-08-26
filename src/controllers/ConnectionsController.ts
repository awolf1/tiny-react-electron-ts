

export default class ConnectionsController {

  static cont:number  = 0;

  constructor() {
  }

  public async index () {
    
    return ConnectionsController.cont;
  }

  public async create () {

    ConnectionsController.cont ++;
    return true;
  }
}
