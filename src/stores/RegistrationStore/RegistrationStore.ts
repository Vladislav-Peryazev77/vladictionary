import { makeAutoObservable } from 'mobx';
import Parse from 'parse/dist/parse.min.js';
import { User } from '../../types/registrationTypes/registrationTypes';

class RegistrationStore {
  username: string = '';
  password: string = '';
  currentUser: User = null;
  currentUserId: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserNameValue = (username: string) => {
    this.username = username;
  };

  setPasswordValue = (password: string) => {
    this.password = password;
  };

  clearLoginFields = () => {
    this.setUserNameValue('');
    this.setPasswordValue('');
  };

  logIn = async (): Promise<boolean> => {
    try {
      await Parse.User.logIn(this.username, this.password);

      this.clearLoginFields();

      this.getCurrentUser();

      return true;
    } catch (error: any) {
      console.log(`Error! ${error.message}`);
      return false;
    }
  };

  getCurrentUser = async (): Promise<User> => {
    const currentUser: Parse.User | null = await Parse.User.current();
    if (currentUser !== null) {
      this.setCurrentUser(currentUser);
      this.setCurrentUserId(currentUser.id);
      return;
    }
    this.setCurrentUser(null);
    this.setCurrentUserId('');
  };

  setCurrentUser = (user: User) => {
    this.currentUser = user;
  };

  setCurrentUserId = (id: string) => {
    this.currentUserId = id;
  };

  logOut = async () => {
    try {
      await Parse.User.logOut();
      this.getCurrentUser();
    } catch (error: any) {
      console.log(`Error ${error.message}`);
    }
  };
}

export default new RegistrationStore();
