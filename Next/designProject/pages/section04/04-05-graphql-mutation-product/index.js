import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { #변수의 타입 적는 곳 gql 주석은 #
        createProduct(seller: $seller, createProductInput: $createProductInput){ #실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "레이저 마우스",
                    price: 60000
                }
            }
        })
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API요청하기</button>
}