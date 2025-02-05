<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormSubmission;
use Illuminate\Http\Request;
use Resend\Laravel\Facades\Resend;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'firstName' => 'required|string|min:2|max:50',
            'lastName' => 'required|string|min:2|max:50',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|min:8|max:20',
            'message' => 'required|string|max:1000',
        ], [
            'firstName.required' => 'Please enter your first name',
            'lastName.required' => 'Please enter your last name',
            'email.required' => 'Please enter your email address',
            'email.email' => 'Please enter a valid email address',
            'phone.required' => 'Please enter your phone number',
            'message.required' => 'Please enter your message',
        ]);

        try {
            $contactData = $request->all();

            Resend::emails()->send([
                'from' => 'Oceania Jets <onboarding@resend.dev>',
                'to' => ['info@mcmprogroup.com'],
                'subject' => 'New Contact Form Submission',
                'html' => (new ContactFormSubmission($contactData))->render(),
            ]);

            return back()->with('success', 'Thank you for your message. We will get back to you soon!');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to send message. Please try again later.');
        }
    }
} 