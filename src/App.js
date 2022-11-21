import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Cat } from "./components/Cat";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Cat />
      </div>
    </QueryClientProvider>
  );
}

export default App;
