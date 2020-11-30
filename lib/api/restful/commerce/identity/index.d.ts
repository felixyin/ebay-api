import Api from '../../';
/**
 * Retrieves the authenticated user's account profile information.
 */
export default class Identity extends Api {
    get basePath(): string;
    /**
     * This method retrieves the account profile information for an authenticated user, which requires a User access
     * token. What is returned is controlled by the scopes.
     */
    getUser(): Promise<any>;
}
