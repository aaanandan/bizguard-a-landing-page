import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Add timestamp and source to the data
    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
      source: data.profession ? 'waitlist' : 'subscription'
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // Define log file paths
    const logFile = path.join(dataDir, 
      data.profession ? 'waitlist-submissions.json' : 'subscriptions.json'
    );

    // Read existing data or create empty array
    let existingData = [];
    if (fs.existsSync(logFile)) {
      const fileContent = fs.readFileSync(logFile, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Add new submission
    existingData.push(enrichedData);

    // Save updated data
    fs.writeFileSync(logFile, JSON.stringify(existingData, null, 2));

    console.log('New submission saved:', {
      type: data.profession ? 'waitlist' : 'subscription',
      timestamp: enrichedData.timestamp,
      email: data.email
    });

    return NextResponse.json({ 
      success: true,
      message: 'Submission saved successfully'
    });

  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to save submission' },
      { status: 500 }
    );
  }
} 