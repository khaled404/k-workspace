import headers from '../../data/headers';
import CodeBox from '../code-box/code-box';

export function HomeHeader() {
  const {
    home: { description, title },
  } = headers;

  const code = `
{
  "FullName": "Khaled Mahmoud Mohamed",
  "Email": "khaled.ma805@gmail.com",
  "Phone": "01069926643",
  "Address": "6th of October"
}
 `;

  const tabs = [
    {
      name: 'info.me.json',
      code: code,
      language: 'json',
    },
  ];
  return (
    <div className="container mx-auto md:grid  md:grid-cols-2 py-8 mt-5 md:px-0 px-4">
      <div className="overflow-hidden md:px-0 pb-8">
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
