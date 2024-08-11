import { IAccount } from "./Type/IAccount";

export class DataClass {
  account: IAccount = {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  };
  JWT: string[] = [
    // "Bearer 1723184128233uTjfSdybiIwrh1lHrGKyaGP5FU7vi4VQYSpav1nVgHlOnPESZ4MzC6NHmVtAWJaO7214361095",
    "Bearer 1723196898466QBR6eY3IA86EHkDlZLlzHbrxI8eAE4THiqcu6Xi2PxPJmGO61XyepLQIqrB3w0Rh820847218",
  ];
  actions = {
    isTap: true,
    isSwipe: true,
  };
}

export const data = new DataClass();
