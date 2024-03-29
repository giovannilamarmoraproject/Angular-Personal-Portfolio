import { WorkInterface } from '../interfaces/work.interface';

export class Contentful {
  items?: Item[];
}

export class Item {
  updatedAt?: Date;
  sys: any;
  fields?: CMSData;
  cmsData?: CMSData[];
  projectCmsData?: ProjectCMSData[];
}

export class ProfileCMSData {
  curriculumUrl?: string;
  city?: string;
  profilePhotoUrl?: string;
  biography?: string;
  workProjects?: number;
  personalProject?: number;
  course?: number;
}

export class ProjectCMSData extends ProfileCMSData implements WorkInterface {
  id?: number;
  img?: string;
  titleSecondPage?: string;
  descriptionSecondPage?: Array<string>;
  btn_text?: string;
  btn_href?: string;
}

export class CMSData extends ProjectCMSData implements WorkInterface {
  title?: string;
  from?: string;
  to?: string;
  role?: string;
  where?: string;
  descriptionValue?: Description;
  description?: string;
  identifier?: string;
}

export class Description {
  nodeType?: string;
  data?: any;
  content?: Content[];
}

export class Content {
  nodeType?: string;
  data: any;
  value?: string;
  content?: Content[];
}

export enum ContentfulConstant {
  LAST_UPDATE = 'last_update',
  WORKS_DATA = 'works_data',
  COURSE_DATA = 'course_data',
  PROJECTS_DATA = 'projects',
  PROFILE_DATA = 'profile_data',
}

export enum Locale {
  ITALIAN = 'it-IT',
  ENGLISH = 'en-GB',
}

export enum ContentType {
  WORKS = 'jobs',
  COURSE = 'courses',
  PROJECTS = 'projects',
  PROFILE = 'profile',
}
