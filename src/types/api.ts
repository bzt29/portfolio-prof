export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface ContactMessageRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactMessageResponse {
  messageId: string;
  delivered: boolean;
}
