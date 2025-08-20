export type Info = {
  id: number;
  name: string;
  email: string;
};

export type AdminInfoList = Info & { role: string; lastLogin: Date };
