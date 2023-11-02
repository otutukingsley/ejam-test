import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';
import classnames from 'classnames';
import 'scss/style.scss';

const manrope = Manrope({ subsets: [ 'latin' ] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ classnames('App', `${manrope.className}`) }>
      <Component { ...pageProps } />
    </div>
  );
}
