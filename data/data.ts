import { LogType, LongFormType } from "@/types/types";

/* =========================
   LOGS
========================= */

export const logs: LogType[] = [
  {
    id: "log-1",
    slug: "latency-as-language",
    title: "Latency as Language",
    theme: "primary",
    cardImage: {
      src: "/images/logs/latency.jpg",
      alt: "Blurred cursor trail",
    },
    tag: "log",
    subtitle:
      "A system reveals itself most clearly in the moments where it fails to be immediate.",
    keywords: ["latency", "systems", "interface"],
    createdAt: "2026-03-21",
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "There is always a delay between intention and response. It may be imperceptible, measured in milliseconds, but it exists. In most systems, this delay is treated as an error condition—something to be minimized, hidden, or eliminated entirely.\n\nBut when the delay becomes visible, something shifts. The illusion of immediacy collapses, and the system begins to feel real. You notice the processing, the transitions, the subtle negotiation between input and output. The interface is no longer transparent—it becomes an object with behavior.\n\nThis exposure is often uncomfortable. We are conditioned to expect seamlessness, to equate speed with quality. But latency is not simply a failure of performance. It is a form of disclosure. It reveals that every action is mediated, that nothing occurs instantly, that all interaction is translated through layers of abstraction.\n\nWhen latency disappears, so does awareness. We begin to believe in directness, in control without friction. But the system has not changed—only our perception of it has. The delay, when it appears, interrupts that perception. It forces us to confront the machinery beneath the surface.\n\nAnd perhaps that is its value. Not as a flaw to be corrected, but as a signal. A reminder that what we interact with is not immediate, not natural, but constructed. Designed. Engineered.",
        },
      },
      {
        id: "b2",
        type: "image",
        content: {
          images: [
            {
              src: "/images/logs/latency-2.jpg",
              alt: "UI lag motion blur",
            },
          ],
        },
        config: { variant: "cover" },
      },
      {
        id: "b3",
        type: "quote",
        content: {
          quote: "Delay is the only honest part of a fast system.",
        },
      },
    ],
    cardConfig: { variant: "flex" },
  },

  {
    id: "log-2",
    slug: "archive-without-memory",
    title: "Archive Without Memory",
    theme: "muted",
    cardImage: {
      src: "/images/logs/archive.jpg",
      alt: "Digital storage systems",
    },
    tag: "log",
    subtitle: "We store more than ever, but understand less of what is kept.",
    keywords: ["archive", "memory"],
    createdAt: "2026-03-19",
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "The archive expands endlessly. Storage becomes cheaper, systems become faster, and the act of saving becomes automatic. Everything is recorded—images, messages, transactions, fragments of everyday life.\n\nBut accumulation is not the same as memory.\n\nWhat we store is not the experience itself, but a compressed version of it. Resolution is reduced, context is stripped away, and meaning is flattened into data. Over time, these fragments lose their connection to the moment they represent.\n\nThe archive does not remember—it preserves. And preservation is a technical process, not an emotional one.\n\nAs the archive grows, navigation becomes impossible. Search replaces recall. Algorithms replace intention. We no longer remember where something is—we rely on the system to retrieve it for us.\n\nIn this sense, the archive becomes externalized memory. But unlike human memory, it does not forget selectively. It does not prioritize. It does not interpret.\n\nIt simply accumulates.\n\nAnd in that accumulation, meaning begins to dissolve.",
        },
      },
      {
        id: "b2",
        type: "quote",
        content: {
          quote: "Storage is not remembrance. It is postponement.",
        },
      },
    ],
    cardConfig: { variant: "flex" },
  },

  {
    id: "log-3",
    slug: "interface-fatigue",
    title: "Interface Fatigue",
    theme: "accent",
    cardImage: {
      src: "/images/logs/interface.jpg",
      alt: "Overloaded UI",
    },
    tag: "log",
    subtitle:
      "Too many systems competing for attention results in none being understood.",
    keywords: ["ux", "overload"],
    createdAt: "2026-03-17",
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "Interfaces no longer present themselves as singular systems. They are layered, fragmented, and constantly shifting. Notifications overlap with content, menus expand into submenus, and interactions multiply until navigation becomes a process of elimination rather than intention.\n\nThis density creates fatigue. Not physical exhaustion, but cognitive strain. Each interaction requires interpretation. Each decision requires context. Over time, this accumulation of micro-decisions erodes clarity.\n\nThe system does not feel complex—it feels overwhelming.\n\nAnd yet, each layer was introduced with purpose. Each feature was designed to solve a problem, to add capability, to improve efficiency. But systems do not scale linearly. Additions interact with each other in unpredictable ways, creating new forms of friction.\n\nComplexity is not depth. It is accumulation.",
        },
      },
      {
        id: "b2",
        type: "quote",
        content: {
          quote: "When everything demands attention, nothing is understood.",
        },
      },
    ],
    cardConfig: { variant: "column" },
  },

  {
    id: "log-4",
    slug: "silent-updates",
    title: "Silent Updates",
    theme: "secondary",
    cardImage: {
      src: "/images/logs/update.jpg",
      alt: "System update bar",
    },
    tag: "log",
    subtitle: "Change happens continuously, but rarely announces itself.",
    keywords: ["updates"],
    createdAt: "2026-03-15",
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "Most systems no longer change in visible ways. Updates are deployed silently, integrated seamlessly, and distributed continuously. There is no moment of transition—only a gradual shift in behavior.\n\nA button moves slightly. A function disappears. A new pattern replaces an old one. These changes are small enough to go unnoticed individually, but over time they accumulate into something significant.\n\nThe user rarely has access to this history. There is no record of what has changed, no explanation of why. The system evolves, but the evolution is hidden.\n\nThis creates a strange condition. The interface feels familiar, but also unstable. Something is always slightly different, slightly out of place. The system is never fully known—it is always in the process of becoming something else.",
        },
      },
    ],
    cardConfig: { variant: "column" },
  },
];

