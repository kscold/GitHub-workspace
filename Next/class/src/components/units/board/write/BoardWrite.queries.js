//변수의 형식을 꼭 지정해 주어야함
const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`