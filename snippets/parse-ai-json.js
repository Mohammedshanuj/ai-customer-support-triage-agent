const raw = $json.output[0].content[0].text;

const cleaned = raw
  .replace(/```json/g, '')
  .replace(/```/g, '')
  .trim();

const parsed = JSON.parse(cleaned);

return [
  {
    json: {
      category: parsed.category,
      priority: parsed.priority,
      summary: parsed.summary,
      needsHuman: parsed.needsHuman,
      suggestedReply: parsed.suggestedReply,
    },
  },
];
