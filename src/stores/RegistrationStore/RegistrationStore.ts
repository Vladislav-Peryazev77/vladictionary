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

  handleUserLogIn = async  (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<boolean> => {
    event.preventDefault();
    try {
      const loggedInUser: Parse.User = await Parse.User.logIn(
        this.username,
        this.password,
      );
      alert(
        `Success! User ${loggedInUser.get('username')} has successfully signed in!`,
      );


      this.handleUserNameValueChange('');
      this.handlePasswordValueChange('');

      this.getCurrentUser();
      // navigate('/');
      return true;
    } catch (error: any) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  getCurrentUser = async (): Promise<User> => {
    const currentUser: Parse.User | null = await Parse.User.current();
    this.setCurrentUser(currentUser)
    return currentUser;
  };

  setCurrentUser = (user: User) => {
    this.currentUser = user;
  }

  handleUserLogOut = async () => {
    try {
      await Parse.User.logOut();

      const currentUser: Parse.User = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }

      this.getCurrentUser();
      return true;
    } catch (error: any) {
      alert(`Error! ${error.message}`);
      return false;
    }
  }
}

export default new RegistrationStore();