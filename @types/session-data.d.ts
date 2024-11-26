import '@fastify/secure-session';

declare module '@fastify/secure-session' {
  interface SessionData {
    user: {
      username: string;
      age: number;
    };
  }
}
