import './bulma.min.css';
import './styles.css';
import TitleBar from "./titlebar";

export const metadata = {
  title: "Jennifer Miller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='app'>
          <TitleBar/>
          {children}
        </div>
      </body>
    </html>
  );
}
