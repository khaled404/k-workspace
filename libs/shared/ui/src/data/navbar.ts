export default {
  links: [
    { name: 'Home', href: '/', isActive: true },
    { name: 'Blogs', href: '/blogs', isActive: true },
    {
      name: 'Projects',
      href: '/projects',
      isActive: process.env.NODE_ENV === 'development',
    },
  ],
};