/* =========================
   ESSAYS
========================= */

export const essays: LongFormType[] = [
  {
    id: "essay-1",
    slug: "invisible-systems",
    title: "Invisible Systems",
    theme: "primary",
    tag: "essay",
    subtitle:
      "The most effective structures are the ones that do not announce themselves.",
    cardImage: {
      src: "/images/essays/grid.jpg",
      alt: "Grid overlay",
    },
    keywords: ["design", "systems"],
    author: {
      name: "Julian Thorne",
      image: "/images/authors/julian.jpg",
      bio: "Design critic exploring structured systems.",
    },
    meta: { readingTime: 14, createdAt: "2026-03-10" },
    blocks: [
      {
        id: "b1",
        type: "text",
        content: { text: "Structure as Absence" },
        config: { variant: "heading" },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "A system is most effective when it disappears. This does not mean that it is absent, but that it operates without drawing attention to itself. In design, this quality is often misunderstood. Many assume that clarity requires visibility—that in order for a system to be understood, it must be seen.\n\nBut visible systems compete with the content they are meant to support. They introduce their own logic, their own rhythm, their own presence. This creates friction—not the productive kind, but the kind that distracts.\n\nInvisible systems operate differently. They guide perception without becoming the focus of attention. Alignment, spacing, proportion—these elements shape experience quietly.\n\nThe grid is not seen. It is felt.",
        },
      },
      {
        id: "b3",
        type: "image",
        content: {
          images: [
            {
              src: "/images/essays/grid-detail.jpg",
              alt: "Grid detail",
            },
          ],
        },
      },
    ],
    cardConfig: {
      variant: "modern",
    },
  },

  {
    id: "essay-2",
    slug: "designed-friction",
    title: "Designed Friction",
    theme: "secondary",
    tag: "essay",
    subtitle:
      "Why resistance, when applied deliberately, creates deeper engagement.",
    cardImage: {
      src: "/images/essays/friction.jpg",
      alt: "Slow UI interaction",
    },
    keywords: ["ux"],
    author: { name: "AI", image: "", bio: "" },
    meta: { readingTime: 10, createdAt: "2026-03-01" },
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "Friction is often treated as a flaw—something to be removed in the pursuit of efficiency. But when applied intentionally, it becomes a tool.\n\nFriction slows interaction. It introduces resistance. It forces the user to become aware of their actions.\n\nIn this awareness, meaning emerges.",
        },
      },
      {
        id: "b2",
        type: "quote",
        content: {
          quote: "Ease removes effort. Effort creates meaning.",
        },
      },
    ],
    cardConfig: {
      variant: "simple",
    },
  },

  {
    id: "essay-3",
    slug: "layered-interfaces",
    title: "Layered Interfaces",
    theme: "accent",
    tag: "essay",
    subtitle:
      "Modern interfaces are no longer surfaces—they are stacks of interacting systems.",
    cardImage: {
      src: "/images/essays/layers.jpg",
      alt: "Layered UI",
    },
    keywords: ["ui"],
    author: { name: "AI", image: "", bio: "" },
    meta: { readingTime: 11, createdAt: "2026-03-05" },
    blocks: [
      {
        id: "b1",
        type: "quote",
        content: {
          quote:
            "Interfaces are no longer surfaces—they are negotiations between layers.",
        },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "Each layer introduces its own logic, its own rules, its own constraints. Together, they form a system that is more complex than any individual part.",
        },
      },
    ],
  },

  {
    id: "essay-4",
    slug: "digital-imperfection",
    title: "Digital Imperfection",
    theme: "muted",
    tag: "essay",
    subtitle:
      "Imperfection reintroduces presence into otherwise sterile systems.",
    cardImage: {
      src: "/images/essays/noise.jpg",
      alt: "Noise texture",
    },
    keywords: ["imperfection"],
    author: { name: "AI", image: "", bio: "" },
    meta: { readingTime: 9, createdAt: "2026-03-08" },
    blocks: [
      {
        id: "b1",
        type: "text",
        content: {
          text: "Perfect systems feel distant. They operate without resistance, removing any trace of effort.\n\nImperfection reintroduces tension. It creates variation, unpredictability, and presence.",
        },
      },
    ],
  },
];

