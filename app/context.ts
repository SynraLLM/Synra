import { createContext } from "react";
import { WebLLMApi } from "./client/WebLLM";
import { ModelRecord } from "./client/api";
import { MlcLLMApi } from "./client/mlcllm";

export const WebLLMContext = createContext<WebLLMApi | undefined>(undefined);
export const MLCLLMContext = createContext<MlcLLMApi | undefined>(undefined);
