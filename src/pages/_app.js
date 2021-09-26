import Theme from '../styles/theme';

export default function App({ Component, pageProps, Script }) {
  return (
    <>
    
      <Theme>
        <Component {...pageProps} />
        
      </Theme>
    </>
  );
}
 