import { Request, Response } from "express";

export default function makeCallback(controller: Function) {
  return async (req: Request, res: Response) => {
    try {
      const data = await controller(req);
      if (data) {
        res.status(200).json({
          success: true,
          message: "Success",
          data,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Success",
        });
      }
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error?.message || "Internal server error",
      });
    }
  };
}
