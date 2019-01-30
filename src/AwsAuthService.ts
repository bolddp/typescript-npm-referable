import { AuthService } from './AuthService';

export class AwsAuthService implements AuthService {
  autoAuthorizeNames(name1: string, name2: string): string {
    return `Authorized! ${name1} and ${name2}`;
  }
}