// script.js
async function askQuestion() {
  const question = document.getElementById('question').value;
  const responseElement = document.getElementById('answer');

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` // Your API key here
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: question,
        max_tokens: 150
      })
    });

    const data = await response.json();
    responseElement.textContent = data.choices[0].text.trim();
  } catch (error) {
    responseElement.textContent = 'Error fetching answer.';
  }
}
