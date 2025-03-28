import { NextResponse } from "next/server";
import { url } from "../../../_api/api_client";

export async function POST(req) {
  const obj = await req.json();
  const moduleName = obj.moduleName;
  delete obj.moduleName;

  try {
    const addEndpoint = `${url()}/${moduleName}/save`;

    const responseObj = await response.json();

    console.log("response", responseObj);

    if (!response || response.status !== 200 || !response.status) {
      return NextResponse.json(
        {
          success: false,
          message: response.message || `Module ${moduleName} not added.`,
        },
        {
          status: response.status ? response.status : 500,
        }
      );
    }
    return NextResponse.json(
      {
        success: true,
        data: response.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Module ${moduleName} error during adding:`, error);
    return NextResponse.json(
      {
        success: false,
        message: `Error processing adding moduleName ${moduleName}`,
      },
      { status: 500 }
    );
  }
}