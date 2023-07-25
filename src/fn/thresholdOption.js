// set intersection observer scroll option

export default function thresholdOption(amount) {
  const threshold = [];
  const steps = amount;

  for (let i = 1; i <= steps; i++) {
    threshold.push(i / steps);
  }

  return threshold;
}
