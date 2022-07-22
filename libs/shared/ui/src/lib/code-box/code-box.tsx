import { TrafficLightsIcon } from '@k-workspace/shared/svg';
import { classNames } from '@k-workspace/utils';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { Fragment, useEffect, useState } from 'react';
import { useTheme } from '@k-workspace/shared/context';
import themeDark from 'prism-react-renderer/themes/synthwave84';
import themeLight from 'prism-react-renderer/themes/nightOwlLight';

/* eslint-disable-next-line */
export interface CodeBoxProps {
  tabs?: {
    name: string;
    language: string;
    code: string;
  }[];
  language?: Language;
  code?: string;
}
const codeTheme = {
  dark: {
    ...themeDark,
    plain: {
      ...themeDark.plain,
      backgroundColor: 'transparent',
      background: 'transparent',
      backgroundImage: 'transparent',
    },
  },
  light: themeLight,
};

export function CodeBox({ tabs, language, code }: CodeBoxProps) {
  const { theme } = useTheme();
  const [activeCode, setActiveCode] = useState<any>(
    tabs ? tabs[0] : { code, language }
  );
  useEffect(() => {
    setActiveCode(tabs ? tabs[0] : { code, language });
  }, [tabs, language, code]);

  if (!theme) return <></>;
  return (
    <div className="relative rounded-2xl max-w-[100%] dark:bg-darkBoxBg bg-[#FBFBFB] ring-1 ring-white/10 backdrop-blur">
      <div className="pl-4 pt-4 max-w-[100%]">
        <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-500/30 " />
        <div className="mt-4 flex space-x-2 text-xs">
          {tabs?.map((tab) => (
            <div
              key={tab.name}
              className={classNames(
                'flex h-6 rounded-full',
                tab.name === activeCode.name
                  ? 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                  : 'text-slate-500'
              )}
            >
              <button
                onClick={() => {
                  setActiveCode(tab);
                }}
                className={classNames(
                  'flex items-center rounded-full px-2.5',
                  tab.name === activeCode.name && 'dark:bg-slate-800 bg-white'
                )}
              >
                {tab.name}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-start px-1 text-sm">
          <div
            aria-hidden="true"
            className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600 hidden sm:block"
          >
            {Array.from({
              length: activeCode.code.trim().split('\n').length,
            }).map((_, index) => (
              <Fragment key={index}>
                {(index + 1).toString().padStart(2, '0')}
                <br />
              </Fragment>
            ))}
          </div>
          <Highlight
            {...defaultProps}
            code={activeCode.code.trim()}
            language={activeCode.language}
            theme={codeTheme[theme]}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={classNames(className, 'flex overflow-x-auto pb-6')}
                style={style}
              >
                <code className="px-4">
                  {tokens.map((line, lineIndex) => (
                    <div key={lineIndex} {...getLineProps({ line })}>
                      {line.map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
}

export default CodeBox;
