/// <reference types="typescript" />
import {
  JtockAuthOptions,
  DeviseHeader,
  authenticateRouteOptions
} from "../options";

export as namespace JtockAuth;
declare class JtockAuth {
  constructor(options: JtockAuthOptions);
  options: JtockAuthOptions;
  debug: boolean;
  apiUrl: string;
  apiAuthUrl: string;
  emailField: string;
  passwordField: string;
  session: DeviseHeader | undefined;
  roles: Array<any>;
  signInUrl: string;
  signOutUrl: string;
  validateTokenUrl: string;

  test(): Promise<any>;
  tokenHeaders(): DeviseHeader;
  signUp(userFields: any, confirmSuccessUrl: string): Promise<any>;
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
  deleteResource(): Promise<any>;
  validateToken(headers: DeviseHeader): Promise<any>;
  changePassword(
    oldPassword: string,
    newPassword: string,
    newPasswordConfirmation: string
  ): Promise<any>;
  resetPassword(email: string, redirectUrl: string): Promise<any>;
  updatePasswordByToken(token: string, redirectUrl: string): Promise<any>;
  authenticateRoute(
    url: string,
    options: authenticateRouteOptions
  ): Promise<any>;
}
export default JtockAuth;
