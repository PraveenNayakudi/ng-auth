export class User {
    constructor(
        public username:string, 
        private _token:string, 
        private expirationTime:Date
        ){}

        get token(){
            if( new Date() > this.expirationTime){
                return null
            }
            return this._token;
        }
}