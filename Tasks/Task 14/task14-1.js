const quoteDiv = document.querySelector(".quote-text");
const btnGenerateQuote = document.querySelector("button");


btnGenerateQuote.addEventListener("click", async function() {
    try {
        const quote = await getRandomQuote();
    
        quoteDiv.innerHTML =`<p class="quote">"${quote.content}"</p><p class="author">— ${quote.author}</p>`
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteDiv.innerHTML = `<p class="quote">Failed to fetch a quote.</p>`;

    }
});

async function getRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}
