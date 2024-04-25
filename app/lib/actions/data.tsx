"use server";

export async function requestToken() {
    const tokenURL = "https://accounts.zoho.com.au/oauth/v2/token";
    const refreshToken = "1000.65e8f921a1774b709bc09f3d7f823a32.ce51914834937687ecde644e58efa361";
    const clientId = "1000.58Q94Q0KJW5HSC4MC6KA71Z7EM6LKU";
    const clientSecret = "37d6c1480a7ed6b12991cc5d38f040f0473e5eed57";
    const scope = "Desk.tickets.ALL,Desk.tickets.UPDATE,Desk.settings.ALL,Desk.articles.READ,Desk.articles.CREATE,Desk.articles.UPDATE,Desk.articles.DELETE,Desk.search.READ,Desk.basic.READ,Desk.basic.CREATE";
    const redirectUri = "https://www.zylker.com/oauthgrant";

    const data = new URLSearchParams();
    data.append('grant_type', 'refresh_token');
    data.append('refresh_token', refreshToken);
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
    data.append('redirect_uri', redirectUri);
    data.append('scope', scope);

    try {
        const response = await fetch(tokenURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        });
        const responseData = await response.json();
    
        console.log('Access Token:', responseData.access_token); 
        console.log(responseData.access_token) 
        return responseData.access_token;

    } catch (error) {
        console.error('Error:', error);
        return null; 
    }
}



async function useToken() {
    try {
        const accessToken = await requestToken();
        if (accessToken) {
            console.log("Using access token:", accessToken);
        } else {
            console.log("Failed to retrieve access token.");
        }
    } catch (error) {
        console.error("Error in using token:", error);
    }
}

useToken(); 



// export async function fetchApi() {
//     let response = await fetch("https://desk.zoho.com.au/api/v1/articles");
//     let data = await response.JSON();

//     return details;
// }

