// material
import { CardContent, Typography } from "@mui/material"
//styled components
import {
    AboutContainer, ContactUsFormContainer,
    ContactUsField, SubmitButton,
    ContactUsCard, AboutContent
} from "@/styled/pages/styledAbout"

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                {/* info content */}
                <Typography variant="h3" gutterBottom>
                    About Us
                </Typography>
                <Typography fontSize="18px" variant="body1" gutterBottom>
                    Our project is designed to make information easily accessible on a map. We display important points — from venues to events — so you can quickly find what you’re looking for nearby.
                </Typography>
                <Typography fontSize="18px" mt={3} variant="body1" gutterBottom>
                    With an interactive map and constantly updated data, we strive to provide convenience, accuracy, and fast access to the information you need. We welcome collaboration, new ideas, and your feedback.
                </Typography>
                {/* contact us card */}
                <ContactUsCard>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography fontSize="18px" variant="body2" gutterBottom>
                            If you have suggestions, questions, or want to add a new point on the map — feel free to reach out!
                        </Typography>
                        {/* contact us form */}
                        <ContactUsFormContainer component="form" mt={2}>
                            <ContactUsField label="Your Name" variant="outlined" required />
                            <ContactUsField label="Email" variant="outlined" required type="email" />
                            <ContactUsField label="Message" variant="outlined" multiline rows={4} required />
                            <SubmitButton type="submit" variant="contained" color="primary">Send</SubmitButton>
                        </ContactUsFormContainer>
                    </CardContent>
                </ContactUsCard>
            </AboutContent>
        </AboutContainer>
    )
}

export default About