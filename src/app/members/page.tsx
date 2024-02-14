'use client'
import PageTitle from "@/app/_components/PageTitle";
import MemberCard from "@/app/members/_components/flip";
import {AdminList} from "@/utils/DummyData";
import {Admin, AdminItem} from "@/utils/Interfaces";
import {useEffect, useState} from "react";
import axios from "axios";

const MembersPage = () => {
    const [adminList, setAdminList] = useState<Admin[]>(AdminList);

    useEffect(() => {
        axios.get('/api/members/getMembersList')
            .then((res) => {
                setAdminList(res.data.RESULT_DATA);
                console.log(res.data.RESULT_DATA);
            }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div className={'w-full flex flex-col'}>
            <div className={'w-full'}>
                <PageTitle>Members</PageTitle>
            </div>
            <div className={'w-full flex flex-col items-center'}>
                <YearButton/>
                <span className={'flex flex-row justify-center w-[1200px] flex-wrap'}>
                    {adminList.map(({list,year}:Admin)=>(
                        list.map(({member,role}:AdminItem)=>(
                            <MemberCard member={member} role={role}/>
                        ))
                    ))}
                </span>
            </div>
        </div>
    );
}

const YearButton = () => {
    return (
        <div className="mr-[20px] mb-[25px] grid w-[70px] h-[30px]">
                <select color={'transparent'} className="font-gmarket-m text-[16px] border-0 rounded-xl row-start-1 col-start-1 bg-gray-200">
                        {AdminList.map(({list,year}:Admin)=>(
                            <option value='year' className="border-0 font-gmarket-l">{year}</option>
                        ))}
                </select>
        </div>
    );
}
const style = () => {
}

export default MembersPage;