import Login from './components/Login.jsx';

function getAppName(){
  const search = window.location.search
  const searchParams = new URLSearchParams(search);
  const appname = searchParams.get('app');
  return appname
}

function App() {
  return (
    <>
      <Login app={getAppName()}/>
    </>
  );
}

export default App;