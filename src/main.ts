export function greeting(): string {
  return "Hello, world!";
}

export async function main(): Promise<void> {
  console.log(greeting());
}

main();
