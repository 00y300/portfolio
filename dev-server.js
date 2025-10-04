import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
const port = 3001

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body

        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({
                message:
                    'Missing required fields: firstName, lastName, email, message',
            })
        }

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'onboarding@resend.dev',
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
        })

        return res
            .status(200)
            .json({ message: 'Email sent successfully', data })
    } catch (error) {
        console.error('Error sending email:', error)
        return res.status(500).json({
            message: 'Failed to send email',
            error: error instanceof Error ? error.message : 'Unknown error',
        })
    }
})

app.listen(port, () => {
    console.log(`Dev API server running at http://localhost:${port}`)
})
