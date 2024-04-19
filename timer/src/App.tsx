import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import TimerContextProvider from "./store/Timer-Context.tsx";

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimerContextProvider>
  );
}

export default App;