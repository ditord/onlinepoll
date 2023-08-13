const questions = [
  {
    id: 1,
    question: "What is your favorite color?",
    answers: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    id: 2,
    question: "What is your favorite food?",
    answers: ["Pizza", "Burgers", "Ice cream", "Chocolate"],
  },
];

const votes = {};

const handleVote = (questionId, answerId) => {
  if (!votes[questionId]) {
    votes[questionId] = [];
  }

  votes[questionId].push(answerId);
};

const getVotes = (questionId) => {
  if (!votes[questionId]) {
    return [];
  }

  return votes[questionId];
};

const renderVotingPage = () => {
  const html = `
    <h1>Voting</h1>

    <ul>
      ${questions.map((question) => (
        <li key={question.id}>
          <h2>{question.question}</h2>
          <ul>
            ${question.answers.map((answer) => (
              <li key={answer.id}>
                <input type="radio" name={question.id} value={answer.id} /> {answer.answer}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <button type="submit">Vote</button>
  `;

  return html;
};

const app = () => {
  const questions = questions.map((question) => ({
    id: question.id,
    question: question.question,
    answers: question.answers,
    votes: getVotes(question.id),
  }));

  const handleVote = (event) => {
    const questionId = event.target.name;
    const answerId = event.target.value;

    handleVote(questionId, answerId);
  };

  return renderVotingPage();
};
