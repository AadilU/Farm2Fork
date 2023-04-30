import {Client, Account, Databases} from 'appwrite';

const client = new Client();

client
.setEndpoint("https://localhost/v1") // Your API Endpoint
.setProject("644e5196c41a56591a61"); // Your project ID

export const account = new Account(client)