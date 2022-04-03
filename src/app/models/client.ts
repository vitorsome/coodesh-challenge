export class Client {

  private url? :string;

  constructor(
    private id: string, public name: string, public email: string,
    public gender: string, public birth: Date, public phone: string,
    public nacionality: string, public address: string, public numberAddress :number,
    public city :string, public image :string, public hidden :boolean) {
    }

    public getName() {
      return this.name;
    }

}


