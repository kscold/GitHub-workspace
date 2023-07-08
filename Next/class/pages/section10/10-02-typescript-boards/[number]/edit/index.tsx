import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.cotainer";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
        query fetchBoard($number: Int){
            fetchBoard(number: $number){
                number
                writer
                title
                contents
            }
        }
    `

export default function GraphqlMutationPage() {

    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) } //router.query == useRouter().query정해진 변수
    })


    return (
        <div>
            <div>###########여기는 페이지입니다 ###########</div>
            <BoardWrite isEdit={true} data={data} />
            <div>###########여기는 페이지입니다 ###########</div>
        </div>
    )
}