interface ServerToClientEvents {
  updateCode: (message: string) => void;
}

interface ClientToServerEvents {
  update: (message: string) => void;
}

export type { ServerToClientEvents, ClientToServerEvents };
