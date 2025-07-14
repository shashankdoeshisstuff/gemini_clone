export type Country = {
  name: string;
  code: string;
};

export type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  image?: string;
};

export type Chatroom = {
  id: string;
  title: string;
  createdAt: Date;
};