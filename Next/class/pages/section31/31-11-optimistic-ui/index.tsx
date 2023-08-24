import { gql, useMutation, useQuery } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimaisitcUiPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: "64e71f765d6eaa0029f79dac" } }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "64e71f765d6eaa0029f79dac",
      },
      //   refetchQueries: [{}], // 리페치하는 방법
      optimisticResponse: {
        // 응답을 받았다고 가정하기 위해서 밑에와 같이 설정하고 data에 저장
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        // update: 캐시를 직접수정
        cache.writeQuery({
          // writeQuery는 기존의 없던 것도 추가 할 수 있음
          // fetchBoard의 값을 바꿔치기하거나 추가함
          query: FETCH_BOARD,
          variables: { boardId: "64e71f765d6eaa0029f79dac" },
          data: {
            fetchBoard: {
              _id: "64e71f765d6eaa0029f79dac",
              __typename: "Board", // 리턴타입을 설정 _id 와 __typename은 필수적임
              likeCount: data?.likeBoard, // 좋아요 갯수(6)
              // likeBoard로 받은 결과를 케시 안의 fetchBoard의 likeCount를 수정
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
