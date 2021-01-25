import { renderHook, act } from "@testing-library/react-hooks";

import useVisualMode from "hooks/useVisualMode";


/*
const FIRST = "FIRST";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);


});

const SECOND = "SECOND";

test("useVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});
*/
const FIRST = "FIRST";
const SECOND = "SECOND";
const THIRD = "THIRD";
//const FOURTH = "FOURTH";
//const FIFTH =
/* "FIFTH";
const SIXTH = "SIXTH";

test("useVisualMode should return to previous mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));
  expect(result.current.mode).toBe(FIRST);
  
  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
  
  act(() => result.current.transition(THIRD));
  expect(result.current.mode).toBe(THIRD);
  
  act(() => result.current.transition(FOURTH));
  expect(result.current.mode).toBe(FOURTH);

  act(() => result.current.transition(FIFTH));
  expect(result.current.mode).toBe(FIFTH);
  
  act(() => result.current.transition(SIXTH));
  expect(result.current.mode).toBe(SIXTH);
  
  act(() => result.current.back());
  expect(result.current.mode).toBe(FIFTH);
  
  act(() => result.current.back());
  expect(result.current.mode).toBe(FOURTH);
  
  act(() => result.current.back());
  expect(result.current.mode).toBe(THIRD);
  /*
  act(() => result.current.back());
  expect(result.current.mode).toBe(SECOND;
  
});
*/

test("useVisualMode should return to previous mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.transition(THIRD));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(SECOND);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test("useVisualMode should not return to previous mode if already at initial", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});

test("useVisualMode should replace the current mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);

  // Passing "true" to transition(THIRD, true) says "Transition to THIRD by REPLACING SECOND"
  act(() => result.current.transition(THIRD, true));
  expect(result.current.mode).toBe(THIRD);

  act(() => result.current.back());
  expect(result.current.mode).toBe(FIRST);
});