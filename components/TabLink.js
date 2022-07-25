import * as React from "react";
import Link from "next/link";
import { Tab } from "@mui/material";

const TabLinkRef = ({ forwardedRef, ...props }) => {
  const { href, as, replace, scroll, shallow, passHref, prefetch, ...rest } =
    props;

  const linkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
  };

  return (
    <Link {...linkProps}>
      <a {...rest} ref={forwardedRef} />
    </Link>
  );
};

const TabLinkComponent = React.forwardRef((props, ref) => (
  <TabLinkRef {...props} forwardedRef={ref} />
));

export const TabLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...tabProps
}) => {
  const linkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
  };
  return <Tab {...tabProps} {...linkProps} component={TabLinkComponent} />;
};
