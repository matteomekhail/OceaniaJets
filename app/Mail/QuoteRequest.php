<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class QuoteRequest extends Mailable
{
    use Queueable, SerializesModels;

    public $quoteData;

    public function __construct(array $quoteData)
    {
        $this->quoteData = $quoteData;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Quote Request from Oceania Jets',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.quote-request',
        );
    }

    public function render()
    {
        return view('emails.quote-request')
            ->with(['quoteData' => $this->quoteData])
            ->render();
    }
} 