
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  description: string;
  week: number;
  day: number;
  status: TaskStatus;
  estimatedMinutes: number;
  url?: string;
}

export interface TimelineItem {
  id: number;
  date: string; // ISO
  title: string;
  description: string;
  tag?: string;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "AI vs ML vs DL basics",
    description: "Watch intro videos about AI, ML, and Deep Learning. Take notes.",
    week: 1,
    day: 1,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=2ePf9rue1Ao"
  },
  {
    id: 2,
    title: "Python basics – variables & control flow",
    description: "Start Python course, cover variables, data types, if/else and loops.",
    week: 1,
    day: 2,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=rfscVS0vtbw"
  },
  {
    id: 3,
    title: "Python functions & practice problems",
    description: "Write small functions and solve practice problems using loops and functions.",
    week: 1,
    day: 3,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=rfscVS0vtbw&t=7200s"
  },
  {
    id: 4,
    title: "Lists & dictionaries",
    description: "Learn Python lists, dictionaries, tuples and basic scripts.",
    week: 1,
    day: 4,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=rfscVS0vtbw&t=10800s"
  },
  {
    id: 5,
    title: "Install and explore NumPy & Pandas",
    description: "Set up virtualenv, install NumPy and Pandas and test simple snippets.",
    week: 1,
    day: 5,
    status: "todo",
    estimatedMinutes: 60,
    url: "https://www.youtube.com/watch?v=QUT1VHiLmmI"
  },
  {
    id: 6,
    title: "NumPy crash course",
    description: "Work through a NumPy tutorial: arrays, indexing, reshaping, operations.",
    week: 1,
    day: 6,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=QUT1VHiLmmI"
  },
  {
    id: 7,
    title: "Pandas crash course",
    description: "Learn DataFrame basics, loading CSVs, filtering and grouping.",
    week: 1,
    day: 7,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=vmEHCJofslg"
  },
  {
    id: 8,
    title: "Statistics basics for ML",
    description: "Mean, variance, standard deviation and basic distributions.",
    week: 2,
    day: 8,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=xxpc-HPKN28"
  },
  {
    id: 9,
    title: "Probability & Bayes rule intuition",
    description: "Conditional probability, Bayes rule, correlation vs causation.",
    week: 2,
    day: 9,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=xxpc-HPKN28&t=2400s"
  },
  {
    id: 10,
    title: "Linear algebra for ML",
    description: "Vectors, matrices, dot product and matrix multiplication.",
    week: 2,
    day: 10,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=fNk_zzaMoSs"
  },
  {
    id: 11,
    title: "Calculus intuition for ML",
    description: "Understand derivatives and gradients for optimization.",
    week: 2,
    day: 11,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=WUvTyaaNkzM"
  },
  {
    id: 12,
    title: "Intro to supervised & unsupervised learning",
    description: "Watch ML course intro and learn about train/validation/test splits.",
    week: 2,
    day: 12,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=7eh4d6sabA0"
  },
  {
    id: 13,
    title: "First ML model in scikit-learn",
    description: "Implement linear regression or KNN on a simple dataset.",
    week: 2,
    day: 13,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=7eh4d6sabA0&t=1800s"
  },
  {
    id: 14,
    title: "Overfitting, underfitting & evaluation metrics",
    description: "Learn accuracy, precision, recall and F1-score.",
    week: 2,
    day: 14,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=7eh4d6sabA0&t=3600s"
  },
  {
    id: 15,
    title: "Neural networks basics",
    description: "Perceptron, activation functions, forward pass concept.",
    week: 3,
    day: 15,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=aircAruvnKk"
  },
  {
    id: 16,
    title: "Deep learning course session",
    description: "Watch 1–2 lectures on building deep neural networks.",
    week: 3,
    day: 16,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=CS4cs9xVecg"
  },
  {
    id: 17,
    title: "Build a simple neural network",
    description: "Use Keras or PyTorch to train a small network on MNIST or similar dataset.",
    week: 3,
    day: 17,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=CS4cs9xVecg&t=3600s"
  },
  {
    id: 18,
    title: "Convolutional Neural Networks (CNNs)",
    description: "Understand filters, stride, padding and pooling.",
    week: 3,
    day: 18,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=YRhxdVk_sIs"
  },
  {
    id: 19,
    title: "Build a simple CNN classifier",
    description: "Train a CNN on an image dataset such as digits or cats vs dogs.",
    week: 3,
    day: 19,
    status: "todo",
    estimatedMinutes: 150,
    url: "https://www.youtube.com/watch?v=YRhxdVk_sIs&t=2400s"
  },
  {
    id: 20,
    title: "RNNs and LSTMs",
    description: "Learn sequence modeling concepts for text and time series.",
    week: 3,
    day: 20,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=AsNTP8Kwu80"
  },
  {
    id: 21,
    title: "Mini project polish",
    description: "Pick one project and clean code, comments, plots and README.",
    week: 3,
    day: 21,
    status: "todo",
    estimatedMinutes: 150,
    url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ"
  },
  {
    id: 22,
    title: "Transformers & attention (high level)",
    description: "Learn what transformers are and why attention is powerful.",
    week: 4,
    day: 22,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=TQQlZhbC5ps"
  },
  {
    id: 23,
    title: "Build a GPT from scratch – theory walkthrough",
    description: "Skim a 'GPT from scratch' video to understand tokenization, attention and training loop.",
    week: 4,
    day: 23,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=kCc8FmEb1nY"
  },
  {
    id: 24,
    title: "Play with an open-source LLM",
    description: "Use an LLM (API or local) and test prompts for Q&A and summarisation.",
    week: 4,
    day: 24,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=JTxsNm9IdYU"
  },
  {
    id: 25,
    title: "Learn prompt engineering techniques",
    description: "Role prompting, step-by-step reasoning, few-shot examples, constraints.",
    week: 4,
    day: 25,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=YEe7Cf5hGVA"
  },
  {
    id: 26,
    title: "Create your own prompt library",
    description: "Organise prompts for coding, learning, automation and writing.",
    week: 4,
    day: 26,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=wVzuvf9D9BU"
  },
  {
    id: 27,
    title: "Explore AI productivity tools",
    description: "Test multiple AI tools on your daily workflow and compare.",
    week: 4,
    day: 27,
    status: "todo",
    estimatedMinutes: 120,
    url: "https://www.youtube.com/watch?v=ZOqUoV1qM7Q"
  },
  {
    id: 28,
    title: "Review & reflection",
    description: "Write a 1–2 page summary of what you learned and next topics to study.",
    week: 4,
    day: 28,
    status: "todo",
    estimatedMinutes: 90,
    url: "https://www.youtube.com/watch?v=0o_NlX2ZPIo"
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    date: "2025-11-28T09:00:00.000Z",
    title: "Started AI learning journey",
    description: "Created my 4-week AI learning plan and set up the tracker.",
    tag: "Milestone"
  },
  {
    id: 2,
    date: "2025-11-29T18:30:00.000Z",
    title: "Finished Python Day 1",
    description: "Completed basics of Python variables, data types and simple scripts.",
    tag: "Python"
  },
  {
    id: 3,
    date: "2025-12-02T20:00:00.000Z",
    title: "Trained first ML model",
    description: "Built and evaluated a simple scikit-learn model on a CSV dataset.",
    tag: "Machine Learning"
  }
];
