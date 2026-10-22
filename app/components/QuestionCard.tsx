interface QuestionCardProps {
  prompt: string;
  answer: string;
}

export default function QuestionCard({ prompt, answer }: QuestionCardProps) {
  return (
    <div className="flex flex-col justify-between h-full p-6 gap-4">
      <p className="font-[family-name:var(--font-lato)] text-xs font-semibold uppercase tracking-widest text-[#887F89] dark:text-[#BEB5C0]">
        {prompt}
      </p>
      <p className="font-[family-name:var(--font-sourceserif4)] text-2xl leading-snug text-[#1A1A1A] dark:text-[#FFFEFD]">
        {answer}
      </p>
    </div>
  );
}
