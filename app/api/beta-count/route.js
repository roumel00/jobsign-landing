import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Organisation } from '@/lib/models';

export async function GET() {
  try {
    await connectToDatabase();

    // Count organisations with beta trial conditions
    const betaTrialCount = await Organisation.countDocuments({
      'subscription.status': 'beta',
    });

    const maxBetaTrials = 50;
    const remainingSpots = Math.max(0, maxBetaTrials - betaTrialCount);

    return NextResponse.json({
      betaTrialCount,
      maxBetaTrials,
      remainingSpots,
      isLimited: remainingSpots <= 10
    });

  } catch (error) {
    console.error('Beta count error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 