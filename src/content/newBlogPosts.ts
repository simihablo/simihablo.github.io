export type BlogPostSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  category: 'AI' | 'Hiking' | 'Camping';
  tags: string[];
  readTime: string;
  intro: string;
  sections: BlogPostSection[];
};

export const newBlogPosts: BlogPost[] = [
  {
    id: 'practical-ai-for-infrastructure-engineers',
    title: 'Practical AI for Infrastructure Engineers: Start With the Runbook',
    excerpt: 'A grounded way to use AI in operations: begin with repeatable work, preserve review points, and keep the runbook as the source of truth.',
    date: '2026-09-01',
    displayDate: 'September 1, 2026',
    category: 'AI',
    tags: ['AI', 'Infrastructure', 'Automation', 'Runbooks'],
    readTime: '7 min read',
    intro: 'AI is most useful in infrastructure work when it helps us move through familiar, well-understood tasks faster. The goal is not to hand over production decisions; it is to create more time for the judgment calls that require context, experience, and accountability.',
    sections: [
      {
        title: 'Choose a narrow first use case',
        paragraphs: [
          'Start with work that already has a dependable sequence: summarizing an incident timeline, drafting a change plan from an approved template, or turning a noisy alert into a concise handoff. These tasks have inputs, expected outputs, and a human who can easily spot a bad answer.',
          'Avoid beginning with autonomous remediation. An assistant may produce a convincing command without knowing the full state of a cluster, the current maintenance window, or the customer impact. A small and reversible use case gives the team a chance to learn safely.'
        ],
        bullets: [
          'Summarize alerts, logs, and incident notes for an on-call handoff.',
          'Draft runbook steps from a known operational pattern.',
          'Suggest questions to ask before making a change.',
          'Turn a completed incident into a first-pass retrospective.'
        ]
      },
      {
        title: 'Keep the runbook in the loop',
        paragraphs: [
          'A useful AI workflow begins with trusted material. Give the assistant the current runbook, service ownership details, and the guardrails that already guide human operators. This makes the result more relevant and reinforces the documentation the team wants to maintain.',
          'When an answer exposes a gap in the runbook, fix the runbook rather than relying on a future prompt to remember the exception. Over time, the documentation becomes clearer for people and more useful as context for assistants.'
        ]
      },
      {
        title: 'Make review explicit',
        paragraphs: [
          'Treat generated output as a proposal. A named operator should verify assumptions, inspect every command that could change state, and confirm that the recommendation fits the current environment. The review is not a formality; it is where operational context enters the process.',
          'This approach creates a healthy division of labor. AI can reduce the blank-page problem and gather clues quickly, while engineers remain responsible for decisions, changes, and outcomes.'
        ]
      }
    ]
  },
  {
    id: 'ai-pairing-workflow-with-human-control',
    title: 'An AI Pairing Workflow That Keeps Humans in Control',
    excerpt: 'AI becomes a better teammate when each step has a clear owner, a visible review point, and a record of the reasoning behind the final decision.',
    date: '2026-08-20',
    displayDate: 'August 20, 2026',
    category: 'AI',
    tags: ['AI', 'Engineering', 'Collaboration', 'Reliability'],
    readTime: '6 min read',
    intro: 'The best AI workflow I have found feels less like delegation and more like pair programming. The assistant proposes, organizes, and challenges assumptions; the engineer defines the goal, checks the work, and makes the final call.',
    sections: [
      {
        title: 'Write the question before opening the tool',
        paragraphs: [
          'A vague prompt usually produces a vague result. Before asking for help, state the problem, the boundaries, and what a good answer must include. For an operational task, that can mean naming the affected service, the environment, the desired outcome, and the actions that are out of bounds.',
          'This small pause also clarifies whether the task should be automated at all. If the goal cannot be explained clearly enough for another engineer to review, it probably needs more investigation before an assistant is involved.'
        ]
      },
      {
        title: 'Use short loops instead of a single giant request',
        paragraphs: [
          'Break work into visible stages: understand the situation, propose options, select an approach, and prepare the change. Asking for one step at a time makes it easier to inspect the reasoning and correct course before an error compounds.',
          'Short loops also make collaboration easier. A teammate can review a proposed plan or a generated diff without having to reconstruct a long chain of hidden decisions.'
        ],
        bullets: [
          'Ask for a concise summary of the evidence.',
          'Request two or three approaches with trade-offs.',
          'Choose an approach and ask for an implementation checklist.',
          'Review the result against the original acceptance criteria.'
        ]
      },
      {
        title: 'Capture what changed the decision',
        paragraphs: [
          'The final answer matters, but the reason for choosing it matters too. Add the chosen approach, rejected alternatives, and any validation notes to the pull request or runbook. This keeps important context available after the chat or terminal session ends.',
          'Human control is strongest when it is built into the workflow, not added as a hurried approval at the end. Clear ownership, small reviewable steps, and durable notes make AI assistance easier to trust.'
        ]
      }
    ]
  },
  {
    id: 'safer-ai-assisted-kubernetes-operations',
    title: 'Building Safer AI-Assisted Kubernetes Operations',
    excerpt: 'Four practical guardrails for using AI around Kubernetes without turning suggestions into unchecked production changes.',
    date: '2026-08-05',
    displayDate: 'August 5, 2026',
    category: 'AI',
    tags: ['AI', 'Kubernetes', 'Security', 'Operations'],
    readTime: '8 min read',
    intro: 'Kubernetes has enough moving parts that a plausible suggestion is not the same thing as a safe change. AI can help operators understand manifests, write queries, and prepare troubleshooting steps, but the workflow must protect the cluster from confident mistakes.',
    sections: [
      {
        title: 'Separate observation from mutation',
        paragraphs: [
          'Start by giving AI read-only questions: explain a deployment manifest, compare two versions of a Helm value file, or draft a query for metrics that an operator will run. The moment a suggestion can change cluster state, it deserves a stronger review path.',
          'Keeping these modes separate makes intent clear. Everyone involved can see when the work moved from understanding a problem to proposing a production action.'
        ]
      },
      {
        title: 'Build guardrails around the environment',
        paragraphs: [
          'Use the same protections you would expect from any operational tool. Scope credentials to the smallest necessary permissions, require pull requests for declarative changes, and test manifests in a non-production environment before promotion.',
          'An assistant should not become a path around existing controls. If a change would normally require peer review, policy checks, or an approved maintenance window, generated commands and manifests should require them too.'
        ],
        bullets: [
          'Use read-only access for investigation tasks whenever possible.',
          'Require reviewable Git changes for desired-state updates.',
          'Validate manifests with the same policy and schema checks used by the team.',
          'Record the operator, intent, and rollback path before a production change.'
        ]
      },
      {
        title: 'Practice recovery before you need it',
        paragraphs: [
          'Every proposed change should include a rollback plan. Asking an assistant to identify a rollback is useful, but it must be checked against the actual deployment strategy and current application state.',
          'The objective is not to eliminate human effort. It is to use AI to reduce routine friction while preserving the habits that make operations resilient: observability, small changes, peer review, and fast recovery.'
        ]
      }
    ]
  },
  {
    id: 'weather-first-weekend-camping-checklist',
    title: 'A Weather-First Weekend Camping Checklist',
    excerpt: 'Build a better camping plan by reading the forecast first, then choosing shelter, clothing, food, and a turnaround plan that match the conditions.',
    date: '2026-07-19',
    displayDate: 'July 19, 2026',
    category: 'Camping',
    tags: ['Camping', 'Weather', 'Planning', 'Outdoors'],
    readTime: '5 min read',
    intro: 'A good camping weekend begins before the car is packed. The forecast is not a last-minute detail; it is the foundation for decisions about where to camp, what to bring, and when it is smarter to change the plan.',
    sections: [
      {
        title: 'Read the forecast as a set of conditions',
        paragraphs: [
          'Temperature tells only part of the story. Check wind, precipitation probability, overnight lows, humidity, and storm timing. A calm afternoon can turn into a cold, wet night when wind and rain arrive together.',
          'Use that information to pick a campsite with appropriate shelter and drainage. If the conditions are outside the comfort range of your gear or experience, choose a lower-risk route, a developed campground, or another weekend.'
        ]
      },
      {
        title: 'Pack in systems, not single items',
        paragraphs: [
          'Think of your gear as connected systems. Your shelter system includes the tent, footprint, stakes, rain fly, and a dry place for clothing. Your sleep system includes the bag, pad, layers, and a plan for staying dry. Missing one piece can undermine the rest.',
          'Pack the critical items where they are easy to reach. A rain jacket buried at the bottom of a full pack is less useful than one available before the first drops fall.'
        ],
        bullets: [
          'Shelter: tent, rain fly, stakes, ground protection, and a repair option.',
          'Sleep: temperature-rated bag, insulated pad, dry base layer, and warm socks.',
          'Safety: headlamp, first-aid kit, map, charged phone, and backup power.',
          'Food and water: more water than the minimum plan, treatment method, and simple meals.'
        ]
      },
      {
        title: 'Decide the turnaround point in advance',
        paragraphs: [
          'A weather-first plan includes a point where you will turn back or leave camp. Decide it while you are warm, dry, and looking at reliable information, not after fatigue or pride has made the decision harder.',
          'Changing a plan is not failing the trip. It is good judgment. The best camping memories come from returning home with energy to plan the next adventure.'
        ]
      }
    ]
  },
  {
    id: 'planning-a-lightweight-three-day-camp',
    title: 'Three Days on the Trail: Planning a Lightweight Camp',
    excerpt: 'A simple framework for balancing pack weight, comfort, food, water, and route choices on a short backcountry camping trip.',
    date: '2026-07-05',
    displayDate: 'July 5, 2026',
    category: 'Camping',
    tags: ['Camping', 'Backpacking', 'Hiking', 'Gear'],
    readTime: '7 min read',
    intro: 'Lightweight camping is not about owning the smallest version of everything. It is about carrying what supports a safe and enjoyable trip, while leaving behind the extras that make every climb and mile harder.',
    sections: [
      {
        title: 'Let the route shape the packing list',
        paragraphs: [
          'Start with distance, elevation, terrain, water sources, and expected conditions. A three-day route with reliable water and gentle trails calls for a different kit than one with exposed ridges and long dry sections.',
          'Write down the real constraints before comparing gear. This protects you from packing based on habit or on a gear list meant for a completely different environment.'
        ]
      },
      {
        title: 'Weigh the big items first',
        paragraphs: [
          'Your shelter, sleep system, backpack, food, and water make up the largest part of the load. Improving one of these categories usually matters more than obsessing over tiny accessories. Comfort also counts: an exhausted hiker with an ultralight pack is not necessarily having a better trip.',
          'Before buying anything, try removing duplicates, sharing group gear, and repackaging food into only what the trip requires. These low-cost changes often deliver the most noticeable weight savings.'
        ],
        bullets: [
          'Plan meals around calories, simplicity, and minimal cleanup.',
          'Carry water for the distance between verified sources, not for the whole route by default.',
          'Bring layered clothing that works together instead of separate outfits for each day.',
          'Leave a detailed trip plan with someone who is not joining the hike.'
        ]
      },
      {
        title: 'Test the complete setup close to home',
        paragraphs: [
          'Set up the tent, cook one meal, and sleep with the system before the trip. Testing in a backyard or local campground exposes missing stakes, an uncomfortable pad, or a stove you do not know how to use while the stakes are low.',
          'A lighter pack is valuable only when it still supports good decisions. The right balance is personal, route-specific, and worth revisiting after every trip.'
        ]
      }
    ]
  },
  {
    id: 'leave-no-trace-at-busy-campsites',
    title: 'Leave No Trace, Even When the Campsite Is Busy',
    excerpt: 'Busy campgrounds need extra care. Small choices around food, fires, water, noise, and waste help preserve the outdoors for everyone.',
    date: '2026-06-18',
    displayDate: 'June 18, 2026',
    category: 'Hiking',
    tags: ['Hiking', 'Camping', 'Leave No Trace', 'Stewardship'],
    readTime: '6 min read',
    intro: 'It is easy to think Leave No Trace matters only in remote places. In busy campgrounds and popular trails, thoughtful habits matter even more because the impact of small choices is multiplied by every visitor.',
    sections: [
      {
        title: 'Start with a plan that reduces pressure',
        paragraphs: [
          'Check local rules, reserve sites where required, and learn whether fires are allowed before you arrive. Choosing established trails and durable campsites protects vegetation and keeps new social paths from spreading into fragile areas.',
          'If a place is crowded, consider a less popular time, route, or destination. Flexibility is one of the simplest ways to reduce impact and often leads to a quieter, more enjoyable experience.'
        ]
      },
      {
        title: 'Keep food, water, and waste contained',
        paragraphs: [
          'Store food securely and never leave scraps for wildlife. Animals that learn to find food around people can become dependent or dangerous, and the consequences are rarely good for the animal or the next campers.',
          'Pack out everything that came with you, including small items such as wrappers, bottle caps, and food scraps. Follow local guidance for human waste, and wash dishes well away from streams and lakes using only the amount of water and soap that the situation allows.'
        ],
        bullets: [
          'Use established fire rings only when fires are permitted.',
          'Keep music and conversations at a level that lets nearby visitors hear the outdoors.',
          'Yield thoughtfully on narrow trails and greet other hikers with patience.',
          'Leave natural objects where they are for the next person to discover.'
        ]
      },
      {
        title: 'Make stewardship visible',
        paragraphs: [
          'You do not need to lecture other visitors to set a good example. A clean campsite, a quiet morning departure, and a willingness to pick up a stray piece of litter all communicate respect for the place.',
          'The outdoors is shared infrastructure. Taking care of a trail or campsite is a practical way to protect future adventures for hikers, campers, wildlife, and the communities that welcome us.'
        ]
      }
    ]
  }
];
