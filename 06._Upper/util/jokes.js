
import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJoke() {
    const URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    const response = await fetch(URL);
    const result = response.json();

    // if the result.joke is defined || you define the joke by its keys 
    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`;
    const { score } = sentiment.analyze(jokeToAnalyze);
    if (score < 0) {
        // I don't like that joke .. I want to get a new one
        return await getJoke();
    }
    return result;
}

// this will log in the console a score based on the words (positive words rate high and non-positive rate low)
console.log(sentiment.analyze("Node is excellent"));

export default getJoke;



