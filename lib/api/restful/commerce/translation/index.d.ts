import Api from '../../';
import { TranslateRequest } from '../../../../types/restfulTypes';
/**
 * This API allows 3rd party developers to translate item title, description, search query.
 */
export default class Translation extends Api {
    get basePath(): string;
    /**
     * Translates input text inot a given language.
     *
     * @param body TranslateRequest
     */
    translate(body: TranslateRequest): Promise<any>;
}
