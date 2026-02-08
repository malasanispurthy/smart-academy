
export enum Role {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  sem: string;
  year: string;
  branch: string;
  section?: string;
  email: string;
  password?: string;
  isFirstLogin?: boolean;
  profilePicture?: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  password?: string;
  profilePicture?: string;
}

export interface ClassEntity {
  id: string;
  name: string;
  subject: string;
  teacherId: string;
  studentIds: string[];
}

export interface AttendanceRecord {
  id: string;
  classId: string;
  date: string;
  presentStudentIds: string[];
}

export interface AttendanceSession {
  id: string;
  classId: string;
  teacherId: string;
  latitude: number;
  longitude: number;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export interface Assignment {
  id: string;
  classId: string;
  title: string;
  description: string;
  dueDate: string;
  createdAt: string;
  attachment?: {
    name: string;
    type: string;
    data: string;
  };
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'ASSIGNMENT' | 'INFO' | 'EXAM' | 'RESULT' | 'JOB_UPDATE' | 'SCHEDULE' | 'PREP' | 'ATTENDANCE_SESSION';
  relatedId?: string;
  isRead: boolean;
  createdAt: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Exam {
  id: string;
  classId: string | null;
  title: string;
  durationMinutes: number;
  questions: Question[];
  createdAt: string;
  isActive: boolean;
}

export interface ExamSchedule {
  id: string;
  teacherId: string;
  classId: string;
  examDate: string;
  subject: string;
  syllabusExplanation: string;
  examId?: string;
  createdAt: string;
}

export interface PrepMaterial {
  id: string;
  teacherId: string;
  classId: string;
  title: string;
  type: 'QUIZ' | 'FLASHCARDS';
  content: any; // Array of cards or questions
  createdAt: string;
}

export interface ExamSubmission {
  id: string;
  examId: string;
  studentId: string;
  answers: Record<string, number>;
  score: number;
  totalQuestions: number;
  submittedAt: string;
}

export interface SubjectResult {
  subjectName: string;
  marksObtained: number;
  maxMarks: number;
  grade: string;
  credits: number;
}

export interface SemesterResult {
  id: string;
  studentId: string;
  semester: string;
  subjects: SubjectResult[];
  sgpa: number;
  cgpa: number;
  attachment?: {
    name: string;
    type: string;
    data: string;
  };
  publishedAt: string;
}

export type ApplicationStatus = 'PENDING' | 'SHORTLISTED' | 'REJECTED' | 'EXAM_GENERATED' | 'READY_FOR_INTERVIEW' | 'FAILED_SCREENING' | 'HIRED';

export interface JobApplication {
  id: string;
  studentId: string;
  teacherId: string;
  resumeFile: {
    name: string;
    type: string;
    data: string;
  };
  status: ApplicationStatus;
  aiAnalysis: string;
  examId?: string;
  createdAt: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  title: string;
  issuer: string;
  issueDate: string;
  file: {
    name: string;
    type: string;
    data: string;
  };
  createdAt: string;
}

export interface AppState {
  currentUser: Student | Teacher | null;
  role: Role | null;
}
