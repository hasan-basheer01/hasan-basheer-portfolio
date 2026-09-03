/**
 * Licenses & certifications, as listed on LinkedIn.
 */

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    title: "Embedded & IoT Programming (Internship)",
    issuer: "Tessolve",
    issued: "Jun 2023",
    credentialId: "Tessolve/CBE/2023-24/I-195",
    skills: ["Embedded C Programming"],
  },
  {
    title: "Embedded IoT Programming",
    issuer: "Tessolve",
    issued: "May 2022",
    credentialId: "Tessolve/CBE/2022-23/745",
    skills: ["Embedded Systems", "Embedded C Programming"],
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    issued: "Oct 2021",
  },
  {
    title: "Introduction to C",
    issuer: "Great Learning",
    issued: "Jan 2022",
  },
];
