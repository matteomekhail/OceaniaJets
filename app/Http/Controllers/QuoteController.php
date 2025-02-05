<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\QuoteRequest;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;
use Inertia\Inertia;

class QuoteController extends Controller
{
    public function sendQuote(Request $request)
    {
        $request->validate([
            'from' => 'required|string',
            'to' => 'required|string',
            'passengers' => 'required|string',
        ]);

        try {
            Resend::emails()->send([
                'from' => 'Oceania Jets <onboarding@resend.dev>',
                'to' => ['matteomekhail04@gmail.com'],
                'subject' => 'New Quote Request',
                'html' => (new QuoteRequest([
                    'from' => $request->from,
                    'to' => $request->to,
                    'passengers' => $request->passengers,
                ]))->render(),
            ]);

            return back()->with('success', 'Quote request sent successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to send quote request');
        }
    }
} 