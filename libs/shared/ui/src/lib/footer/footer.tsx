import { FacebookIcon, GithubIcon, LinkedinIcon } from './Icons';
import footer from '../../data/footer';
export type TSocial = {
  href: string;
  name: string;
  icon: string;
};

const RenderIcon = (props: { name: string; className: string }) => {
  const icons: { [key: string]: JSX.Element } = {
    facebook: <FacebookIcon {...props} />,
    github: <GithubIcon {...props} />,
    linkedin: <LinkedinIcon {...props} />,
  };
  return icons[props.name];
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {footer?.social?.map((item: TSocial) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <RenderIcon
                name={item.icon}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 Khaled Mahmoud.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
