import { Modal } from "antd"
import { useState } from "react"
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';


export default function ModalAlertPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false)

    // const showModal = (): void => {
    //     setIsOpen((prev) => !prev) // true을 넣어도 되지만 기존 값을 가져와서 뒤집어도 됨 이전값이 없으면 기본값 참조, 신기하게 다 똑같이 생김
    // }

    // const handleOk = (): void => {
    //     setIsOpen((prev) => !prev)
    // }

    // const handleCancel = (): void => {
    //     setIsOpen((prev) => !prev)
    // }

    const onToggleModal = (): void => {
        setIsOpen((prev) => !prev)
    }

    const handleComplete = (data: Address): void => {
        console.log(data);
        // setIsOpen((prev) => !prev)
        onToggleModal()
    }

    return (
        <>
            <button onClick={onToggleModal}>모달창 열기!!</button>

            {/* 모달 종료 방식 -1. 모달 숨기는 방법(ex, 이력서 등) */}
            {/* <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
                <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal> */}

            {/* 모달 종료 방식 -2. 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
            {isOpen && ( // isOpen이 ture면 화면을 그리고 false면 화면을 그리지 않음
                <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
            )}
        </>
    )
}
