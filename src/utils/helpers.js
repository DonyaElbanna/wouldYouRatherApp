  export function formatQuestion (question, author) {
    const { id, timestamp } = question
    const { name, avatarURL } = author
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const votesOne = question.optionOne.votes.length
    const votesTwo = question.optionTwo.votes.length
    const totalVotes = votesOne + votesTwo

    return {
      id,
      name: name,
      timestamp,
      avatar: avatarURL,
      author,
      optionOne,
      optionTwo,
      votesOne,
      votesTwo,
      totalVotes
      }
    }
