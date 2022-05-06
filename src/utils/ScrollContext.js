import { createContext } from "react";

const ScrollContext = createContext({ scrollPosition: 1, setscrollPosition: (newScrollPosition) => {} });

export default ScrollContext;
