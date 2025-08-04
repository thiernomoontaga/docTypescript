// 3. Objets Imbriqués et Typage

interface Profile {
    username: string;
    address: {
        city: string;
        postalCode: string;
    };
}

const userProfile: Profile = {
    username: "thierno",
    address: {
        city: "senegal",
        postalCode: "+221"
    }
};

// Avec l'opérateur optionnel `?.`
const city = userProfile.address?.city; // string | undefined

// Avec un type guard
function hasAddress(user: Profile): user is Profile & { address: { city: string } } {
    return user.address !== undefined;
}

