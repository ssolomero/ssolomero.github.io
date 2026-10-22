import Image from "next/image";
import Card from "./Card";

interface AboutAttribute {
  label: string;
  value: string;
  subvalue?: string;
  icon: string;
}

const attributes: AboutAttribute[] = [
  { label: "College", value: "Georgia Tech", subvalue: "B.S. in Computational Media", icon: "🎓" },
  { label: "Occupation", value: "UI/UX Engineer", icon: "💼" },
  { label: "Location", value: "Austin, TX", icon: "📍" },
];

export default function AboutCard() {
  return (
    <div className="flex w-100 flex-col items-start gap-4">
      <Card className="w-100 cards-reveal">
        {/* Photo */}
        <div className="flex justify-center pt-6 pb-2">
          <div className="profile-photo-glow relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-[#D8D2D9] dark:ring-[#665F68]">
            <Image
              src="/Pola 10.jpg"
              alt="Profile photo"
              fill
              className="scale-[1.2] object-cover object-top"
              priority
            />
          </div>
        </div>

        <h1 className="name-fade-in px-5 pt-4 pb-2 font-[family-name:var(--font-lato)] text-3xl font-bold tracking-tight text-left text-[#1A1A1A] dark:text-[#FFFEFD]">
          Sharence
        </h1>

        {/* Attribute grid */}
        <div className="divide-y divide-[#EEE9EF] dark:divide-[#393439]">
          {attributes.map(({ label, icon, value, subvalue }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-3.5">
              <span className="text-lg leading-none">{icon}</span>
              <div className="min-w-0 font-[family-name:var(--font-lato)]">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#887F89] dark:text-[#BEB5C0]">
                  {label}
                </p>
                <p className="text-sm font-bold text-[#3E3941] dark:text-[#F4EFF5] truncate">
                  {value}
                </p>
                {subvalue && (
                  <p className="text-sm font-bold text-[#3E3941] dark:text-[#F4EFF5] truncate">
                    {subvalue}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
