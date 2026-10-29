import {
  PERSONAL_INFO,
  METRICS,
  INTERNSHIP_HIGHLIGHT,
  DISCIPLINES,
  PROJECTS,
  ARCHITECTURE_CODE,
  EDUCATION_AND_JOURNEY,
  TECH_SKILLS,
  NAV_SECTIONS,
} from "@/data/portfolioData";
import type {
  PersonalInfo,
  MetricItem,
  InternshipHighlight,
  DisciplineItem,
  ProjectItem,
  ArchitectureCodeSpec,
  EducationJourneyItem,
  TechSkillItem,
  NavSectionItem,
} from "@/types";

export class PortfolioService {
  public static getPortfolioData() {
    return {
      personalInfo: this.getPersonalInfo(),
      metrics: this.getMetrics(),
      internshipHighlight: this.getInternshipHighlight(),
      disciplines: this.getDisciplines(),
      projects: this.getProjects(),
      architectureCode: this.getArchitectureCode(),
      educationAndJourney: this.getEducationAndJourney(),
      techSkills: this.getTechSkills(),
      navSections: this.getNavSections(),
    };
  }

  public static getPersonalInfo(): PersonalInfo {
    return PERSONAL_INFO;
  }

  public static getMetrics(): MetricItem[] {
    return METRICS;
  }

  public static getInternshipHighlight(): InternshipHighlight {
    return INTERNSHIP_HIGHLIGHT;
  }

  public static getDisciplines(): DisciplineItem[] {
    return DISCIPLINES;
  }

  public static getProjects(): ProjectItem[] {
    return PROJECTS;
  }

  public static getProjectById(id: number): ProjectItem | undefined {
    return PROJECTS.find((p) => p.id === id);
  }

  public static getFeaturedProjects(): ProjectItem[] {
    return PROJECTS.filter((p) => p.badgeType === "featured" || p.badgeType === "internship");
  }

  public static getArchitectureCode(): ArchitectureCodeSpec {
    return ARCHITECTURE_CODE;
  }

  public static getEducationAndJourney(): EducationJourneyItem[] {
    return EDUCATION_AND_JOURNEY;
  }

  public static getTechSkills(): TechSkillItem[] {
    return TECH_SKILLS;
  }

  public static getNavSections(): NavSectionItem[] {
    return NAV_SECTIONS;
  }
}
