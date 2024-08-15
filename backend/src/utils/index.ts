import { genSalt, hash, compare } from 'bcrypt';

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
