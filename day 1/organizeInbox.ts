// Imagine maintaining a large mailbox receiving emails from various sources.
// Your mission is to organize these emails by implementing a function named organizeInbox in TypeScript.

// This function will take a string of emails and output an array of strings.
// Each string should show the sender's email address and the total count of emails received from that sender, separated by a space.

// Emails are represented by metadata such as "Sender Email Address, Subject, Timestamp", concatenated into a single string and separated by semicolons.

// Given the input logs: "sender1@example.com, Subject1, 09:00; sender2@example.com, Subject2, 10:00; sender1@example.com, Subject3, 12:00"

// The function should return: ["sender1@example.com 2", "sender2@example.com 1"]

// Steps to achieve the results:

// Extract email addresses.
// Count emails from each sender.
// Return an array of strings ("sender email count").
// Sort by email count (descending) and sender's email (ascending if counts are equal).

function organizeInbox(inboxString: string): string[] {
  const emails = inboxString.split(";");
  const emailMap = new Map<string, number>();

  for (const emailString of emails) {
    let email = emailString.split(",")[0].trim();
    emailMap.set(email, (emailMap.get(email) ?? 0) + 1);
  }

  const result = [...emailMap.entries()].sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });

  return result.map(([sender, count]) => `${sender} ${count}`);
}

// Usage example
const inboxString: string =
  "sender1@example.com, Subject1, 09:00; sender2@example.com, Subject2, 10:00; sender1@example.com, Subject3, 12:00";

// Expected output: ["sender1@example.com 2", "sender2@example.com 1"]
console.log(organizeInbox(inboxString));
