// script.js
async function askQuestion() {
  const question = document.getElementById('question').value;
  const responseElement = document.getElementById('answer');

  try {
    console.log('Sending request with question:', question);

    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` // Your API key here
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Ensure model name is correct
        prompt: question,
        max_tokens: 150
      })
    });

    // Log the status code and response
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    if (data.choices && data.choices.length > 0) {
      responseElement.textContent = data.choices[0].text.trim();
    } else {
      responseElement.textContent = 'No answer found.';
    }
  } catch (error) {
    console.error('Error:', error);
    responseElement.textContent = `Error fetching answer: ${error.message}`;
  }
}
