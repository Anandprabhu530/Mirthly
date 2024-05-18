export type updateuser_data = {
  Fullname: string;
  Email: string;
  Number: string;
  Location: string;
  Education: string;
  Degree: string;
  Education_From: string;
  Education_To: string;
  Experience_Description: string;
  Experience_Role: string;
  Experience_From: string;
  Experience_To: string;
  Experience_Company: string;
  project1: string;
  Project1_Description: string;
  project2: string;
  Project2_Description: string;
};

export interface solodata_type {
  jobs: string;
  difficulty_score: string;
  description: string;
  steps: [];
  tasks: [];
}
