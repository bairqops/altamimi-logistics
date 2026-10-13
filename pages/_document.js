import {Html,Head,Main,NextScript} from 'next/document';
export default function Document(props){const locale=props.__NEXT_DATA__.props.pageProps.locale||'en';return <Html lang={locale} dir={locale==='ar'?'rtl':'ltr'}><Head><link rel="stylesheet" href="/fonts/fonts.css"/></Head><body><Main/><NextScript/></body></Html>}
