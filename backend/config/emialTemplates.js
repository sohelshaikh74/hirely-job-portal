export const WELCOME_TEMPLATE = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h1 {
            color: #333;
        }

        .message {
            font-size: 16px;
            color: #555;
            line-height: 1.6;
        }

        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
            margin-top: 30px;
        }

        .hire{
            color: #275DF5
        }
        .ly{
        color:#f83002
            }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to
                <span class="hire">Hire</span><span class="ly">Ly</span>  Job Portal!
            </h1>
        </div>
        <div class="message">
            <p>Dear User,</p>
            <p>Welcome to Hirely, your job portal! Your account has been created successfully with the email ID:
                <strong>{{email}}</strong>
            </p>
            <p>We are excited to have you on board. You can now start browsing and applying for jobs on our platform!
            </p>
            <p>Best regards,</p>
            <p>The Hirely Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Hirely. All rights reserved.</p>
        </div>
    </div>
</body>

</html>`;
