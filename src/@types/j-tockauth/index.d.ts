/// <reference types="typescript" />
declare module "j-tockauth" {
  export interface JtockAuthOptions {
    host: string; //          ex: http://api.domain.com || https://api.domain.com
    prefixUrl?: string; //    ex: /api/v1
  }
}