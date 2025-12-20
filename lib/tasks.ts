export type Task={id:string;day:number;title:string;description:string;estimatedMinutes:number;videoId:string;url:string;lessonText:string;};
export const TASKS:Task[] = [
  {
    "id": "D1-T1",
    "day": 1,
    "title": "AI vs ML vs DL overview",
    "description": "Understand the map: AI \u27f6 ML \u27f6 Deep Learning, and why it matters.",
    "estimatedMinutes": 60,
    "videoId": "2ePf9rue1Ao",
    "url": "https://www.youtube.com/watch?v=2ePf9rue1Ao",
    "lessonText": "You learn the high-level map: AI is the broader goal, ML is learning from data, and DL is a subset of ML using neural networks. You also learn where rules-based systems fit and why data quality matters."
  },
  {
    "id": "D2-T1",
    "day": 2,
    "title": "Python basics for AI",
    "description": "Variables, loops, conditions \u2014 enough to start reading AI code.",
    "estimatedMinutes": 90,
    "videoId": "rfscVS0vtbw",
    "url": "https://www.youtube.com/watch?v=rfscVS0vtbw",
    "lessonText": "You practice writing small scripts, control flow, functions, and basic data types. The goal is to become comfortable reading and modifying code used in notebooks and ML projects."
  },
  {
    "id": "D3-T1",
    "day": 3,
    "title": "Numpy essentials",
    "description": "Arrays, shapes, vectorization \u2014 the building blocks of ML.",
    "estimatedMinutes": 75,
    "videoId": "QUT1VHiLmmI",
    "url": "https://www.youtube.com/watch?v=QUT1VHiLmmI",
    "lessonText": "You learn arrays, broadcasting, vectorized operations, and why performance matters. You should be able to reshape and manipulate tensors confidently."
  },
  {
    "id": "D4-T1",
    "day": 4,
    "title": "Pandas for datasets",
    "description": "Load, clean, filter, and explore datasets like a pro.",
    "estimatedMinutes": 90,
    "videoId": "vmEHCJofslg",
    "url": "https://www.youtube.com/watch?v=vmEHCJofslg",
    "lessonText": "You learn DataFrames, selecting/filtering, handling missing values, grouping/aggregations, and preparing features for training."
  },
  {
    "id": "D5-T1",
    "day": 5,
    "title": "Supervised learning intuition",
    "description": "Train/test split, overfitting, metrics \u2014 the core training loop.",
    "estimatedMinutes": 80,
    "videoId": "xxpc-HPKN28",
    "url": "https://www.youtube.com/watch?v=xxpc-HPKN28",
    "lessonText": "You learn the training loop, generalization, overfitting, and evaluation. You should understand why we split data and how metrics guide improvements."
  },
  {
    "id": "D6-T1",
    "day": 6,
    "title": "Neural networks basics",
    "description": "Perceptron, activation, backprop \u2014 why DL works.",
    "estimatedMinutes": 90,
    "videoId": "fNk_zzaMoSs",
    "url": "https://www.youtube.com/watch?v=fNk_zzaMoSs",
    "lessonText": "You learn neurons, layers, activations, and backprop at an intuitive level. You should be able to explain why depth helps and what gradients do."
  },
  {
    "id": "D7-T1",
    "day": 7,
    "title": "Your first model (end-to-end)",
    "description": "From dataset \u27f6 features \u27f6 training \u27f6 evaluation.",
    "estimatedMinutes": 120,
    "videoId": "kCc8FmEb1nY",
    "url": "https://www.youtube.com/watch?v=kCc8FmEb1nY",
    "lessonText": "You follow a full pipeline and learn the practical steps. The objective is not perfection; it is to build a mental template you can reuse."
  },
  {
    "id": "D8-T1",
    "day": 8,
    "title": "MLOps & tracking progress",
    "description": "Versioning, experiment logs, and keeping momentum.",
    "estimatedMinutes": 45,
    "videoId": "CS4cs9xVecg",
    "url": "https://www.youtube.com/watch?v=CS4cs9xVecg",
    "lessonText": "You learn how to track experiments, manage datasets, keep notes, and maintain consistency. This app mirrors that habit by tracking watch time and sessions."
  }
];
