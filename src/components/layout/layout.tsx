import {Fragment } from 'react';

import MainNavigation from './main-navigation';

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
