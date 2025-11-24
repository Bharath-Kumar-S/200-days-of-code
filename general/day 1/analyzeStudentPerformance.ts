// Your challenge is to create a TypeScript function named analyzeStudentPerformance().
// This function will take a string of logs as input and return an array of arrays.
// Each array represents a student's ID, score, number of successfully solved problems, and the total fail penalties, in that order.
// The output array must be sorted in descending order of the students' scores. Students who did not solve any problems should not be included in the output.

// For example, given logs like: "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70", your function should return: [[3, 110, 2, 0], [2, 60, 1, 1], [1, 50, 1, 1]].
// Each log entry is separated by a comma and space, and they are sorted chronologically. Dive into this task and have fun!

function analyzeStudentPerformance(logs: string): number[][] {
  const logMap = new Map();
  const logsArray = logs
    .split(",")
    .map((_) => _.trim())
    .filter(Boolean);

  for (const log of logsArray) {
    const [id, status, rawScore] = log.split(" ");
    const score = Number(rawScore) || 0;

    const prevRecord = logMap.get(id) ?? { score: 0, pass: 0, fail: 0 };

    const detail = {
      score: prevRecord.score + score,
      pass: Number(prevRecord.pass) + (status === "solve" ? 1 : 0),
      fail: Number(prevRecord.fail) + (status === "fail" ? 1 : 0),
    };

    logMap.set(id, detail);
  }

  const result = [...logMap.entries()].sort((a, b) => {
    if (a[1].score === b[1].score) return b[0] - a[0];
    return b[0] - a[0];
  });

  return result
    .map((r) => [Number(r[0]), r[1].score, r[1].pass, r[1].fail])
    .filter((r) => r[1] !== 0);
}

// Example usage:
let logs: string =
  "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70";

// Expected output: [[3, 110, 2, 0], [2, 60, 1, 1], [1, 50, 1, 1]]
console.log(analyzeStudentPerformance(logs));
