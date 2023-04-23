const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function getTodo() {
  for (const [idx, url] of urls.entries()) {
    const todo = await fetch(url);
    console.log(`Retorno todo ${idx + 1}, ${todo}`);
  }
}

getTodo();
