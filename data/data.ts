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
      src: "/images/logs/latency.webp",
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
        type: "image",
        content: {
          images: [
            {
              src: "/images/logs/latency-2.webp",
              alt: "UI lag motion blur",
            },
          ],
        },
        config: { variant: "cover" },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: `The "field note" isn't about accuracy; it's about the immediacy of the observation. In the neon-lit corridors of the underground district, the texture of the air feels like velvet and sandpaper. We captured the light as it fractured against the glass.`,
        },
        config: { variant: "normal" },
      },

      {
        id: "b3",
        type: "quote",
        content: {
          quote: "Luxury is the absence of noise.",
        },
        config: {
          variant: "log",
        },
      },
      {
        id: "b4",
        type: "text",
        content: {
          text: `We found the archive tucked between a server farm and a tailor shop. The juxtaposition was too perfect. High-fashion meets low-fidelity. We processed the images on-site, the heat from the machines warming the room.`,
        },
        config: { variant: "normal" },
      },
      {
        id: "b5",
        type: "image",
        content: {
          images: [
            {
              src: "/images/logs/log-uno.webp",
              alt: "silence",
            },
            {
              src: "/images/logs/log-deus.webp",
              alt: "silence",
            },
          ],
        },
      },
      {
        id: "b6",
        type: "text",
        content: {
          text: `The final logs show a steady decline in signal quality. We are entering the quiet zone. The monospaced future is here, typed on keys that clack like heavy machinery. End of transmission.`,
        },
        config: { variant: "normal" },
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
      src: "/images/logs/archive.webp",
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
      src: "/images/logs/interface.webp",
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
      src: "/images/logs/update.webp",
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
    title: "THE SILENCE OF THE [GRID].",
    theme: "primary",
    tag: "essay",
    subtitle:
      "A critical examination of the digital boundary, the violent precision of the layout, and the liberation found in aesthetic friction.",
    cardImage: {
      src: "/images/essays/grid.webp",
      alt: "Grid overlay",
    },
    keywords: ["design", "systems"],
    author: {
      name: "Julian Thorne",
      image: "/images/authors/julian.webp",
      bio: "Design critic exploring structured systems.",
    },
    meta: { readingTime: 14, createdAt: "2026-03-10" },
    blocks: [
      {
        id: "b3",
        type: "image",
        content: {
          images: [
            {
              src: "/images/essays/grid-detail.webp",
              alt: "Grid detail",
            },
          ],
        },
        config: { variant: "cover" },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "A system is most effective when it disappears. This does not mean that it is absent, but that it operates without drawing attention to itself. In design, this quality is often misunderstood. Many assume that clarity requires visibility—that in order for a system to be understood, it must be seen.\n\nBut visible systems compete with the content they are meant to support. They introduce their own logic, their own rhythm, their own presence. This creates friction—not the productive kind, but the kind that distracts.\n\nInvisible systems operate differently. They guide perception without becoming the focus of attention. Alignment, spacing, proportion—these elements shape experience quietly.\n\nThe grid is not seen. It is felt.",
        },
        config: { variant: "normal" },
      },
      {
        id: "b9",
        type: "text",
        content: {
          text: "The Vandal aesthetic is not merely a rejection of order; it is a hyper-fixation on the mechanics of that order. It is the architectural equivalent of leaving the scaffolding exposed on a luxury skyscraper. By highlighting the structure—the strokes, the offsets, the raw hex codes—we force a confrontation between the observer and the observed.",
        },
        config: { variant: "normal" },
      },

      {
        id: "b4",
        type: "quote",
        content: {
          quote:
            "True disruption does not come form intentional friction of a system that refuses to disappear.",
          author: "THE MANIFESTO OF VOGUE, 1994",
        },
        config: { variant: "essay" },
      },
      {
        id: "b5",
        type: "text",
        content: {
          text: "The Friction of Form",
        },
        config: { variant: "subheading" },
      },
      {
        id: "b6",
        type: "text",
        content: {
          text: "We have been conditioned to prefer the curve. The rounded corner, the soft shadow, the gentle transition. These are the aesthetics of sedation. Brutalism, however, demands an active participant. The 0px radius is an architectural refusal of the organic. It suggests that the digital space is a constructed reality, a machine of logic and light that owes nothing to the softness of the human form.",
        },
        config: { variant: "normal" },
      },
      {
        id: "b7",
        type: "card",
        content: {
          cards: [
            {
              title: "STRUCTURAL INTEGRITY",
              body: "The stroke is the boundary of thought. Without the 4px black rule, the content has no container, and without a container, the message is diluted by the infinite scroll.",
            },
            {
              title: "VIOLENT CONTRAST",
              body: "Electric Lime (#CCFF00) is not a color of nature. It is the color of the warning sign, the hazard tape, the glitch in the simulation.",
            },
          ],
        },
      },
      {
        id: "b8",
        type: "text",
        content: {
          text: `In the end, we seek a "Vogue" that is earned. Not a beauty inherited from classical proportions, but a beauty forged in the tension between the vandal's spray can and the curator's white glove. The essay you are reading is a testament to that tension. It is a series of blocks, stacked with aggressive precision, inviting you to trip over the margins.`,
        },
        config: { variant: "normal" },
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
      src: "/images/essays/friction.webp",
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
      src: "/images/essays/layers.webp",
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
      src: "/images/essays/noise.webp",
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
    title: "The Aesthetics of [Disruption]",
    theme: "primary",
    tag: "theory",
    subtitle:
      "An examination of the friction between high-fashion editorial systems and the raw velocity of urban graffiti.",
    cardImage: {
      src: "/images/theory/entropy.webp",
      alt: "Entropy diagram",
    },
    keywords: ["entropy", "disruption", "friction", "high-fashion"],
    author: { name: "System Archive", image: "", bio: "" },
    meta: { readingTime: 14, createdAt: "2026-03-01" },
    blocks: [
      {
        id: "b0",
        type: "author",
        content: {
          name: "CASSIAN VANE",
          image: {
            src: "/images/authors/julian.webp",
            alt: "cassian vane",
          },
          bio: "Exemplenary. or simply stunning.",
        },
        config: { variant: "theory" },
      },
      {
        id: "b1",
        type: "fig",
        content: {
          image: {
            src: "/images/theory/entropy.webp",
            alt: "Entropy stages",
          },
          title: "FIG_A — Entropy",
          caption: "Ordered systems degrade into disorder.",
        },
        config: { variant: "simple" },
      },
      {
        id: "b4",
        type: "text",
        content: {
          text: "01. The Void of Luxury",
        },
        config: { variant: "subheading" },
      },

      {
        id: "b5",
        type: "text",
        content: {
          text: "Luxury has long been defined by its exclusivity—a polished, untouchable surface designed to exclude the mundane. However, the rise of the Vandal Aesthetic marks a turning point where the sacred geometry of couture is intentionally fractured.",
        },
        config: { variant: "normal" },
      },
      {
        id: "b6",
        type: "text",
        content: {
          text: 'This "theology of the break" suggests that beauty is no longer found in perfection, but in the specific way an object fails to meet expectation. When a $5,000 blazer is treated with the same disregard as a subway wall, the hierarchy of value collapses.',
        },
        config: { variant: "normal" },
      },

      {
        id: "b7",
        type: "quoteCard",
        content: {
          quote:
            " The act of creation is always preceded by an act of destruction. To build the new editorial, we must first burn the old manuscript.",
        },
      },
      {
        id: "b8",
        type: "text",
        content: {
          text: 'This "theology of the break" suggests that beauty is no longer found in perfection, but in the specific way an object fails to meet expectation. When a $5,000 blazer is treated with the same disregard as a subway wall, the hierarchy of value collapses.',
        },
        config: { variant: "normal" },
      },
      {
        id: "b9",
        type: "text",
        content: {
          text: 'This "theology of the break" suggests that beauty is no longer found in perfection, but in the specific way an object fails to meet expectation. When a $5,000 blazer is treated with the same disregard as a subway wall, the hierarchy of value collapses.',
        },
        config: { variant: "normal" },
      },
      {
        id: "b2",
        type: "text",
        content: {
          text: "All systems tend toward disorder. This is not failure—it is structure unfolding over time.",
        },
        config: { variant: "normal" },
      },
      {
        id: "b3",
        type: "table",
        content: {
          headers: ["State", "Description"],
          rows: [
            {
              cells: [
                { content: "Stable" },
                { content: "System holds structure" },
              ],
            },
            {
              cells: [
                { content: "Degrading" },
                { content: "Inconsistencies accumulate" },
              ],
            },
            {
              cells: [
                { content: "Collapsed" },
                { content: "Structure dissolves" },
              ],
            },
          ],
        },
      },
      {
        id: "b10",
        type: "fig",
        content: {
          image: {
            src: "/images/theory/entropy.webp",
            alt: "Entropy stages",
          },
          title: "FIG_A — Entropy",
          caption: "Ordered systems degrade into disorder.",
        },
      },
      {
        id: "b11",
        type: "ref",
        content: {
          refs: [
            'Deleuze, G. & Guattari, F. (1987). "A Thousand Plateaus." University of Minnesota Press.',
            "Architecture of the Digital Abyss. Monograph Series 04.",
            'Vandal, V. (2022). "Concrete Sanctuaries: The New Luxury." Void Journal.',
            "Technical Monospace and Its Discontents. Typography Review, Autumn Edition.",
          ],
        },
      },
    ],
    cardConfig: {
      variant: "simple",
    },
  },

  {
    id: "theory-2",
    slug: "failure-loops",
    title: "Failure Loops",
    theme: "secondary",
    tag: "theory",
    subtitle: "Systems rarely fail once—they fail repeatedly until collapse.",
    cardImage: {
      src: "/images/theory/failure.webp",
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
      src: "/images/theory/void.webp",
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
      src: "/images/theory/disruption.webp",
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
            src: "/images/theory/disruption.webp",
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
