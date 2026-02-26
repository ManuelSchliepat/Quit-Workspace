// ============================================================
// CATEGORIES
// ============================================================
const CATEGORIES = [
  {
    id: 'fitness',
    name: 'Fitness & Health',
    icon: '💪',
    color: '#e74c3c',
    subtitle: 'Build the body, fuel the mind',
    sections: [
      { id: 'workout',     label: 'Workout of the Day' },
      { id: 'nutrition',   label: 'Nutrition Tip' },
      { id: 'sleep',       label: 'Sleep & Recovery' },
      { id: 'mindset_fit', label: 'Mindset & Motivation' },
      { id: 'supplements', label: 'Supplement Stack' },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Wealth',
    icon: '💰',
    color: '#27ae60',
    subtitle: 'Build generational wealth',
    sections: [
      { id: 'market',        label: 'Market Snapshot' },
      { id: 'money_tip',     label: 'Daily Money Tip' },
      { id: 'crypto',        label: 'Crypto Update' },
      { id: 'goal_finance',  label: 'Goal Progress Check' },
      { id: 'wealth_wisdom', label: 'Wealth Wisdom' },
    ],
  },
  {
    id: 'career',
    name: 'Career & Business',
    icon: '🚀',
    color: '#2980b9',
    subtitle: 'Dominate your domain',
    sections: [
      { id: 'productivity', label: 'Productivity Tip' },
      { id: 'skill',        label: 'Skill of the Week' },
      { id: 'networking',   label: 'Networking Move' },
      { id: 'hustle',       label: 'Side Hustle Idea' },
      { id: 'leadership',   label: 'Leadership Lesson' },
    ],
  },
  {
    id: 'cars',
    name: 'Cars & Gear',
    icon: '🚗',
    color: '#8e44ad',
    subtitle: 'Machines, tech & tools',
    sections: [
      { id: 'car_news',    label: 'Car News' },
      { id: 'gadget',      label: 'Gadget of the Day' },
      { id: 'maintenance', label: 'Maintenance Tip' },
      { id: 'gear_review', label: 'Gear Review' },
    ],
  },
  {
    id: 'travel',
    name: 'Travel & Adventure',
    icon: '✈️',
    color: '#16a085',
    subtitle: 'Explore the world boldly',
    sections: [
      { id: 'destination',    label: 'Destination Spotlight' },
      { id: 'travel_hack',    label: 'Travel Hack' },
      { id: 'adventure_gear', label: 'Adventure Gear' },
      { id: 'bucket_list',    label: 'Bucket List Idea' },
    ],
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '🏆',
    color: '#f39c12',
    subtitle: 'Win on every field',
    sections: [
      { id: 'highlights', label: 'Highlights & Scores' },
      { id: 'training',   label: 'Training Tip' },
      { id: 'fantasy',    label: 'Fantasy Pick' },
      { id: 'athlete',    label: 'Athlete Spotlight' },
    ],
  },
  {
    id: 'style',
    name: 'Style & Grooming',
    icon: '👔',
    color: '#c0392b',
    subtitle: 'Look sharp, feel sharp',
    sections: [
      { id: 'outfit',    label: 'Outfit of the Day' },
      { id: 'grooming',  label: 'Grooming Tip' },
      { id: 'trend',     label: 'Trend Watch' },
      { id: 'essential', label: 'Wardrobe Essential' },
    ],
  },
  {
    id: 'food',
    name: 'Food & Cooking',
    icon: '🍳',
    color: '#e67e22',
    subtitle: 'Master the kitchen',
    sections: [
      { id: 'recipe',    label: 'Recipe of the Day' },
      { id: 'technique', label: 'Cooking Technique' },
      { id: 'restaurant',label: 'Restaurant Pick' },
      { id: 'grill',     label: 'Grill Master Tip' },
    ],
  },
  {
    id: 'gaming',
    name: 'Gaming & Entertainment',
    icon: '🎮',
    color: '#1abc9c',
    subtitle: 'Level up your downtime',
    sections: [
      { id: 'game_news',   label: 'Game News' },
      { id: 'pro_tip',     label: 'Pro Strategy' },
      { id: 'upcoming',    label: 'Upcoming Releases' },
      { id: 'game_review', label: 'Game Review' },
    ],
  },
  {
    id: 'mindset',
    name: 'Mindset & Self',
    icon: '🧠',
    color: '#9b59b6',
    subtitle: 'Sharpen the mind, lead with purpose',
    sections: [
      { id: 'philosophy',    label: 'Daily Philosophy' },
      { id: 'confidence',    label: 'Confidence Builder' },
      { id: 'communication', label: 'Communication Tip' },
      { id: 'stoicism',      label: 'Stoic Insight' },
    ],
  },
];

// ============================================================
// DEFAULT ENABLED SECTIONS PER CATEGORY
// ============================================================
const DEFAULT_SECTIONS = {
  fitness:  ['workout', 'nutrition', 'mindset_fit'],
  finance:  ['market', 'money_tip', 'goal_finance'],
  career:   ['productivity', 'skill', 'hustle'],
  cars:     ['car_news', 'gadget', 'gear_review'],
  travel:   ['destination', 'travel_hack', 'bucket_list'],
  sports:   ['highlights', 'training', 'athlete'],
  style:    ['outfit', 'grooming'],
  food:     ['recipe', 'grill'],
  gaming:   ['game_news', 'pro_tip', 'game_review'],
  mindset:  ['philosophy', 'confidence', 'stoicism'],
};

// ============================================================
// SECTION ACCENT COLORS (cycle per section index)
// ============================================================
const SECTION_COLORS = [
  '#5b8ef0', '#e74c3c', '#27ae60', '#f39c12',
  '#9b59b6', '#16a085', '#e67e22', '#c0392b',
  '#1abc9c', '#8e44ad',
];

// ============================================================
// BRIEFING CONTENT POOL
// Each section has an array of {brief, medium, detailed} entries.
// The daily entry is selected by day-of-year modulo pool length.
// ============================================================
const BRIEFING_CONTENT = {

  // ── FITNESS ──────────────────────────────────────────────
  workout: [
    {
      brief:    'Push-pull-legs: chest & triceps focus today.',
      medium:   'Push-pull-legs split. Today: chest & triceps. Bench press 4×8, incline DB press 3×10, cable fly 3×12, tricep pushdowns 4×15.',
      detailed: 'Push-pull-legs — chest & triceps day.\n• Flat bench press: 4×8 @ 80% 1RM\n• Incline dumbbell press: 3×10\n• Cable fly: 3×12\n• Tricep pushdowns: 4×15\n• Overhead tricep extension: 3×12\nRest 90s between sets. Focus on mind-muscle connection on the fly.',
    },
    {
      brief:    'Pull day: back & biceps — rows and curls.',
      medium:   'Pull day. Deadlift 3×5, barbell row 4×8, pull-ups 3×failure, hammer curls 3×12.',
      detailed: 'Pull day — back & biceps.\n• Conventional deadlift: 3×5 @ 85% 1RM\n• Barbell row: 4×8\n• Pull-ups: 3×failure\n• Face pulls: 3×15\n• Hammer curls: 3×12\n• Concentration curls: 3×10\nThink about pulling elbows to hips on rows.',
    },
    {
      brief:    'Leg day: squats, lunges, calves.',
      medium:   'Leg day. Squat 4×6, leg press 3×12, Romanian deadlift 3×10, calf raises 4×20.',
      detailed: 'Leg day — quads, hamstrings, glutes.\n• Back squat: 4×6 @ 82% 1RM\n• Leg press: 3×12\n• Romanian deadlift: 3×10\n• Leg curl: 3×12\n• Bulgarian split squat: 3×8/leg\n• Calf raises: 4×20\nFilm your squat to check depth and form.',
    },
    {
      brief:    'HIIT: 20 min, 40/20 intervals. Maximum effort.',
      medium:   'HIIT cardio. 20 min, 40s work / 20s rest. Burpees, mountain climbers, jump squats, high knees. 4 rounds.',
      detailed: 'HIIT Protocol — 20 minutes total.\nRound A (4 cycles): Burpees 40s / rest 20s → Mountain climbers 40s / rest 20s\nRound B (4 cycles): Jump squats 40s / rest 20s → High knees 40s / rest 20s\nCooldown: 5 min walk + stretch. HR target: 85–95% max.',
    },
  ],

  nutrition: [
    {
      brief:    '1g protein per lb bodyweight today.',
      medium:   'Target 1g protein per lb bodyweight. Prioritize whole sources: chicken, eggs, Greek yogurt, cottage cheese.',
      detailed: 'Protein target: 1g per lb (2.2g/kg).\nTop sources: chicken breast (31g/100g), eggs (6g each), Greek yogurt (17g/cup), cottage cheese (25g/cup), tuna (30g/can).\nFront-load protein at breakfast to hit targets and reduce cravings later.',
    },
    {
      brief:    'Cut sugar, not calories. Read your labels.',
      medium:   'Reduce added sugar below 25g today. Hidden sources: sauces, flavored yogurt, energy drinks. Read the label.',
      detailed: 'Added sugar goal: <25g today.\nHidden traps:\n• Granola bars: 12–20g\n• Flavored yogurt: 15–20g\n• Bottled iced tea: 30–40g\n• Sauces/dressings: 5–10g per tbsp\nSwaps: Whole fruit → juice, plain yogurt + berries, black coffee.',
    },
    {
      brief:    'Hydrate: 3L of water before 6pm.',
      medium:   'Drink 3L of water before 6pm. Add electrolytes if you trained. Dehydration kills strength output by 5–10%.',
      detailed: 'Hydration protocol:\n• Morning: 500ml before coffee\n• Training: 250ml every 15–20 min\n• Total goal: 3–4L\n• Add electrolytes (Na, K, Mg) on training days.\n2% body water loss = 5–10% drop in strength and cognitive output.',
    },
    {
      brief:    'Meal prep Sunday: cook proteins in bulk.',
      medium:   'Prep proteins in bulk on weekends. 2kg chicken, 12 boiled eggs, cooked quinoa — removes daily decision fatigue.',
      detailed: 'Meal prep template:\n• 2kg chicken breast — bake 200°C, 25 min, season salt/garlic/olive oil\n• 12 hard-boiled eggs\n• Cooked quinoa or rice (500g dry)\n• Chopped vegetables\nStore separately. Assembles 12+ meals in 90 minutes.',
    },
  ],

  sleep: [
    {
      brief:    'Aim for 7–9h. Lights out 30 min earlier tonight.',
      medium:   'Sleep is your strongest anabolic. 7–9h target. Wind-down 30 min before bed: dim lights, no screens, cool room.',
      detailed: 'Sleep optimization:\n1. Consistent sleep/wake times (weekends too)\n2. Room temp: 18–20°C\n3. Blackout curtains — darkness triggers melatonin\n4. No screens 30 min before bed\n5. No caffeine after 2pm\nTestosterone peaks in deep sleep stages 3–4. Losing 1h reduces T by ~15%.',
    },
    {
      brief:    'No caffeine after 2pm. Half-life is 6 hours.',
      medium:   'Caffeine half-life is ~6h. A coffee at 3pm = 50% active at 9pm. Cut off at 1–2pm for optimal sleep.',
      detailed: 'Caffeine pharmacokinetics:\n• Half-life: 5–7 hours\n• 200mg at 3pm = 100mg still in system at 9pm\nOptimal cutoff: 12–2pm depending on sensitivity.\nPost-2pm alternatives: herbal tea, electrolyte water, 5-min walk.',
    },
  ],

  mindset_fit: [
    {
      brief:    '"Discipline is the bridge between goals and accomplishment."',
      medium:   '"Discipline is the bridge between goals and accomplishment." — Jim Rohn. Motivation fades. Your system won\'t.',
      detailed: '"Discipline is the bridge between goals and accomplishment." — Jim Rohn\n\nMotivation is an emotion. It fluctuates. Discipline is a skill. It compounds.\n\nAction: Identify one habit you\'ve been skipping. Schedule it for a specific time today. Show up whether you feel like it or not.',
    },
    {
      brief:    'Seek discomfort deliberately. Hard reps build identity.',
      medium:   'Voluntary discomfort: cold shower, heavy lift, uncomfortable conversation. Each hard rep builds who you are.',
      detailed: 'The Stoic practice of voluntary discomfort (askesis):\nDeliberately choose difficulty as training.\n\nToday:\n• Cold shower — 2 minutes\n• Say the uncomfortable thing you\'ve been avoiding\n• Do one extra set when you want to quit\n\nThe man comfortable in discomfort is unbreakable.',
    },
    {
      brief:    '"We are what we repeatedly do." — Aristotle',
      medium:   '"Excellence is not an act, but a habit." — Aristotle. Check your daily defaults. Identity = your actions.',
      detailed: '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle\n\nYour identity is the sum of your actions, not your intentions.\n\nAudit: What are you becoming based on what you actually do — not what you plan to do?\n\nOne adjustment: Replace one passive default (scrolling) with one active investment today.',
    },
  ],

  supplements: [
    {
      brief:    'Creatine 5g/day. No loading needed.',
      medium:   'Creatine monohydrate: 5g/day, any time. Most studied supplement. Increases strength, power, and lean mass.',
      detailed: 'Creatine monohydrate — overwhelming evidence:\n• Dose: 5g/day (no loading phase needed)\n• Timing: any time — consistency is what matters\n• Mechanism: saturates phosphocreatine for ATP regeneration\n• Effects: +5–15% strength over 4–8 weeks, ~1–2kg lean mass\n• Safety: 30+ years of research, zero confirmed long-term harms\nBrand: any monohydrate (Creapure certified preferred).',
    },
    {
      brief:    'Vitamin D3 + K2: most men are deficient.',
      medium:   'Vitamin D3 (2000–4000 IU) + K2 (100mcg MK-7) daily. Supports testosterone, immune function, and bone density.',
      detailed: 'Vitamin D3 + K2 stack:\n• D3: 2000–4000 IU daily (higher if sun-deprived)\n• K2 (MK-7): 100mcg — directs calcium to bones, away from arteries\n\nDeficiency effects: low T, poor immune function, low mood, weak bones\nTest: 25-OH Vitamin D blood test — target 40–70 ng/mL\nTake with a fatty meal for best absorption.',
    },
  ],

  // ── FINANCE ──────────────────────────────────────────────
  market: [
    {
      brief:    'Diversify. No single asset > 10% of portfolio.',
      medium:   'Rule: no single asset should exceed 10% of your portfolio. Concentration amplifies both gains and losses.',
      detailed: 'Portfolio concentration risk:\nAny single position >10% is disproportionate risk.\n\nBenchmark allocation:\n• US equities: 40–60%\n• International equities: 15–25%\n• Bonds: 10–20%\n• Alternatives: 5–15%\n• Cash: 5–10%\n\nAction: Review your largest position today. Over 10%? Consider rebalancing on next contribution.',
    },
    {
      brief:    'S&P 500 avg return: ~10%/yr. Stay the course.',
      medium:   'S&P 500 avg return ~10% annually over 100+ years. Market timing fails 97% of professionals. Stay invested.',
      detailed: 'S&P 500 historical:\n• Average annual return: ~10% nominal, ~7% inflation-adjusted\n• Worst 10-year period: -1% (1999–2009)\n• Probability of positive return over 10 years: ~88%\n• Over 20 years: ~100%\n\nConclusion: Time in market beats timing the market. Add consistently, ignore noise.',
    },
  ],

  money_tip: [
    {
      brief:    'Pay yourself first: auto-transfer on payday.',
      medium:   'Automate savings. Auto-transfer to investment account on payday — before you see the money. Removes willpower.',
      detailed: 'Pay yourself first — the most powerful savings system:\n1. Open a separate high-yield savings or brokerage account\n2. Set automatic transfer for payday (same day)\n3. Start with 10% of net pay\n4. Increase 1% every 3 months\n\nPsychology: What you never see, you never miss.',
    },
    {
      brief:    'Track every expense for 30 days. No exceptions.',
      medium:   '30-day expense audit. Categorize every purchase. Most people find 3–5 subscriptions they forgot about.',
      detailed: '30-day expense audit:\n1. Export last 3 months of bank/card statements\n2. Categorize: fixed essentials, variable essentials, discretionary, subscriptions\n3. Target: find $200+ in monthly waste\n\nCommon leaks:\n• Forgotten subscriptions: avg $219/month\n• Eating out: avg $166/week for men\n\nTool: YNAB, Copilot, or a simple spreadsheet.',
    },
  ],

  crypto: [
    {
      brief:    'Only invest what you can lose 100% of. Seriously.',
      medium:   'Crypto allocation rule: 1–5% of portfolio max. Treat as high-risk speculation, not investment. Never borrow to buy.',
      detailed: 'Crypto allocation framework:\n• Conservative: 0–1% of portfolio\n• Moderate: 1–5%\n• Aggressive: 5–10% (understand the risk)\n\nPrinciples:\n1. Never invest borrowed money\n2. Hardware wallet for long-term holds\n3. BTC and ETH = lower risk within crypto\n4. Altcoins = essentially venture bets\n5. Dollar-cost average, don\'t time bottoms.',
    },
  ],

  goal_finance: [
    {
      brief:    'Review your 3 financial goals. Are you on track?',
      medium:   'Monthly financial goal check: savings rate, debt reduction, investment contributions. Adjust if needed.',
      detailed: 'Financial goal review:\n1. Emergency fund — current: ___ / target: 6 months expenses\n2. Debt payoff — balance: ___ / monthly payment: ___\n3. Investment contributions — YTD: ___ / annual goal: ___\n\nAction: Open your tracker now. Update numbers. Identify ONE thing to improve this month.\n\n"What gets measured, gets managed." — Drucker',
    },
  ],

  wealth_wisdom: [
    {
      brief:    '"The first rule of compounding: never interrupt it." — Munger',
      medium:   '"The first rule of compounding: never interrupt it unnecessarily." — Charlie Munger. Consistency over 20+ years is the strategy.',
      detailed: '"The first rule of compounding: never interrupt it unnecessarily." — Charlie Munger\n\nCompounding math at 10%/year:\n• $10k → 10 years: $25,937\n• $10k → 20 years: $67,275\n• $10k → 30 years: $174,494\n\nThe enemy: panic selling, emotional decisions, lifestyle inflation that stops contributions.\nThe strategy: consistent contributions + low fees + time + discipline.',
    },
    {
      brief:    '"Rich Dad Poor Dad": assets vs liabilities. Know the difference.',
      medium:   'Kiyosaki\'s core lesson: an asset puts money in your pocket. A liability takes money out. Accumulate assets.',
      detailed: 'Rich Dad Poor Dad — core framework:\n\nAsset: puts money in your pocket (rental income, dividends, royalties, business equity)\nLiability: takes money out (mortgage on primary home, car loan, credit card debt)\n\nMiddle-class trap: buy liabilities, call them assets.\n\nAction: List your top 5 monthly expenses. Which are assets generating return? Which are liabilities?\nGoal: increase assets-to-liabilities ratio every year.',
    },
  ],

  // ── CAREER ───────────────────────────────────────────────
  productivity: [
    {
      brief:    'Time-block your top 3 tasks before checking email.',
      medium:   'Start with 3 time-blocked deep work tasks (90 min). Check email twice only: 10am and 3pm.',
      detailed: 'Deep work protocol:\n1. Identify top 3 tasks the night before\n2. Time-block 9–11am for most cognitively demanding work\n3. Airplane mode during deep blocks\n4. Email windows: 10–10:30am, 3–3:30pm\n5. End each block with 5-min review\n\nResearch: Knowledge workers are interrupted every 3 min. 23 min to regain focus.',
    },
    {
      brief:    'The 2-minute rule: if it takes <2 min, do it now.',
      medium:   'David Allen\'s 2-minute rule: if a task takes under 2 minutes, do it immediately. Eliminates small-task backlog.',
      detailed: 'The 2-minute rule (David Allen, GTD):\nIf an action takes less than 2 minutes, do it immediately.\n\nWhy: Capturing and revisiting tiny tasks costs more than doing them. Prevents "open loops".\n\nExtended: After mastering 2 minutes, apply 5-minute rule for most email responses.',
    },
  ],

  skill: [
    {
      brief:    'This week: practice writing clearly and concisely.',
      medium:   'Writing is the highest-leverage business skill. Practice: one 200-word clear explanation of something complex today.',
      detailed: 'Writing as a leverage skill:\nPeople who write clearly think clearly. Writing = promotions, clients, influence.\n\n5-day practice:\n• Day 1: Rewrite an email using half the words\n• Day 2: Explain your job to a 12-year-old\n• Day 3: Write 3 bullet conclusions from a meeting\n• Day 4: Rewrite a confusing document you received\n• Day 5: Write your career vision in 150 words\n\nResource: "On Writing Well" — Zinsser',
    },
    {
      brief:    'Learn one keyboard shortcut in your main tool today.',
      medium:   'Keyboard shortcuts compound. Learn one per day in your primary tool. 10 shortcuts = 1–2 hours saved weekly.',
      detailed: 'Keyboard shortcut compound effect:\n1 shortcut saves ~3 seconds, used 20× per day = 60s/day = 6+ hours/year per shortcut.\n\nPriority tools to master:\n• Your IDE/editor (Ctrl+P, multi-cursor, refactor shortcuts)\n• Spreadsheets (Ctrl+Shift+L, Ctrl+T, Alt+= for sum)\n• Browser (Ctrl+L, Ctrl+W, Ctrl+Tab)\n• OS (Win+V clipboard, Win+Shift+S screenshot)\n\nAction: Find one shortcut you don\'t know yet. Use it 20 times today.',
    },
  ],

  networking: [
    {
      brief:    'Send one DM to someone you admire. Just start.',
      medium:   'DM one person in your field today. Comment on specific work, ask a genuine question. No pitch, no ask.',
      detailed: 'Cold outreach formula:\n[Specific compliment on work] + [Genuine question or insight] + [No ask]\n\nExample:\n"Hey [Name], your piece on [specific thing] changed how I approach [topic]. Quick question: how did you [specific detail]?"\n\nSuccess rate: 30–50% if specific and genuine (vs 2% with generic messages).\nDo this once/week = 52 meaningful connections/year.',
    },
  ],

  hustle: [
    {
      brief:    'Identify the skill you have that others will pay for.',
      medium:   'Skill monetization: list 5 things you\'re good at. Which has market demand? Validate on freelance platforms.',
      detailed: 'Side hustle audit:\n1. List 5 things you\'re better at than average\n2. For each: is there a market? (search Upwork, Fiverr, X)\n3. Pick highest demand + skill overlap\n4. Do one paid gig before building anything\n\nFastest monetized skills:\n• Copywriting / content writing\n• Video editing\n• Code review / dev work\n• Excel/data analysis\n• Consulting in your day-job field\n\nFirst goal: $500 in 30 days to validate.',
    },
  ],

  leadership: [
    {
      brief:    'Give credit publicly. Take responsibility privately.',
      medium:   'Praise in public, correct in private. Give credit loudly. Own failures before anyone can assign them.',
      detailed: 'Leadership through accountability:\n\nPraise publicly:\n• Attribute wins to the team specifically and loudly\n• "This succeeded because [Name] did [specific thing]"\n• People repeat what gets recognized\n\nOwn failures first:\n• "I should have caught this earlier"\n• Sets psychological safety for honest post-mortems\n\nJocko Willink: "Extreme Ownership — there are no bad teams, only bad leaders."',
    },
  ],

  // ── CARS & GEAR ──────────────────────────────────────────
  car_news: [
    {
      brief:    'EVs now 20% of new car sales globally.',
      medium:   'EVs hit 20% global new car sales. Best window for used EVs is now — depreciation is steep at 40–50%.',
      detailed: 'EV market snapshot 2025–26:\n• Global EV share: ~20% of new sales\n• China: 40%+ EV penetration\n• US: ~10%\n\nBest used EVs by value:\n• Tesla Model 3 LR AWD — best long-range\n• Hyundai IONIQ 6 — exceptional efficiency\n• Chevy Bolt — best value under $20k used\n\nTip: Charge to 80% daily to extend battery life 30–40%.',
    },
    {
      brief:    'Manual transmissions are coming back. Here\'s why.',
      medium:   'Manuals are resurging in sports car segments. Driver engagement, lower price, and lower theft rates are driving demand.',
      detailed: 'Manual transmission renaissance:\n\nWhy they\'re back:\n• Driver engagement and connection — can\'t get it in automatic\n• Lower MSRP: often $1,000–$2,000 cheaper\n• Theft deterrent: fewer people can drive them\n• Weight savings in small/sports cars\n\nBest manual picks 2025:\n• Mazda MX-5 Miata — benchmark roadster\n• Honda Civic Si / Type R — best hot hatches\n• Porsche 911 GT3 — last great supercar manual\n• Toyota GR86 — affordable sports car perfection\n\nFun stat: Only ~1.2% of US cars sold have manuals. Rare skill, rare fun.',
    },
  ],

  gadget: [
    {
      brief:    'Mechanical keyboard: Cherry MX Brown for typing/gaming.',
      medium:   'Best all-around switch: Cherry MX Brown or Gateron Brown. Tactile feedback without office-annoying click.',
      detailed: 'Mechanical keyboard guide:\n\nSwitch types:\n• Linear (Red): smooth, fast, gaming-preferred\n• Tactile (Brown): bump feedback, quiet — work/gaming hybrid\n• Clicky (Blue): audible click, satisfying, loud\n\nTop picks 2025:\n• Budget: Keychron K2 (~$90) — compact, wireless\n• Mid: GMMK Pro (~$170) — hot-swap, customizable\n• Premium: Keychron Q1 Max (~$260) — aluminum, wireless\n\nBonus: Foam mod for $5 in dampening foam — transforms sound profile.',
    },
    {
      brief:    'Anker 24,000mAh power bank: travel essential.',
      medium:   'Anker 737 Power Bank: 24,000mAh, 140W, charges laptop + 2 phones simultaneously. Best large power bank.',
      detailed: 'Power bank buying guide:\n\nSpec priorities:\n• Capacity: 10,000mAh = ~2.5 phone charges / 20,000mAh = ~5 charges\n• Output wattage: 65W+ for laptop charging, 20W+ for fast phone charging\n• Ports: USB-C PD + USB-A mix\n\nTop picks:\n• Anker 737 (24,000mAh, 140W): best for travel with laptop — ~$100\n• Anker 622 MagSafe (5,000mAh): slim MagSafe snap — ~$40\n• Baseus 65W (20,000mAh): budget laptop option — ~$55\n\nAirline rule: <100Wh in cabin without approval, 100–160Wh needs airline approval.',
    },
  ],

  maintenance: [
    {
      brief:    'Oil change every 7,500 mi (full synthetic).',
      medium:   'Full synthetic: change every 7,500–10,000 miles. Check tire pressure monthly — 1 PSI low = 0.2% MPG loss/tire.',
      detailed: 'Car maintenance schedule:\n• Engine oil: every 7,500–10,000 mi (full synthetic) or per manufacturer\n• Tire pressure: monthly — target is door jamb sticker PSI\n• Tire rotation: every 5,000–7,000 mi\n• Air filter: every 15,000–30,000 mi\n• Brake fluid: every 2 years\n• Cabin filter: every 15,000–25,000 mi\n\nDIY saves: Air filter ($20, 5 min), cabin filter ($15, 5 min). Never pay shop price for these.',
    },
  ],

  gear_review: [
    {
      brief:    'Leatherman Wave+: best EDC multitool. 25-year warranty.',
      medium:   'Leatherman Wave+: 18 tools, replaceable bits, 25-year warranty. Standard EDC recommendation.',
      detailed: 'Leatherman Wave+ — Editor\'s Pick\n\nTools: 18 (pliers, knives, saws, screwdrivers, file, scissors, wire cutters, bottle opener)\nMaterial: Stainless steel | Weight: 241g | Warranty: 25 years | Price: ~$100\n\nPros: All tools outside-accessible, replaceable bit system, legendary customer service\nCons: Heavier than Victorinox options\n\nAlternative: Victorinox SwissTool Spirit (lighter, Swiss quality) — $130',
    },
  ],

  // ── TRAVEL ───────────────────────────────────────────────
  destination: [
    {
      brief:    'Tbilisi, Georgia: cheap, beautiful, underrated.',
      medium:   'Tbilisi, Georgia: $40/day all-in, stunning architecture, incredible food, visa-free for most. Massively underrated.',
      detailed: 'Destination: Tbilisi, Georgia\n\nWhy go:\n• Daily budget: $30–50 (accommodation, food, transport)\n• Old Town: UNESCO-worthy medieval architecture\n• Food: Khachapuri (cheese bread), khinkali (dumplings)\n• Wine: cradle of wine civilization (8,000 years)\n• Visa: 365-day visa-free for most nationalities\n• People: extremely warm and hospitable\n\nBest time: May–June, September–October\nFlight hack: Istanbul connection often cheaper than direct',
    },
    {
      brief:    'Japan in spring: cherry blossoms + shoulder season.',
      medium:   'Japan late March–April: cherry blossom season. Book 4–6 months ahead. Tokyo → Kyoto → Osaka is the classic.',
      detailed: 'Japan cherry blossom trip:\n\nTimeline: Late March – mid April (varies, north to south)\nDuration: 10–14 days ideal\n\nRoute: Tokyo (3d) → Nikko (1d) → Kyoto (3d) → Nara (1d) → Osaka (2d)\n\nLogistics:\n• JR Pass: buy before arrival — 14-day ~$320\n• IC Card: for city transport\n• Book accommodations 4–6 months ahead\n\nBest spots: Ueno Park (Tokyo), Maruyama Park (Kyoto), Philosopher\'s Path (Kyoto)',
    },
  ],

  travel_hack: [
    {
      brief:    'Credit card travel points: $1k+ flights for free.',
      medium:   'Travel hacking: Chase Sapphire Preferred or Amex Gold sign-up bonuses = 2–3 free domestic or 1 international flight.',
      detailed: 'Travel credit card hacking:\n\nTop cards 2026:\n• Chase Sapphire Preferred: 60k points signup ($750 travel) — $95/yr fee\n• Amex Gold: 60k points, 4x dining/groceries — $250/yr fee\n• Capital One Venture X: 75k miles, $300 travel credit — effective $95/yr\n\nStrategy:\n1. Pick one card, hit spending requirement\n2. Transfer to airline/hotel partner for max value\n3. Never carry a balance — interest wipes all rewards\n\n$95 annual fee = easily offset by one lounge visit + one upgraded flight.',
    },
  ],

  adventure_gear: [
    {
      brief:    'Osprey Atmos 65: best hiking pack under $300.',
      medium:   'Osprey Atmos AG 65L: best ventilated hiking backpack, Anti-Gravity suspension, lifetime warranty. ~$270.',
      detailed: 'Osprey Atmos AG 65 — Gear Editor Pick\n\nCapacity: 65L (ideal for 3–7 day trips)\nKey feature: Anti-Gravity suspension — eliminates back sweat\nWeight: 2.2kg | Warranty: Lifetime (All Mighty Guarantee) | Price: ~$270\n\n5-day pack list:\n• Sleeping bag (compressible): 1.5–2kg\n• Tent: 1–1.5kg\n• Clothes: 3–4kg\n• Food/water: varies\n• First aid + tools: 0.5kg',
    },
  ],

  bucket_list: [
    {
      brief:    'Patagonia W Trek: 5–7 days of world-class hiking.',
      medium:   'Torres del Paine W Trek, Chile: 5–7 days, one of the world\'s best hikes. Book refugios 6–12 months ahead.',
      detailed: 'Bucket List: Torres del Paine W Trek, Chile\n\nDuration: 5–7 days | Distance: ~80km | Difficulty: Moderate–Challenging\nHighlights: Las Torres granite towers, Grey Glacier, Valle del Francés\n\nLogistics:\n• Base: Puerto Natales → park entrance (1.5h bus)\n• Accommodation: CONAF refugios or camping (book 6–12 months online)\n• Best season: November–March\n• Gear: Waterproof everything — weather changes hourly\n• Budget: ~$300–500 for W Trek logistics\n\nLife-changing. Non-negotiable bucket list item.',
    },
    {
      brief:    'Ride a motorcycle across a country. Plan it this year.',
      medium:   'Motorcycle road trips: Route 66 (US), Ha Giang Loop (Vietnam), or Alps crossing. Plan one for this year.',
      detailed: 'Motorcycle expedition bucket list:\n\nTop routes globally:\n• Route 66, USA: 4,000km, iconic, beginner-friendly\n• Ha Giang Loop, Vietnam: 350km, dramatic karst mountains — rent locally (~$10/day)\n• Alpine circuit: Switzerland/Austria/Italy — full Alps experience\n• Silk Road segments: Kyrgyzstan + Kazakhstan for the adventurous\n\nGear minimum for any trip:\n• Full-face helmet (DOT/ECE rated)\n• Armored jacket and pants\n• Boots with ankle protection\n• Gloves\n\nStart: Weekend overnight trip first to build navigation and camping confidence.',
    },
  ],

  // ── SPORTS ───────────────────────────────────────────────
  highlights: [
    {
      brief:    'Check ESPN or BBC Sport for today\'s scores.',
      medium:   'Live scores: ESPN app or BBC Sport. Check morning roundup for overnight international results.',
      detailed: 'Morning sports roundup sources:\n• ESPN app — US sports + global coverage\n• BBC Sport — football/rugby/cricket\n• The Athletic — deep dives, no fluff\n• Eurosport — cycling, tennis, motorsport\n\nSetting up alerts:\n• ESPN app → notifications → favorite teams\n• Google: type team name for live score widget\n• Yahoo Sports — fantasy + live scores integrated',
    },
  ],

  training: [
    {
      brief:    'Zone 2 cardio: 45 min at conversational pace.',
      medium:   'Zone 2 (60–70% max HR): most effective for aerobic base. 3–4 sessions/week builds your engine for all sports.',
      detailed: 'Zone 2 training protocol:\n\nDefinition: 60–70% max HR (can hold a full conversation)\nMax HR estimate: 220 − age\n\nBenefits:\n• Builds mitochondrial density\n• Improves fat oxidation (fuel efficiency)\n• Foundation for all athletic performance\n• Active recovery between hard sessions\n\nProtocol: 45–60 min, 3–4x per week (bike, row, run, swim)\nElite athletes: 80% of training volume in Zone 2.',
    },
  ],

  fantasy: [
    {
      brief:    'Stream defense against bottom-3 offense this week.',
      medium:   'Fantasy tip: stream D/ST against bottom-3 scoring offenses. Check injury report before Sunday.',
      detailed: 'Fantasy sports decision framework:\n\nWeekly process:\n• Monday: Add/drop — injured players out\n• Tuesday/Wednesday: official injury report\n• Thursday: lock lineup for Thursday game\n• Saturday: final injury updates\n• Sunday morning: last-minute swaps\n\nKey stats:\n• Vegas O/U: high total = more player opportunities\n• Target share %: WR/TE consistency metric\n• Snap count: volume = opportunity\n\nSource: FantasyPros consensus rankings for ADP and projections.',
    },
  ],

  athlete: [
    {
      brief:    'Study how elite athletes train mentally, not just physically.',
      medium:   'Mental training separates elite from good: visualization, process focus, emotional regulation.',
      detailed: 'Mental performance — what champions practice:\n\n1. Visualization: 10–15 min daily, vividly rehearse execution (Phelps, Kobe, Woods)\n2. Process focus: compete within each rep/play, not the scoreboard\n3. Breathing protocols: box breathing (4-4-4-4) pre-competition\n4. Journaling: post-session reflection — what worked, what to adjust\n5. Recovery mindset: sleep as weapon (Matthew Walker, "Why We Sleep")',
    },
  ],

  // ── STYLE ────────────────────────────────────────────────
  outfit: [
    {
      brief:    'Business casual: chinos + OCBD + leather derby.',
      medium:   'Business casual formula: slim chinos + Oxford button-down + leather derby. Polished, not stiff.',
      detailed: 'Business casual outfit formula:\n\nPieces:\n• Slim chinos: navy, stone, or khaki (no pleats)\n• Oxford cloth button-down: white, blue, or chambray\n• Derby or Chelsea boot: dark tan or cognac leather\n• Belt: matches shoe color\n\nUpgrade moves:\n• Add a wool blazer (no matching trousers) — instant 30% upgrade\n• Simple watch: Seiko 5, Orient, or Tissot\n• No tie, top button open\n\nAvoid: Brown shoes + black belt, baggy fit, novelty prints.',
    },
    {
      brief:    'Smart casual: dark jeans + tee + clean leather trainers.',
      medium:   'Smart casual weekend: dark slim jeans + fitted tee (no graphics) + clean white leather sneakers. Effortless.',
      detailed: 'Smart casual formula:\n\nFoundation:\n• Dark slim or straight jeans (no distressing for smart)\n• Fitted t-shirt: no graphics, solid color (white, navy, grey, black)\n• Clean leather or suede sneakers: Nike Air Force 1, Adidas Stan Smith, Common Projects dupes\n\nAdd one upgrade:\n• Unstructured linen blazer (summer)\n• Overshirt/flannel open over tee (autumn)\n• Simple leather watch or minimalist NATO strap\n\nFit is everything: try a size down if unsure.',
    },
  ],

  grooming: [
    {
      brief:    'Face wash AM/PM + SPF 30+ every morning.',
      medium:   'Non-negotiable grooming: face wash twice daily, SPF 30+ every morning (biggest anti-aging move). Moisturize after.',
      detailed: 'Men\'s skincare — minimum effective routine:\n\nMorning:\n1. Gentle face wash (CeraVe Hydrating or La Roche-Posay)\n2. Niacinamide serum (optional but excellent for pores)\n3. Moisturizer SPF 30+ (La Roche-Posay Anthelios or EltaMD)\n\nEvening:\n1. Face wash\n2. Retinol (if 25+) — start 2x/week\n3. Moisturizer\n\nCost: ~$60 total, lasts 3+ months.\nSPF = single most impactful anti-aging product.',
    },
  ],

  trend: [
    {
      brief:    'Quiet luxury: no logos, quality fabrics, neutral palette.',
      medium:   'Quiet luxury: clean cuts, premium fabrics, neutral palette. Focus spend on fit and fabric, not brand name.',
      detailed: 'Quiet luxury aesthetic guide:\n\nPrinciple: Signal wealth through quality, not logos.\n\nPalette: Cream, camel, navy, gray, stone, black\nFabrics: Wool, cashmere, cotton, linen (avoid polyester in tailored pieces)\n\nAccessible brands:\n• Banana Republic flagship stores\n• J.Crew, Uniqlo premium line\n• & Other Stories\n\nFits: Tailored and intentional — never oversized in formal pieces\n\nKey pieces: Camel overcoat, white OCBD, navy wool blazer, slim dark trousers.',
    },
  ],

  essential: [
    {
      brief:    'White OCBD shirt: most versatile piece you\'ll own.',
      medium:   'White Oxford cloth button-down: wear with blazer (business), jeans (casual), or suit (formal). Infinite uses.',
      detailed: 'The Oxford Cloth Button-Down (OCBD) — wardrobe cornerstone\n\nVersatility: maximum\n\nWith:\n• Suit (no tie): business formal\n• Blazer + chinos: business casual\n• Jeans + clean trainers: smart casual\n• Untucked + shorts: weekend casual\n\nBest options:\n• Budget: Uniqlo Oxford Slim-Fit (~$30)\n• Mid: J.Crew Signature Oxford (~$60)\n• Premium: Brooks Brothers Original Polo (~$80)\n\nCare: Machine wash cold, hang to dry, iron collar/placket.',
    },
  ],

  // ── FOOD ─────────────────────────────────────────────────
  recipe: [
    {
      brief:    'Pan-seared chicken + roasted veg. 30 min, high protein.',
      medium:   'Pan-seared chicken breast, roasted broccoli + sweet potato. 40g protein, 30 min total.',
      detailed: 'Pan-seared chicken with roasted vegetables\nTime: 30 min | Serves: 2 | ~450 kcal, 40g protein\n\nIngredients: 2 chicken breasts, broccoli, sweet potato, olive oil, garlic powder, salt, pepper, paprika\n\nMethod:\n1. Oven 200°C. Toss veg in oil + seasoning, roast 25 min.\n2. Season chicken, sear in cast iron 3–4 min/side.\n3. Finish in oven 8–10 min (internal temp 74°C).\n4. Rest 3 min before cutting.\n\nPro tip: Brine chicken 30 min in salt water for juicier result.',
    },
    {
      brief:    'Overnight oats: 5 min prep, 40g protein breakfast.',
      medium:   'Overnight oats: oats + Greek yogurt + milk + protein powder + berries. 5 min prep, eat cold in morning.',
      detailed: 'High-protein overnight oats\nTime: 5 min prep | Serves: 1 | ~550 kcal, 40g+ protein\n\nIngredients:\n• 80g rolled oats\n• 150g Greek yogurt (0% fat)\n• 150ml milk of choice\n• 1 scoop whey protein (vanilla or unflavored)\n• 1 tbsp chia seeds\n• Handful frozen berries\n• Drizzle honey (optional)\n\nMethod: Combine all, stir, refrigerate overnight.\n\nVariations:\n• Chocolate: cocoa powder + chocolate protein\n• PB: peanut butter + banana',
    },
  ],

  technique: [
    {
      brief:    'Master knife skills first: julienne, brunoise, chiffonade.',
      medium:   'Knife skills are the foundation. Practice julienne (matchsticks) and brunoise (tiny dice) — everything follows.',
      detailed: 'Essential knife techniques:\n\n1. Julienne: fine matchstick cuts (3mm × 5cm)\n   Use: stir-fry, salads, garnish\n\n2. Brunoise: tiny dice (3mm cubes)\n   Method: julienne first, then rotate and dice\n\n3. Chiffonade: thin ribbon cuts of leafy herbs\n   Method: stack leaves, roll tightly, slice across\n\n4. Rock chop: herb mincing\n   Hold tip down, rock heel in arc\n\nMost important: Keep your blade sharp. A dull knife is more dangerous than a sharp one.',
    },
  ],

  restaurant: [
    {
      brief:    'Find a Japanese izakaya near you. Worth it every time.',
      medium:   'Izakaya (Japanese gastropub): small plates, good beer/sake, casual social atmosphere. Find one near you.',
      detailed: 'The izakaya experience:\n\nWhat: Japanese gastropub — casual, communal, food-forward\n\nMust-order:\n• Yakitori: grilled chicken skewers (tsukune = meatball is best)\n• Karaage: Japanese fried chicken\n• Edamame: steamed + salted\n• Gyoza: pan-fried dumplings\n\nDrinks:\n• Sapporo or Kirin draft\n• Highball (Japanese whisky + soda)\n• Sake: junmai daiginjyo for premium\n\nEtiquette: Share everything, order in rounds, kanpai before drinking.',
    },
  ],

  grill: [
    {
      brief:    'Reverse sear: oven low + screaming-hot sear = perfect steak.',
      medium:   'Reverse sear: cook steak in 120°C oven to 10°F below target, then blast in cast iron. Better than traditional.',
      detailed: 'Reverse sear — perfect steak every time\n\nFor: ribeye, NY strip, tomahawk (1.5–2 inches thick)\n\nMethod:\n1. Season steak generously: salt, pepper\n2. Rest in fridge uncovered 1–24h (dry brine)\n3. Oven: 120°C on wire rack, cook to 49°C internal\n4. Remove, rest 10 min, pat dry\n5. Cast iron screaming hot: 45s per side + butter, rosemary, garlic\n6. Target: 54°C internal = medium-rare\n\nWhy: Even doneness edge-to-edge, no gray ring.\nTool: Instant-read thermometer is mandatory.',
    },
  ],

  // ── GAMING ───────────────────────────────────────────────
  game_news: [
    {
      brief:    'Check IGN or Kotaku for today\'s releases and updates.',
      medium:   'Top gaming news: IGN, Eurogamer, The Verge gaming. Check patch notes for your main game.',
      detailed: 'Gaming news sources:\n\nHard news:\n• IGN (ign.com) — comprehensive, review scores\n• Kotaku — editorial, culture, industry\n• The Verge Gaming — tech-focused\n\nDeep reads:\n• Eurogamer — quality long-form\n• Rock Paper Shotgun — best indie coverage\n\nHardware:\n• Digital Foundry — technical analysis\n• Tom\'s Hardware — GPU/CPU benchmarks\n\nDeal alerts:\n• /r/gamedeals — Steam sales, free games\n• IsThereAnyDeal.com — price tracking across stores',
    },
  ],

  pro_tip: [
    {
      brief:    'Review your FPS deaths: 80% are positioning errors.',
      medium:   'In FPS, analyze your death cam. Most deaths are positioning and pre-aim, not raw aim. Fix position first.',
      detailed: 'Improving FPS performance:\n\n1. Positioning (most impactful):\n• Play angles with cover at back\n• Never peek without information\n• Off-angle play — don\'t stand where expected\n\n2. Pre-aim:\n• Crosshair at head height, always\n• Pre-aim common spots before peeking\n• 80% of "aim" is crosshair placement\n\n3. Warm-up:\n• 15 min aim trainer (Aim Lab, KovaaK) before ranked\n• Deathmatch for muscle memory\n\n4. VOD review:\n• Watch your deaths: "Was this peek justified?"',
    },
  ],

  upcoming: [
    {
      brief:    'Check Steam Next Fest for upcoming game demos.',
      medium:   'Steam Next Fest happens twice yearly — best source for upcoming indie demos. Wishlist early to track releases.',
      detailed: 'Tracking upcoming releases:\n\nSources:\n• Steam wishlist + email notifications\n• IsThereAnyDeal.com — price history + release tracking\n• /r/patientgamers — buy at $10 strategy\n• HowLongToBeat — time investment info\n\nKey events:\n• Steam Next Fest (June, October) — free demos\n• Summer Game Fest — major announcements\n• The Game Awards (December) — reveals\n\nTip: Wait 6–12 months post-release for patches + price drops on single-player games.',
    },
  ],

  game_review: [
    {
      brief:    'Elden Ring: still the benchmark for open world design.',
      medium:   'Elden Ring (2022): benchmark for open world design. Unmatched exploration and build variety. Play it if you haven\'t.',
      detailed: 'Game review: Elden Ring\nRating: Masterpiece\n\nDeveloper: FromSoftware | Genre: Action RPG\n\nWhy it matters:\n• Open world: zero hand-holding — you discover everything\n• Build variety: 8 classes, hundreds of viable endgame builds\n• Boss design: industry-defining fights\n• Lore: written by George R.R. Martin — dense, rewarding\n\nDifficulty: Challenging but never unfair. Mastery feels earned.\nTime: 60h main story, 100–120h full completion\n\nVerdict: Most impactful game of the decade.',
    },
  ],

  // ── MINDSET & SELF ────────────────────────────────────────
  philosophy: [
    {
      brief:    '"The obstacle is the way." — Marcus Aurelius',
      medium:   '"What stands in the way becomes the way." — Marcus Aurelius. Reframe your biggest obstacle as your training.',
      detailed: '"The impediment to action advances action. What stands in the way becomes the way." — Marcus Aurelius\n\nPractical application:\n• Name your current biggest obstacle\n• Ask: How does this obstacle teach or develop you?\n• Find the opportunity inside the resistance\n\nExamples:\n• Lost your job → forced to build the skill you were avoiding\n• Relationship ended → clarity on what you actually need\n\nStoic practice: Don\'t ask for fewer obstacles. Ask for the strength to turn them into fuel.',
    },
    {
      brief:    '"Between stimulus and response, there is a space." — Frankl',
      medium:   '"In that space lies our freedom." — Viktor Frankl. Practice pausing before reacting to anything today.',
      detailed: '"Between stimulus and response, there is space. In that space lies our freedom and our power to choose our response." — Viktor Frankl\n\nFrankl wrote this from Auschwitz — the ultimate test of this principle.\n\nPractice:\n1. When triggered, take 3 deep breaths before responding\n2. Ask: "Is this worth my energy?"\n3. Choose deliberately\n\nApplications:\n• Angry email: write the reply, wait 10 min, revise\n• Conflict: pause before counter-attack\n• Impulse purchase: 24-hour rule',
    },
  ],

  confidence: [
    {
      brief:    'Keep promises to yourself. That\'s where confidence comes from.',
      medium:   'Confidence is built by keeping commitments to yourself — not affirmations. Set one small goal today and keep it.',
      detailed: 'The real source of self-confidence:\n\nConfidence doesn\'t come from feeling good — it comes from evidence.\n\nEvery time you:\n• Say you\'ll wake up at 6am and do it\n• Say you\'ll train and you train\n• Keep a commitment when no one\'s watching\n\n...you deposit into your self-trust account.\n\nAffirmations without action = hollow.\nSmall kept promises = compound interest.\n\nAction: Set one micro-commitment (write it down). Keep it. Notice how you feel afterward.',
    },
  ],

  communication: [
    {
      brief:    'Ask more. Talk less. The confident man listens.',
      medium:   'Confident communication: ask questions, listen fully, speak with purpose. Most people fill silence with noise.',
      detailed: 'Communication as a masculine skill:\n\n1. Ask more than you tell:\n• People feel heard → they trust you\n• You gather information → better decisions\n\n2. Listen to understand, not respond:\n• Let them finish — fully\n• Reflect back: "What I\'m hearing is..."\n\n3. Speak with authority:\n• No filler words: um, like, sort of, maybe\n• Make declarative statements\n• Comfortable with silence\n\n4. Frame control:\n• Calmly redirect off-track conversations\n• Low reactivity = high status\n\nResource: "Never Split the Difference" — Chris Voss',
    },
  ],

  stoicism: [
    {
      brief:    '"You have power over your mind, not outside events." — M. Aurelius',
      medium:   '"You have power over your mind, not outside events. Realize this, and you will find strength." — Marcus Aurelius.',
      detailed: '"You have power over your mind, not outside events. Realize this, and you will find strength." — Marcus Aurelius\n\nThe dichotomy of control (Epictetus):\n\nIn your control: your judgements, desires, actions, character\nNot in your control: others\' actions, outcomes, reputation, circumstances\n\nStoic practice: At start of day, identify 3 things truly in your control. Focus effort only there.\n\nThe moment you try to control what\'s outside your power, you suffer.\nThe moment you focus only within it, you become free.',
    },
    {
      brief:    'Memento mori: remember you will die. Live accordingly.',
      medium:   'Memento mori — Stoic practice: reflect on mortality daily. It sharpens priorities and removes pettiness.',
      detailed: 'Memento mori — "remember that you will die"\n\nThe Stoic practice:\nSeneca, Aurelius, and Epictetus all meditated on death daily — not morbidly, but as a sharpening tool.\n\n"It is not death that a man should fear, but he should fear never beginning to live." — Marcus Aurelius\n\nPractical use:\n• Ask: If I had 1 year left, would I spend today as I plan to?\n• Ask: Which of today\'s worries will matter in 5 years?\n• Ask: What am I postponing that I actually value?\n\nResult: trivialities fall away. What matters becomes clear.',
    },
  ],
};

// ============================================================
// DAILY CONTENT SELECTOR
// Returns today's entry for a given section (rotates by date)
// ============================================================
function getDailyContent(sectionId) {
  const pool = BRIEFING_CONTENT[sectionId];
  if (!pool || pool.length === 0) return null;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return pool[dayOfYear % pool.length];
}
