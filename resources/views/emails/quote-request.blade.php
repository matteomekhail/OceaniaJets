<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #0B2545;
            color: #FFD700;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666;
        }
        .section {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Quote Request</h1>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>Trip Details:</h2>
                <p><strong>From:</strong> {{ $quoteData['from'] }}</p>
                <p><strong>To:</strong> {{ $quoteData['to'] }}</p>
                <p><strong>Number of Passengers:</strong> {{ $quoteData['passengers'] }}</p>
                
                @if(isset($quoteData['tripType']))
                    <p><strong>Trip Type:</strong> {{ $quoteData['tripType'] }}</p>
                @endif
                
                @if(isset($quoteData['departureDate']))
                    <p><strong>Departure Date:</strong> {{ $quoteData['departureDate'] }}</p>
                @endif
                
                @if(isset($quoteData['departureTime']))
                    <p><strong>Departure Time:</strong> {{ $quoteData['departureTime'] }}</p>
                @endif
                
                @if(isset($quoteData['returnDate']))
                    <p><strong>Return Date:</strong> {{ $quoteData['returnDate'] }}</p>
                @endif
            </div>

            @if(isset($quoteData['aircraftCategory']) || isset($quoteData['specialRequirements']))
                <div class="section">
                    <h2>Aircraft Preferences:</h2>
                    @if(isset($quoteData['aircraftCategory']))
                        <p><strong>Aircraft Category:</strong> {{ $quoteData['aircraftCategory'] }}</p>
                    @endif
                    @if(isset($quoteData['specialRequirements']))
                        <p><strong>Special Requirements:</strong> {{ $quoteData['specialRequirements'] }}</p>
                    @endif
                </div>
            @endif

            @if(isset($quoteData['firstName']) || isset($quoteData['lastName']) || isset($quoteData['email']) || isset($quoteData['phone']))
                <div class="section">
                    <h2>Contact Information:</h2>
                    @if(isset($quoteData['firstName']) && isset($quoteData['lastName']))
                        <p><strong>Name:</strong> {{ $quoteData['firstName'] }} {{ $quoteData['lastName'] }}</p>
                    @endif
                    @if(isset($quoteData['email']))
                        <p><strong>Email:</strong> {{ $quoteData['email'] }}</p>
                    @endif
                    @if(isset($quoteData['phone']))
                        <p><strong>Phone:</strong> {{ $quoteData['phone'] }}</p>
                    @endif
                </div>
            @endif

            @if(isset($quoteData['additionalComments']))
                <div class="section">
                    <h2>Additional Comments:</h2>
                    <p>{{ $quoteData['additionalComments'] }}</p>
                </div>
            @endif
        </div>
        
        <div class="footer">
            <p>This is an automated message from Oceania Jets</p>
        </div>
    </div>
</body>
</html> 