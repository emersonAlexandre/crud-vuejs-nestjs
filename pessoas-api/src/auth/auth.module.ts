import {
  Module,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/user.module';
// Strategies
import { JwtStrategy } from './passport/jwt.strategy';
import { LocalStrategy } from './passport/local.strategy';

import { authenticate } from 'passport';
import { PessoasController } from '../pessoas/pessoas.controller';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService, JwtStrategy, LocalStrategy],
})
// export class AuthModule {}
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authenticate('jwt', { session: false }))
      .forRoutes(PessoasController);
  }
}