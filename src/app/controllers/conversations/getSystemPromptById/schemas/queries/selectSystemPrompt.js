const { submitQuery, getFirst } = require("~root/lib/database");

const selectSystemPrompt = ({ systemPromptId }) => submitQuery`
    SELECT prompt_text
    FROM system_prompts
    WHERE system_prompt_id = ${systemPromptId}
`;

module.exports = getFirst(selectSystemPrompt);
