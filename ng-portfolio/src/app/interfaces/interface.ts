export interface HomePage {
  data: {
    id: number;
    attributes: {
      Name: string;
      Jbt: string;
      Description: string;
      bannerimage: {
        data: {
          attributes: {
            formats: {
              thubanil: {
                width: number;
                height: number;
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface About {
  data: {
    id: number;
    attributes: {
      Resume: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      Video: {
        data: {};
      };
      about_descriptions: {
        data: [
          {
            attributes: {
              Title: string;
              Description: string;
            };
          }
        ];
      };
      about_personals: {
        data: [
          {
            attributes: {
              Title: string;
              Description: string;
            };
          }
        ];
      };
      front_end_skills: {
        data: [
          {
            attributes: {
              SkillName: string;
            };
          }
        ];
      };
      back_end_skills: {
        data: [
          {
            attributes: {
              SkillName: string;
            };
          }
        ];
      };
      other_skills: {
        data: [
          {
            attributes: {
              SkillName: string;
            };
          }
        ];
      };
    };
  };
}

export interface Project {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    SiteURL: string;
    Description: string;
    Category: string;
    ClientName: string;
    StartDate: string;
    EndDate: string;
    Display: boolean;
    GithubURL: string;
    skills: {
      data: [
        {
          id: number;
          attributes: {
            SkillName: string;
            SkillLogo: {
              data: [
                {
                  id: number;
                  attributes: {
                    alternativeText: string;
                    formats: {
                      medium: {
                        url: string;
                        width: number;
                        height: number;
                      };
                    };
                  };
                }
              ];
            };
          };
        }
      ];
    };
    roles_portfolios: {
      data: [
        {
          id: number;
          attributes: {
            Role: string;
          };
        }
      ];
    };
    Thumbnail: {
      data: [
        {
          id: number;
          attributes: {
            alternativeText: string;
            url: string;
          };
        }
      ];
    };
    project_images: {
      data: [
        {
          id: number;
          attributes: {
            Title: string;
            Image: {
              data: [
                {
                  id: number;
                  attributes: {
                    alternativeText: string;
                    url: string;
                    width: number;
                    height: number;
                  };
                }
              ];
            };
          };
        }
      ];
    };
  };
}

export interface Projects {
  data: Project[];
}

export interface Skill {
  id: number;
  attributes: {
    SkillName: string;
    SkillLevel: number;
    SkillIcon: {
      data: {
        id: number;
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
  };
}

export interface Skills {
  data: Skill[];
}
