export function getMMSS(time: string): string {
  const parseTime = Number(time);
  const minus = Math.floor(parseTime / 60);
  const second = parseTime % 60;
  return minus + ":" + second;
}
