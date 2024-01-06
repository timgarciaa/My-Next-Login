/**
 * An array of routes that are accessible to the public.
 * These routes do not requier authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/'];

/**
 * An array of routes that are used for authentication.
 * These routes will rediret looged in users to the home page.
 * @type {string[]}
 */
export const authRoutes: string[] = ['/auth/login', '/auth/register'];

/**
 * THe prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const API_AUTH_PREFIX: string = '/api/auth';

/**
 * The default redirect path after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard';
