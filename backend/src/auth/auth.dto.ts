import { ApiProperty } from '@nestjs/swagger';

export class registerBodyDto {
    @ApiProperty({ example: 'z5362100@ad.unsw.edu.au', description: 'The UNSW Email of the user' })
    username: string;

    @ApiProperty({ example: 'Dyc20020303', description: 'The password contains upper and lower case letters and numbers, eight or more digits.' })
    password: string;

    @ApiProperty({ example: '123456', description: 'The vertification code' })
    vertificationCode: string;

}

export class registerResponse {
    @ApiProperty({ example: 200, description: 'The status code of the response' })
    statusCode: number;
  
    @ApiProperty()
    message: string;

    @ApiProperty()
    token?: string;

    constructor(statusCode: number, message: string, token?: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.token = token;
    }

}

export class sendVerificationCodeDto {
    @ApiProperty()
    username: string;
}

export class nickNameBodyDto {

    @ApiProperty({description: 'The token of the user'})
    token: string;

    @ApiProperty({ example: 'Glenn', description: 'The nickname of the user' })
    nickName: string;
}

export class submitNicknameResponse {
    @ApiProperty({ example: 200, description: 'The status code of the response' })
    statusCode: number;
  
    @ApiProperty()
    message: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

export class loginBodyDto {
    @ApiProperty({ example: 'z5362100@ad.unsw.edu.au', description: 'The UNSW Email of the user' })
    username: string;

    @ApiProperty({ example: 'Dyc20020303', description: 'The password contains upper and lower case letters and numbers, eight or more digits.' })
    password: string;
}

export class loginResponse {
    @ApiProperty({ example: 200, description: 'The status code of the response' })
    statusCode: number;
  
    @ApiProperty()
    message: string;
  
    @ApiProperty()
    token?: string;
  
    constructor(statusCode: number, message: string, token?: string) {
      this.statusCode = statusCode;
      this.message = message;
      this.token = token;
    }
}

export class vertificationResponse {
    @ApiProperty({ example: 200, description: 'The status code of the response' })
    statusCode: number;
  
    @ApiProperty()
    message: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }

}