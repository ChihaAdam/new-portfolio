export type sectionsType = {
  name: string;
  href: string;
};

export type skillsType = {
  name: string;
  icon: string;
};

export type projectsType = {
  name: string;
  description: string;
  demo?: string;
  repository?: string;
  snapshot: string;
};

export type contactType = {
  text: string;
  icon: string;
  link: string;
};

export type certificatesType = {
  name: string;
  image_url: string;
};

export type skillsCardProps = {
  title: string;
  image: string;
};

export type projectCardProps = {
  title: string;
  snapshot: string;
  description: string;
  demo?: string | undefined;
  repository?: string | undefined;
};

export type contactCardProps = {
  text: string;
  icon: string;
  link: string;
};
