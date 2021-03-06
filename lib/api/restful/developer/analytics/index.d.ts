import Api from '../../';
/**
 * This method retrieves the call limit and utilization data for an application.
 */
export default class Analytics extends Api {
    get basePath(): string;
    /**
     * This method retrieves the call limit and utilization data for an application.
     *
     * @param apiContext This optional query parameter filters the result to include only the specified API context.
     * @param apiName This optional query parameter filters the result to include only the APIs specified.
     */
    getRateLimits(apiContext: string, apiName: string): Promise<any>;
    /**
     * This method retrieves the call limit and utilization data for an application user.
     *
     * @param apiContext This optional query parameter filters the result to include only the specified API context.
     * @param apiName This optional query parameter filters the result to include only the APIs specified.
     */
    getUserRateLimits(apiContext: string, apiName: string): Promise<any>;
}
