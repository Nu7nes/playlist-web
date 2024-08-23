import axios, { AxiosInstance } from "axios";

interface AuthResponseType {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export class SpotifyService {
    public response: Promise<AuthResponseType | undefined>;
    private httpClient: AxiosInstance;

    constructor() {
        if (
            !process.env.SPOTIFY_AUTH_URI ||
            !process.env.SPOTIFY_CLIENT_ID ||
            !process.env.SPOTIFY_CLIENT_SECRET
        ) {
            throw new Error("Spotify environment variables are not set.");
        }

        this.httpClient = axios.create({
            baseURL: process.env.SPOTIFY_AUTH_URI,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        this.response = this.auth();
    }

    private async auth() {
        try {
            const response = await this.httpClient.post("/", {
                grant_type: "client_credentials",
                client_id: process.env.SPOTIFY_CLIENT_ID,
                client_secret: process.env.SPOTIFY_CLIENT_SECRET,
            });
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }

    public async search() {}
}
