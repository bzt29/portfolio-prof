export type ViewMode = "white" | "dark" | "mobile" | "auto";

export type SectionId =
  | "hero"
  | "about"
  | "competencies"
  | "projects"
  | "topology"
  | "certificates";

export type MobileSectionId =
  | "overview"
  | "disciplines"
  | "projects"
  | "topology"
  | "skills"
  | "certifications"
  | "contact";

export type BadgeType =
  | "internship"
  | "featured"
  | "mobile"
  | "academic"
  | "retail"
  | "operations";

export interface ProjectFolderNode {
  name: string;
  type: "folder" | "file";
  depth: number;
  comment?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  badge: string;
  badgeType: BadgeType;
  image: string;
  description: string;
  tech: string[];
  typeLabel: string;
  github?: string;
  demo?: string;
  rootFolder?: string;
  architectureSummary?: string;
  folderTree?: ProjectFolderNode[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
  accent?: "white" | "cyan" | "emerald" | "brand";
}

export interface TechSkillItem {
  name: string;
  color: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools";
  type: string;
  description?: string;
  projects?: string[];
  level?: string;
}

export interface EducationJourneyItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
  category: "degree" | "internship" | "web" | "mobile";
}

export interface DisciplineItem {
  id: string;
  title: string;
  iconType: "web" | "mobile" | "network";
  items: string[];
  fullWidth?: boolean;
}

export interface NavSectionItem {
  id: SectionId;
  mobileId: MobileSectionId;
  label: string;
  shortLabel: string;
  num: string;
  iconPath: string;
  materialIcon: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  roleTitle: string;
  roleSubtitle: string;
  fullRole: string;
  location: string;
  shortLocation: string;
  email: string;
  whatsapp: string;
  whatsappLink: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
  avatarUrl: string;
  cvUrl: string;
  cvFileName: string;
  statusBadge: string;
  systemStatus: string;
  versionTag: string;
  briefIntro: string;
  detailedIntro: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  workInquiryText: string;
}

export interface InternshipHighlight {
  company: string;
  companyType: string;
  period: string;
  location: string;
  badge: string;
  systemName: string;
  description: string;
}

export interface NetworkHighlight {
  company: string;
  companyType: string;
  period: string;
  location: string;
  badge: string;
  systemName: string;
  description: string;
}

export interface ArchitectureCodeSpec {
  filename: string;
  language: string;
  comment: string;
  code: string;
}
