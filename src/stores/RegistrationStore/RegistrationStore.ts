import { makeAutoObservable } from 'mobx';
class RegistrationStore {
  username: string = '';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  handleUserNameValueChange = (value: string) => {
    this.username = value;
  };

  handlePasswordValueChange = (value: string) => {
    this.password = value;
  };
}

export default new RegistrationStore();
