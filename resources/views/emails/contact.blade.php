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
            background-color: #1a2b4b;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <p class="label">Name:</p>
                <p>{{ $contactData['firstName'] }} {{ $contactData['lastName'] }}</p>
            </div>
            <div class="field">
                <p class="label">Email:</p>
                <p>{{ $contactData['email'] }}</p>
            </div>
            <div class="field">
                <p class="label">Phone:</p>
                <p>{{ $contactData['phone'] }}</p>
            </div>
            <div class="field">
                <p class="label">Message:</p>
                <p>{{ $contactData['message'] }}</p>
            </div>
        </div>
    </div>
</body>
</html> 