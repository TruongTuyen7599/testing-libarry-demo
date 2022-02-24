import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ListUser from "./component/ListUser";

const clientQuery = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <div className="App">
          <ListUser></ListUser>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
