const url = 'https://opentdb.com/api.php?amount=10'

export const getQuestions = () => {
    return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
}