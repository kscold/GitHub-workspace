import { useMutation, gql } from '@apollo/client'

const graphsetting = gql`
    mutation{
        createBoard(writer:"철수", title:"안녕하세요", contents: "반갑습니다"){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [나의함수] = useMutation(graphsetting) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }

    return <button>GRAPHQL-API요청하기</button>
}