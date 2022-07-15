import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
} from '@k-workspace/shared/svg';
import footer from '../../data/footer';
export type TSocial = {
  href: string;
  name: string;
  icon: string;
};

const RenderIcon = (props: { name: string; className: string }): any => {
  const icons: { [key: string]: JSX.Element } = {
    facebook: <FacebookIcon {...props} />,
    github: <GithubIcon {...props} />,
    linkedin: <LinkedinIcon {...props} />,
  };
  return icons[props.name];
};

export function Footer() {
  return (
    <footer className="bg-lightBg dark:bg-darkBg py-5 absolute bottom-0 w-full">
      <div className="container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {footer?.social?.map((item: TSocial) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lightIcon dark:text-darkIcon dark:hover:text-lightIcon hover:text-darkIcon transition-all"
            >
              <RenderIcon
                name={item.icon}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <h4 className="text-center text-3xl font-black text-lightText dark:text-darkText uppercase ">
            K
            <span className="inline bg-gradient-to-r from-indigo-200  via-sky-400 to-indigo-200 bg-clip-text tracking-tight text-transparent">
              .
            </span>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
