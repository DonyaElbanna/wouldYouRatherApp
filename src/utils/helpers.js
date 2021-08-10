
export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
  
  export function formatQuestion (question, author, authedUser) {
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

  // function generateUID () {
  //   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  // }

  // export  function formatQuestion ({ optionOneText, optionTwoText, author }) {
  //   return {
  //     id: generateUID(),
  //     timestamp: Date.now(),
  //     author,
  //     optionOne: {
  //       votes: [],
  //       text: optionOneText,
  //     },
  //     optionTwo: {
  //       votes: [],
  //       text: optionTwoText,
  //     }
  //   }
  // }