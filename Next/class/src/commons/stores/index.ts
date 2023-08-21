import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable", // 함수명
  get: async () => {
    const newAccessToken = await getAccessToken(); // 리코일에서 먼저 요청을 함 즉 이 부분이 조건
    return newAccessToken; // props로 보낼 수 있도록 설정을 함
  },
});
