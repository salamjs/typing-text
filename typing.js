const sleep = delay => new Promise(
  resolve => setTimeout(resolve, delay)
);

const typing = async (
  selector,
  text,
  delay,
  speed = 50,
  i = 0
) => {
  if (delay && i === 0) {
    await sleep(delay)
  }

  const el = document.querySelector(selector);

  if (i === 0) {
    el.textContent = ''
  }

  el.textContent += text[i];

  if (i === text.length - 1) return;

  setTimeout(
    () => typing(selector, text, delay, speed, i + 1),
    speed
  )
}

typing(
  '#title', 
  'Lorem, ipsum.'
)
typing(
  '#text',
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi enim amet debitis, autem unde quae."
)