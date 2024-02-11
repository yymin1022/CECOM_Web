import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {getActivityList} from "@/utils/FirebaseUtil";

export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const activityList = await getActivityList();
    if(activityList === undefined || activityList.count === 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200 });
    }

    apiResult.RESULT_DATA = activityList;
    return NextResponse.json(apiResult, { status: 200 });
}