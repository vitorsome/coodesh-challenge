export class Client {

  private url? :string;

  constructor(
    private id: string, private name: string, private email: string,
    private gender: string, private birth: Date, private phone: string,
    private nacionality: string, private address: string, public hidden :boolean) {
    }

    public getName() {
      return this.name;
    }

}


