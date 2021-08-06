export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
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
      optionOne,
      optionTwo,
      votesOne,
      votesTwo,
      totalVotes

      }
    }
  
