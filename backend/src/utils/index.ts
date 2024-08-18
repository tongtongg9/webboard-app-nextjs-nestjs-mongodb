import { genSalt, hash, compare } from 'bcrypt';
import { Types } from 'mongoose';

/**
 *
 * @param password string
 * @returns Promise<string>
 * @description Encrypts the password
 */
export async function encryptPassword(password: string): Promise<string> {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    return hashPassword;
}

/**
 * @param password string
 * @param hash string
 * @returns Promise<boolean>
 * @description Compares the password with the hash
 */
export async function comparePassword(
    password: string,
    hash: string,
): Promise<boolean> {
    return compare(password, hash);
}

/**
 *
 * @param id string
 * @returns Types.ObjectId
 * @description parse object id from string
 * @example parseObjectId('612f7b3b7f7')
 */
export const parseObjectId = (id: string): Types.ObjectId =>
    new Types.ObjectId(id);
