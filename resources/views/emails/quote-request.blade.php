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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Quote Request</h1>
        </div>
        
        <div class="content">
            <h2>Quote Details:</h2>
            
            <p><strong>From:</strong> {{ $quoteData['from'] }}</p>
            <p><strong>To:</strong> {{ $quoteData['to'] }}</p>
            <p><strong>Number of Passengers:</strong> {{ $quoteData['passengers'] }}</p>
            
            <p>A new quote request has been submitted through the Oceania Jets website. Please review the details above and respond to the customer as soon as possible.</p>
        </div>
        
        <div class="footer">
            <p>This is an automated message from Oceania Jets</p>
        </div>
    </div>
</body>
</html> 