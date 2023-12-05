//df-result page: generate random score.
function generateRandomScore() {
    const randomscore = Math.floor(Math.random() * 11) + 90;
    console.log(randomscore);
    document.getElementById('randomscore').innerHTML = randomscore;
}

// df-1 page: generate date
function updateFormattedDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    console.log(formattedDate);
    document.getElementById('df-date').innerHTML = formattedDate;
}

// fc-result page: generate fortune cookie message.
function generateFortuneCookie() {
		const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
		const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
		const data = {
			prompt: {
				text: "Randomly generate a fortune cookie message in 10-20 words."
			},
			temperature: 0.7,
			top_k: 40,
			top_p: 0.95,
			candidate_count: 1,
			max_output_tokens: 1024,
			stop_sequences: [],
			safety_settings: [
				{ category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
    			{ category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
   				{ category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
    			{ category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
    			{ category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
    			{ category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
			]			
		};
	
		async function getFortuneCookie() {
			const affirmation = document.querySelector('#fc-result');
			const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
          affirmation.textContent = cleanedText;
        })
        .catch(error => console.error('Error:', error));
        }
	document.addEventListener('DOMContentLoaded', getFortuneCookie);
}

// ba-result page: generate answer from book of answers.
function generateBookofAnswers() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly get an answer from The Book of Answers in about 5 words."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getBookofAnswers() {
        const affirmation = document.querySelector('#ba-result-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getBookofAnswers);
}


// df-result page - overall: generate an overall daily fortune.
function generateOverallFortune() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly generate a positive overview about general today fortune using about 50 words with the beginning of 'In general,'."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getOverallFortune() {
        const affirmation = document.querySelector('.df-result-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getOverallFortune);
}

// df-result page - relationship: generate a daily fortune about relationships.
function generateRelationshipsFortune() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly generate a positive fortune about relationships (for singles and non-singles respectively) using about 50 words with the beginning of 'In relationships,'."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getRelationshipsFortune() {
        const affirmation = document.querySelector('#relationships-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getRelationshipsFortune);
}

// df-result page - health and wellness: generate a daily fortune about health and wellness.
function generateHealthFortune() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly generate a positive fortune about health and wellness using about 50 words with the beginning of 'In personal health,'."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getHealthFortune() {
        const affirmation = document.querySelector('#health-wellness-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getHealthFortune);
}

// df-result page - career and education: generate a daily fortune about career and education.
function generateCareerEducationFortune() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly generate a positive fortune about career and education (for professionals and students respectively) using about 50 words."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getCareerEducationFortune() {
        const affirmation = document.querySelector('#career-education-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getCareerEducationFortune);
}

// df-result page - wealth and finance: generate a daily fortune about wealth and finance.
function generateWealthFortune() {
    const API_KEY = "AIzaSyAiFFieFRjYj69_kEbACC_1nSRNSX1GrxI";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${API_KEY}`;
    const data = {
        prompt: {
            text: "Randomly generate a positive fortune about personal wealth and finance using about 50 words with the beginning of 'In personal wealth,'."
        },
        temperature: 0.7,
        top_k: 40,
        top_p: 0.95,
        candidate_count: 1,
        max_output_tokens: 1024,
        stop_sequences: [],
        safety_settings: [
            { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
            { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
               { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
            { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
            { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
            { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 }
        ]			
    };

    async function getWealthFortune() {
        const affirmation = document.querySelector('#wealth-finance-content');
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const cleanedText = data.candidates[0].output.replace(/\*\*/g, '');
      affirmation.textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
    }
document.addEventListener('DOMContentLoaded', getWealthFortune);
}