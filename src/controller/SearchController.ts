import { Request, Response } from "express";

class SearchController {
    public search(req: Request, res: Response) {
        return res.json({
            response: "Procurando ",
        });
    }
}

export const searchController = new SearchController();
