'use strict';
export const config = {
   username: process.env.API_USERNAME || 'reddit_bot', //fake username
   password: process.env.API_PASSWORD || 'snoo', //fake password
   clientId: process.env.API_CLIENT_ID || 'p-jcoLKBynTLew', //fake client id
   clientSecret: process.env.API_CLIENT_SECRET || 'gko_LXELoV07ZBNUXrvWZfzE3aI', //fake secret
   userAgent: 'NoroiBot/0.1 by Justvashu',
   apiUrl: process.env.API_URL || 'reddit.local',
   oauthUrl: process.env.OAUTH_URL || 'reddit.local',
   apiPort: process.env.API_PORT || '443'
};