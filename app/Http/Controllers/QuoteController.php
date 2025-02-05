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
            'from' => 'required|string|min:3',
            'to' => 'required|string|min:3',
            'passengers' => 'required|string',
            // Optional fields for full quote form
            'tripType' => 'nullable|string|in:One Way,Round Trip,Multi-City',
            'departureDate' => 'nullable|date|after_or_equal:today',
            'departureTime' => 'nullable|date_format:H:i',
            'returnDate' => 'nullable|date|after_or_equal:departureDate',
            'aircraftCategory' => 'nullable|string|in:Light Jet,Midsize Jet,Heavy Jet',
            'specialRequirements' => 'nullable|string|max:1000',
            'firstName' => 'nullable|string|min:2|max:50',
            'lastName' => 'nullable|string|min:2|max:50',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|min:8|max:20',
            'additionalComments' => 'nullable|string|max:1000',
        ], [
            'from.required' => 'Please specify the departure location',
            'to.required' => 'Please specify the destination location',
            'passengers.required' => 'Please specify the number of passengers',
            'departureDate.after_or_equal' => 'Departure date must be today or later',
            'returnDate.after_or_equal' => 'Return date must be after or equal to departure date',
        ]);

        try {
            $quoteData = array_filter($request->all());

            Resend::emails()->send([
                'from' => 'Oceania Jets <onboarding@resend.dev>',
                'to' => ['info@mcmprogroup.com'],
                'subject' => 'New Quote Request',
                'html' => (new QuoteRequest($quoteData))->render(),
            ]);

            return back()->with('success', 'Quote request sent successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to send quote request');
        }
    }
} 