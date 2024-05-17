import { makeAutoObservable } from 'mobx';
import Parse from 'parse/dist/parse.min.js';
import { User } from '../../types/registrationTypes/registrationTypes';

class RegistrationStore {
  username: string = '';
  password: string = '';
  currentUser: User = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleUserNameValueChange = (value: string) => {
    this.username = value;
  };

  handlePasswordValueChange = (value: string) => {
    this.password = value;
  };

  clearLoginFields = () => {
    this.handleUserNameValueChange('');
    this.handlePasswordValueChange('');
  };

  handleUserLogIn = async (): Promise<boolean> => {
    try {
      const loggedInUser: Parse.User = await Parse.User.logIn(
        this.username,
        this.password,
      );

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
    this.setCurrentUser(currentUser);
    return currentUser;
  };

  setCurrentUser = (user: User) => {
    this.currentUser = user;
  };

  handleUserLogOut = async () => {
    try {
      await Parse.User.logOut();

      const currentUser: Parse.User = await Parse.User.current();

      this.getCurrentUser();
      return true;
    } catch (error: any) {
      console.log(`Error! ${error.message}`);
      return false;
    }
  };
}

export default new RegistrationStore();
