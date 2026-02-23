import React, { useState, useEffect } from "react";

interface Props {
    checked:boolean;
    setChecked: (checked: boolean) => void;
}

const PersonalInfoConsent = ({checked, setChecked}: Props) => {
    const [term, setTerm] = useState<string>("");

    useEffect(() => {
        // 컴포넌트가 마운트된(클라이언트 렌더링) 이후에 값을 계산해서 주입
        setTerm(getRecruitmentTerm());
    }, []);

    return (
        <>
            <div className='font-gmarket-m mb-[3px] text-[20px]'>개인정보 수집 동의</div>
            <div className='text-pretty mb-[3px]'>본 지원서에 답변하신 내용은 CECOM {term} 신입부원 선발에만 사용될 예정이며, 이후에는 폐기됩니다.</div>
            <div className='flex flex-col ml-[5px]'>
                <label><input type="checkbox" checked={checked}
                               onChange={({target: {checked}}) => setChecked(true)}/> 동의합니다.</label>
                <label><input type="checkbox" checked={!checked}
                              onChange={({target: {checked}}) => setChecked(false)}/> 동의하지 않습니다.</label>
            </div>
        </>
    )
}

// 연도/학기에 맞는 문자열을 만들어낸다
const getRecruitmentTerm = (): string => {
    // 현재 날짜
    const now = new Date();
    // 연도 값 (2026 -> 26)
    const year = now.getFullYear() % 100;
    // 학기 값 (상반기 -> 1 / 하반기 -> 2)
    const month = now.getMonth();
    const semester = month < 6 ? 1 : 2; 

    return `${year}-${semester}`;
};


export default PersonalInfoConsent;