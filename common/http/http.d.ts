import { AppContextService } from '../../providers/app-context';
import { Observable } from 'rxjs';
export declare class HttpClient {
    private appContext;
    private fetch;
    constructor(appContext: AppContextService);
    get<T = any>(req: RequestInfo | string, params?: RequestInit): Observable<T>;
    getText(req: RequestInfo | string, params?: RequestInit): Observable<string>;
}
