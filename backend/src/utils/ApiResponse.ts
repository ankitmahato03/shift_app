import { ApiResponseType } from "./types";

// Utility for creating standardized API responses
const ApiResponse = {
  response(
    code: number,
    status: "success" | "error",
    message: string,
    data: any | null = null,
    token: string | null = null
  ): ApiResponseType {
    let response: ApiResponseType = { code, status, message };

    if (data) response.data = data;
    if (token) response.token = token;

    return response;
  },
};

export default ApiResponse;
