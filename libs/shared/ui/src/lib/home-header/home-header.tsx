import headers from '../../data/headers';
import CodeBox from '../code-box/code-box';

export function HomeHeader() {
  const {
    home: { description, title },
  } = headers;

  const code = `
  {
  "name": "khaled",
  "skills": ["javascript","typescript","react","reactNative","css","html","git"]
}
 `;

  const tabs = [
    {
      name: 'khaled.me.json',
      code: code,
      language: 'json',
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-2 py-8 mt-5">
      <div className="overflow-hidden dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
        <p className="inline bg-gradient-to-r dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 from-indigo-400 via-sky-600 to-indigo-400 bg-clip-text font-display text-5xl tracking-tight text-transparent">
          {title}
        </p>
        <p className="mt-3 text-2xl tracking-tight text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
      <CodeBox tabs={tabs} />
    </div>
  );
}
