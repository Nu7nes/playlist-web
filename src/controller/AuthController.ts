import { Request, Response } from "express";
import { SpotifyService } from "../service/spotifyService";

class AuthController {
    public async auth(req: Request, res: Response) {
        const spotifyService: SpotifyService = new SpotifyService();
        const response = await spotifyService.response;
        return res.json({
            response: response
        });
    }
}

export const authController = new AuthController();
