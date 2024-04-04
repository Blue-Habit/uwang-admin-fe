export type UserWithPaginationResponse = 
{  
  status_code: number;
  data:Array<UserCredentialResponse>,
  message: string;
  page: string,
  size: string,
  total_data: number,
  total_page: number
}