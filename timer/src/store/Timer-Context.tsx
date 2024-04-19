import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timerCtx = useContext(TimersContext);

  if (timerCtx === null) {
    throw new Error("TimersContext is null - that should not be the case! ");
  }

  return timerCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
};

type StartTimersAction = {
  type: "START-TIMERS";
};

type StopTimersAction = {
  type: "STOP_TIMERS";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case "START-TIMERS":
      return {
        ...state,
        isRunning: true,
      };

    case "STOP_TIMERS":
      return {
        ...state,
        isRunning: false,
      };

    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            duration: action.payload.duration,
          },
        ],
      };
  }
}

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },

    startTimers() {
      dispatch({ type: "START-TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
