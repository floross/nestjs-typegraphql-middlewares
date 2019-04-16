import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class RecipeGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    console.log('RecipeGuard');
    return true;
  }

}
