
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    _id: string;
    f_name?: string;
    l_name?: string;
    email: string;
    password?: string;
    createdAt?: gqlDate;
    updatedAt?: gqlDate;
}

export abstract class IQuery {
    abstract user(email: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract login(email?: string): string | Promise<string>;
}

export type gqlDate = any;
