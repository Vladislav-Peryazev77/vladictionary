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
      await Parse.User.logIn(this.username, this.password);

      this.clearLoginFields();

      // this.getCurrentUserId();
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

  getCurrentUserId = async (): Promise<User> => {
    const currentUserId: string = await Parse.User.current()?.id; // лишний запрос
    this.setCurrentUserId(currentUserId);
    return currentUserId;
  };

  setCurrentUser = (user: User) => {
    this.currentUser = user;
  };

  setCurrentUserId = (id: string) => {
    this.currentUserId = id;
  };

  handleUserLogOut = async () => {
    try {
      await Parse.User.logOut();
      this.getCurrentUser();
    } catch (error: any) {
      console.log(`Error! ${error.message}`);
    }
  };
}

export default new RegistrationStore();
