// ApiResponse type definition
export interface ApiResponseType<T = any> {
  code: number;
  status: "success" | "error";
  message: string;
  data?: T | null;
  token?: string | null;
}
