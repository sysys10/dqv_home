import React, { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: ReactNode;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <div className="text-xl">{subtitle}</div>}
    </div>
  );
}
