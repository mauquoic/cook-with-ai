interface Frontmatter {
  date: string;
  title: string;
  slug?: string;
  category: string;
  template: string;
  description?: string;
  prepTime?: string;
  cookTime?: string;
  tags?: Array<string>;
  socialImage?: {
    publicURL: string;
  };
}

export default Frontmatter;
