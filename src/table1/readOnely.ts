// l'attribut en lecture seule : readonly
interface AppConfig {
    readonly appName: string;
    readonly apiBaseUrl: string;
    readonly maxRetryAttempts: number;
    readonly featureFlags: {
        darkMode: boolean;
        experimentalFeatures: boolean;
    };
}

// Initialisation
const config: AppConfig = {
    appName: "MonApplication",
    apiBaseUrl: "https://api.example.com",
    maxRetryAttempts: 3,
    featureFlags: {
        darkMode: true,
        experimentalFeatures: false
    }
};

// Tentative de modification
// config.appName = "NouveauNom"; // ERREUR: Propriété en lecture seule
// config.maxRetryAttempts = 5;   // ERREUR: Propriété en lecture seule

// MAIS attention :
config.featureFlags.darkMode = false; // PAS d'erreur ! Le contenu de l'objet peut être modifié


//exemple : 

interface Country {
    readonly code: string;
    readonly name: string;
    readonly phonePrefix: string;
}

const france: Country = {
    code: "FR",
    name: "France",
    phonePrefix: "+33"
};

// france.code = "DE"; // ERREUR - les données de référence ne doivent pas changer

