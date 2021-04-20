import { KeycloakService } from "keycloak-angular";


export function keycloackInit(keycloakService: KeycloakService){
    return () => keycloakService.init({
        config: {
            url: "http://localhost:8180/auth",
            realm: "nav",
            clientId: "frontend-service" 
        },
        initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
                window.location.origin + '/assets/silent-check-sso.html'
        }
    })
}
