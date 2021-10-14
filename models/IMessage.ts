export interface ISendMessage {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  message: string;
}
export class MessageDetails implements ISendMessage {
  firstName = "";
  lastName = "";
  email = "";
  mobileNumber = "";
  message = "";
}
