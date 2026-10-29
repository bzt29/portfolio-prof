import { NextResponse } from "next/server";
import { PortfolioService } from "@/services/portfolioService";

export async function GET() {
  try {
    const data = await PortfolioService.getPortfolioData();
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch portfolio data",
      },
      { status: 500 }
    );
  }
}
