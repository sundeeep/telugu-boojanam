import APISuccessResponse from "../lib/APISuccessResponse";
import asyncHandler from "../utils/asyncHandler";

const healthCheck = asyncHandler(async(req, res, next)=>{
    return res
            .status(200)
            .json(new APISuccessResponse(200, "OK", "🚀 API Health Check has been passed! 💚"))
})

export default healthCheck;