import 'egg';

declare module 'egg' {
    interface Application {
        jwt: any;
        io:any;
    }
    interface CustomController {
        nsp: any;
    }

    interface EggSocketNameSpace {
        emit: any
    }
}