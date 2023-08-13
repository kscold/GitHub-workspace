// src/components/QuillEditor.tsx

import dynamic from "next/dynamic";

// dynamic을 사용하여 서버 사이드 렌더링을 비활성화하고 클라이언트 측에서만 QuillEditor를 로드하도록 설정합니다.
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      // 다른 설정 옵션들도 필요한 경우 여기에 추가할 수 있습니다.
    />
  );
};

export default QuillEditor;
