import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/utils/Interfaces";
import {corsHeader} from "@/utils/CorsUtil";
import {getRecruitAvailability} from "@/utils/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    apiResult.RESULT_DATA = await getRecruitAvailability();

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}