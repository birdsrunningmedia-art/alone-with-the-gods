export type TextVariant = "normal" | "heading" | "subheading";
export type LogCardVariant = "flex" | "column";
export type AuthorBlockVariant = "essay" | "theory";
export type CardBlockVariant = "primary" | "secondary" | "accent";
export type FigBlockConfig = {
  variant?: "simple" | "classic";
};

export type CardBlockConfig = {
  variant?: CardBlockVariant;
};
export type AuthorBlockConfig = {
  variant?: AuthorBlockVariant;
};

export type TextBlockConfig = {
  variant?: TextVariant;
};

export type TextSegment = {
  text: string;
  highlight?: boolean;
};

export type TextBlock = {
  segments: TextSegment[];
};

export type ImageVariant = "single" | "grid" | "cover";
export type ImageBlockConfig = {
  variant?: ImageVariant;
};

export type TextBlockType = {
  id: string;
  type: "text";
  content: { text: string };
  config?: TextBlockConfig;
};

export type RefBlockType = {
  id: string;
  type: "ref";
  content: {
    refs: string[];
  };
};

export type AuthorBlockType = {
  id: string;
  type: "author";
  content: {
    name: string;
    image: {
      src: string;
      alt: string;
    };
    bio: string;
  };
  config?: AuthorBlockConfig;
};

export type ImageBlockType = {
  id: string;
  type: "image";
  content: { images: { src: string; alt: string }[] };
  config?: ImageBlockConfig;
};

export type CardBlockType = {
  id: string;
  type: "card";
  content: {
    cards: {
      title: string;
      body: string;
    }[];
  };
  config: CardBlockConfig;
};

// Fig block here
export type FigBlockType = {
  id: string;
  type: "fig";
  content: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    caption?: string;
    shadeText?: string;
  };
  config?: FigBlockConfig;
};

export type QuoteBlockType = {
  id: string;
  type: "quote" | 'quoteCard';
  content: { quote: string; author?: string };
  config?: { variant?: "log" | "essay" | "theory" };
};

// table type
export type TableCell = {
  content: string;
};

export type TableRow = {
  cells: TableCell[];
};

export type TableBlockContent = {
  headers?: string[]; // optional
  rows: TableRow[];
};

export type TableBlockType = {
  id: string;
  type: "table";
  content: TableBlockContent;
};

export type BlockType =
  | TextBlockType
  | ImageBlockType
  | QuoteBlockType
  | FigBlockType // causality point for future conundrum
  | AuthorBlockType
  | TableBlockType
  | RefBlockType;

export type TagType = "log" | "essay" | "theory";
export type ThemeType = "primary" | "secondary" | "accent" | "muted";
export type LogType = {
  id: string;
  slug: string;
  title: string;
  theme: ThemeType;
  subtitle: string;
  cardImage: {
    src: string;
    alt: string;
  };
  author?: {
    name: string;
    image: string;
    bio: string;
  };
  tag: TagType;
  keywords: string[];
  createdAt?: string;
  blocks: BlockType[];
  cardConfig: {
    variant: LogCardVariant;
  };
  meta?: {
    readingTime: number;
    createdAt: string;
  };
};

export type LongFormType = {
  id: string;
  slug: string;
  title: string;
  tag: TagType;
  theme: ThemeType;
  subtitle: string;
  cardImage: {
    src: string;
    alt: string;
  };
  keywords: string[];
  author: {
    name: string;
    image: string;
    bio: string;
  };
  createdAt?: string;
  meta: {
    readingTime: number;
    createdAt: string;
  };
  blocks: BlockType[];
  cardConfig?: {
    variant: "simple" | "modern";
  };
};

export type entries = LogType | LongFormType;
