const baseUrl = process.env.NODE_ENV === "production" 
? 'https://flagone.io' 
: 'http://localhost:3000';

export default baseUrl;
