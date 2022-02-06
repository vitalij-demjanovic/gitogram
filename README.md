Create OAuth app 
profile --> Setting --> Developer Setting --> OAuht Apps --> New OAuht Apps --> 

Fill in:
Application name - "Gitogram"
Homepage URL - "http://localhost:8080/"
Authorization callback URL - "http://localhost:8080/#/auth"
--> You Get Client ID and Client secrets

Client ID and Client secrets write to:
src/pages/auth/exconsts.js 

export const clientId = ''
export const clientSecret = ''

Authorization will work.
