import "@styles/globals.css";
import  Nav from '@components/Nav'
import  Provider from '@components/Provider'
import icon from '../public/light.png'


export const metadata = {
  title: "Lightme",
  description: "share your projects",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
    <link rel="icon" href={icon.src} />
    </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient'/>
        </div>


        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
