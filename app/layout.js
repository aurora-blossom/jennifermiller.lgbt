import './bulma.min.css';
import './styles.css';
import TitleBar from "./titlebar";
import NavBar from "./navbar";

export const metadata = {
  title: "Jennifer Miller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='app'>
          <TitleBar/>
          <NavBar/>
          {children}
        </div>
      </body>
    </html>
  );
}
