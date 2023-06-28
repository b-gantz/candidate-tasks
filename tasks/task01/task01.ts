import {describe, expect, test} from '@jest/globals';

class LoginPage {
    login(username: string, password: string, authService: AuthenticationService): boolean {
      let result = false;
      
      // Call the authentication service to check the credentials
      if (authService.authenticate(username, password)) {
        // If the authentication service returns true, set the result to true
        result = true;
      }
      
      return result;
    }
  }

//below content of login.test.ts

const falseAuthService = {
    authenticate: (username, password) => false 
};

const trueAuthService = {
    authenticate: (username, password) => true
};

describe('Login function', () => {
    test('Wrong credentials for login'), () => 
        expect(login('wrongLogin','wrongPassword', falseAuthService).toBeFalsy;
    });
    test('Correct credentials for login'), () => 
        expect(login('correctLogin','correctPassword', trueAuthService).toBeFalsy;
    });
    test('Admin credentials for login with mocked auth responce'), () => 
        expect(login('admin','admin', authService.mockReturnValueOnce('true')).toBeFalsy;
    });
});

