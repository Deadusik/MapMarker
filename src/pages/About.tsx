import { Box, Button, TextField, Typography } from "@mui/material"

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            <Box sx={{
                maxWidth: '600px'
            }}>
                <Typography variant="h3" gutterBottom>
                    About Us
                </Typography>
                <Typography
                    fontSize='18px'
                    variant="body1"
                    gutterBottom>
                    Our project is designed to make information easily accessible on a map. We display important points — from venues to events — so you can quickly find what you’re looking for nearby.
                </Typography>
                <Typography
                    fontSize='18px'
                    mt={3}
                    variant="body1"
                    gutterBottom>
                    With an interactive map and constantly updated data, we strive to provide convenience, accuracy, and fast access to the information you need. We welcome collaboration, new ideas, and your feedback.
                </Typography>

                {/* contact us block */}
                <Box mt={6}>
                    <Typography variant="h3" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography fontSize='18px' variant="body2" gutterBottom>
                        If you have suggestions, questions, or want to add a new point on the map — feel free to reach out!
                    </Typography>
                    {/* contact us form */}
                    <Box component="form"
                        mt={2}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            required />
                        <TextField
                            label="Email"
                            variant="outlined"
                            required
                            type="email" />
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required />
                        <Button
                            sx={{
                                height: "40px"
                            }}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Send
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default About