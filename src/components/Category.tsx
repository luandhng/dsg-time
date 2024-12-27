interface Props {
  text: string;
  children: React.ReactNode;
}

export const Category = ({ text, children }: Props) => {
  return (
    <div className="space-y-2">
      <h1 className="bg-neutral-800 p-2">{text}</h1>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
