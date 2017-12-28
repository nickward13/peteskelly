import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {  
    constructor() {
    }
        public get getConfiguration(): any {
        return {
            tenant: '[your_tenant_name]',
            tenantid: '[your_tenant_id]',
            clientId: '[your_apps_clientid]',
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
            endpoints: {
                /* 'target endpoint to be called': 'target endpoint's resource ID'  */
                // Custom Azure Function HTTP endpoint - example, replace with your Function Url 
                'https://hectsecurefuncapp.azurewebsites.net/api': 'https://hectsecurefuncapp8.azurewebsites.net',
            },
                 //url of our function which will return our data
                 serviceUrl: 'https://hectsecurefuncapp8.azurewebsites.net/api/GetGolfers',
        };
    }

}