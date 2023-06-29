export const PageTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="dashboard font-bold text-xl pb-4 dark:text-neutral-400">
      {title}
    </h3>
  );
};
