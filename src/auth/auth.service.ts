import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user) {
            const isMatch = await bcrypt.compare(pass, user.password);

            if(isMatch) {
                const { password, ...result } = user;
                return result;
            }
            else {
                return null;
            }
        }
        
        return null;
    }

    async login(user: any) {
        const payload = {
            sub: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        };
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}