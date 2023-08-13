interface SocialLinkProps {
  href: string;
  tippyContent: string;
  children: React.ReactNode;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  tippyContent,
  children,
  className,
}) => (
  <a className={className} href={href} data-tippy-content={tippyContent}>
    {children}
  </a>
);