/* =========================
   THEORIES (FIG + TABLE HEAVY)
========================= */

export const theories: LongFormType[] = [
  {
    id: "theory-1",
    slug: "entropy-model",
    title: "Entropy Model",
    theme: "primary",
    tag: "theory",
    subtitle: "All structured systems degrade over time, regardless of intent.",
    cardImage: {
      src: "/images/theory/entropy.jpg",
      alt: "Entropy diagram",
    },
    keywords: ["entropy"],
    author: { name: "System Archive", image: "", bio: "" },
    meta: { readingTime: 14, createdAt: "2026-03-01" },
    blocks: [
      {
        id: "b1",
        type: "fig",
        content: {
          image: {
            src: "/images/theory/entropy.jpg",
            alt: "Entropy stages",
          },
          title: "FIG_A — Entropy Progression",
          caption: "Ordered systems degrade into disorder.",
        },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "All systems tend toward disorder. This is not failure—it is structure unfolding over time.",
        },
      },
      {
        id: "b3",
        type: "table",
        content: {
          headers: ["Stage", "State", "Description"],
          rows: [
            {
              cells: [
                { content: "1" },
                { content: "Stable" },
                { content: "System holds structure" },
              ],
            },
            {
              cells: [
                { content: "2" },
                { content: "Degrading" },
                { content: "Inconsistencies accumulate" },
              ],
            },
            {
              cells: [
                { content: "3" },
                { content: "Collapsed" },
                { content: "Structure dissolves" },
              ],
            },
          ],
        },
      },
    ],
  },

  {
    id: "theory-2",
    slug: "failure-loops",
    title: "Failure Loops",
    theme: "secondary",
    tag: "theory",
    subtitle: "Systems rarely fail once—they fail repeatedly until collapse.",
    cardImage: {
      src: "/images/theory/failure.jpg",
      alt: "Loop diagram",
    },
    keywords: ["failure"],
    author: { name: "System Archive", image: "", bio: "" },
    meta: { readingTime: 11, createdAt: "2026-03-04" },
    blocks: [
      {
        id: "b1",
        type: "table",
        content: {
          headers: ["Loop", "Trigger", "Outcome"],
          rows: [
            {
              cells: [
                { content: "Retry" },
                { content: "Error" },
                { content: "Temporary recovery" },
              ],
            },
            {
              cells: [
                { content: "Repeat" },
                { content: "Unresolved state" },
                { content: "Strain increases" },
              ],
            },
            {
              cells: [
                { content: "Break" },
                { content: "Overload" },
                { content: "Collapse" },
              ],
            },
          ],
        },
      },
    ],
  },

  {
    id: "theory-3",
    slug: "void-principle",
    title: "Void Principle",
    theme: "muted",
    tag: "theory",
    subtitle: "Absence is not empty—it is a structural condition.",
    cardImage: {
      src: "/images/theory/void.jpg",
      alt: "Void composition",
    },
    keywords: ["void"],
    author: { name: "System Archive", image: "", bio: "" },
    meta: { readingTime: 8, createdAt: "2026-03-03" },
    blocks: [
      {
        id: "b1",
        type: "quote",
        content: {
          quote: "Absence defines the limits of presence.",
        },
      },
    ],
  },

  {
    id: "theory-4",
    slug: "disruption-framework",
    title: "Disruption Framework",
    theme: "accent",
    tag: "theory",
    subtitle: "Disruption is not chaos—it is a structural reset.",
    cardImage: {
      src: "/images/theory/disruption.jpg",
      alt: "Disruption model",
    },
    keywords: ["disruption"],
    author: { name: "System Archive", image: "", bio: "" },
    meta: { readingTime: 10, createdAt: "2026-03-02" },
    blocks: [
      {
        id: "b1",
        type: "fig",
        content: {
          image: {
            src: "/images/theory/disruption.jpg",
            alt: "Disruption cycles",
          },
          title: "FIG_B — Disruption Cycle",
        },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "Disruption interrupts equilibrium and forces systems into adaptation.",
        },
      },
    ],
  },
];
