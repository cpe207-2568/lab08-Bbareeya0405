export interface Sidebar {
  userName: string;
  type?: "admin" | "student";
}

export interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
}

export interface FooterProps {
  year: string;
  fullName: string;
  studentId: string | number;
}
